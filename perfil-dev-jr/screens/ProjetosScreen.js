import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const projects = [
	{ id: '1', name: 'SkateTracks', description: 'Mapeamento de pistas de skate e picos locais.', tag: 'Mobile App' },
	{ id: '2', name: 'BeatMatch', description: 'Sincronização de músicas com o ritmo do treino.', tag: 'Audio API' },
	{ id: '3', name: 'ChefGuia', description: 'Plataforma de receitas e avaliação de restaurantes.', tag: 'Full Stack' },
	{ id: '4', name: 'LoveCounter', description: 'Contador de tempo de namoro e mural de fotos.', tag: 'Personal Widget' },
	{ id: '5', name: 'DevRoutine', description: 'Pomodoro focado em rotina de programadores.', tag: 'Tailwind UI' }
];

const contactItems = [
	{ id: 'email', value: 'luiz.felipe14@aluno.senai.br', icon: 'mail-outline' },
	{ id: 'github', value: 'https://github.com/Lzin019', icon: 'logo-github' },
	{ id: 'instagram', value: '@eu.lzin', icon: 'logo-instagram' },
	{ id: 'whatsapp', value: '+55 19 99999-9999', icon: 'logo-whatsapp' },
];

export default function ProjetosScreen() {
	const [message, setMessage] = useState('');

	const handleSendContact = () => {
		if (!message.trim()) {
			Alert.alert('Aviso', 'Escreva uma mensagem antes de enviar.');
			return;
		}
		Alert.alert('Sucesso', 'Sua mensagem simulada foi enviada.');
		setMessage('');
	};

	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			
			<Text style={styles.sectionTitle}>Portfólio</Text>
			<View style={styles.verticalList}>
				{projects.map((project) => (
					<View key={project.id} style={styles.compactCard}>
						<View style={styles.cardHeader}>
							<Text style={styles.projectName}>{project.name}</Text>
							<View style={styles.projectTag}><Text style={styles.projectTagText}>{project.tag}</Text></View>
						</View>
						<Text style={styles.projectDescription}>{project.description}</Text>
					</View>
				))}
			</View>

			<Text style={styles.sectionTitle}>Canais Remotos</Text>
			<View style={styles.contactRowContainer}>
				{contactItems.map((contact) => (
					<TouchableOpacity key={contact.id} style={styles.miniContactBtn}>
						<Ionicons name={contact.icon} size={18} color="#38BDF8" />
						<Text style={styles.miniContactText} numberOfLines={1}>{contact.value}</Text>
					</TouchableOpacity>
				))}
			</View>

			<Text style={styles.sectionTitle}>Quick Message</Text>
			<TextInput
				style={styles.minimalInput}
				placeholder="Seu recado aqui..."
				placeholderTextColor="#475569"
				value={message}
				onChangeText={setMessage}
			/>
			<TouchableOpacity style={styles.submitBtn} onPress={handleSendContact}>
				<Text style={styles.submitBtnText}>Enviar</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#0F172A',
	},
	sectionTitle: {
		color: '#64748B',
		fontSize: 12,
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: 1,
		marginTop: 24,
		marginBottom: 12,
	},
	verticalList: {
		gap: 8,
	},
	compactCard: {
		backgroundColor: '#1E293B',
		borderRadius: 12,
		padding: 12,
		borderWidth: 1,
		borderColor: '#334155',
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	projectName: {
		color: '#F8FAFC',
		fontSize: 15,
		fontWeight: '600',
	},
	projectTag: {
		backgroundColor: '#0F172A',
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 6,
	},
	projectTagText: {
		color: '#38BDF8',
		fontSize: 10,
		fontWeight: '600',
	},
	projectDescription: {
		color: '#94A3B8',
		fontSize: 13,
		marginTop: 4,
	},
	contactRowContainer: {
		gap: 6,
	},
	miniContactBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#1E293B',
		padding: 10,
		borderRadius: 10,
		gap: 10,
	},
	miniContactText: {
		color: '#E2E8F0',
		fontSize: 13,
	},
	minimalInput: {
		backgroundColor: '#1E293B',
		borderRadius: 10,
		padding: 12,
		color: '#FFFFFF',
		fontSize: 13,
		borderWidth: 1,
		borderColor: '#334155',
	},
	submitBtn: {
		backgroundColor: '#38BDF8',
		borderRadius: 10,
		paddingVertical: 12,
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 20,
	},
	submitBtnText: {
		color: '#0F172A',
		fontSize: 14,
		fontWeight: '700',
	},
});
