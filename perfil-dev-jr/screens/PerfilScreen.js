import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profileImage = require('../assets/image-perfil.png');

export default function PerfilScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			
			{/* Bloco Superior Compacto Lateral */}
			<View style={styles.profileRow}>
				<Image source={profileImage} style={styles.miniPhoto} />
				<View style={styles.profileInfo}>
					<Text style={styles.name}>Luiz Felipe Allage D.</Text>
					<Text style={styles.role}>Mobile Developer</Text>
					<View style={styles.locationContainer}>
						<Ionicons name="location-outline" size={12} color="#64748B" />
						<Text style={styles.locationText}>São Paulo, BR</Text>
					</View>
				</View>
			</View>

			{/* Grid de Tags de Interesses Rápidos */}
			<View style={styles.tagGrid}>
				<View style={styles.tag}><Text style={styles.tagText}>🛹 Skate</Text></View>
				<View style={styles.tag}><Text style={styles.tagText}>🎵 Music</Text></View>
				<View style={styles.tag}><Text style={styles.tagText}>🍔 Foodie</Text></View>
				<View style={styles.tag}><Text style={styles.tagText}>❤️ Anna Beatriz</Text></View>
			</View>

			{/* Bloco de Texto Minimalista */}
			<View style={styles.bioBlock}>
				<Text style={styles.bioTitle}>Bio</Text>
				<Text style={styles.bioText}>
					Prazer, sou o Luiz! Minha vida se resume a boas experiências e, claro, as pessoas que fazem a diferença na minha caminhada. O asfalto e as pistas de skate são o meu espaço de liberdade e foco, onde me desafio a cada manobra.{"\n\n"}
					Para acompanhar essa adrenalina e seguir o ritmo do meu dia, a música está sempre presente como a trilha sonora ideal. Além do esporte e dos fones de ouvido, sou um verdadeiro apreciador da boa culinária, não dispenso uma boa comida e adoro descobrir novos sabores.{"\n\n"}
					Acima de tudo, vivo uma fase incrível no amor, sendo completamente apaixonado pela minha namorada, Anna Beatriz. Sigo vivendo de forma autêntica, curtindo cada momento e valorizando quem está sempre ao meu lado.{"\n\n"}
					AMOR, EU TE AMO! ❤️
				</Text>
			</View>
		</ScrollView>
	 );
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
	profileRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	miniPhoto: {
		width: 80,
		height: 80,
		borderRadius: 20,
		backgroundColor: '#1E293B',
	},
	profileInfo: {
		flex: 1,
	},
	name: {
		color: '#F8FAFC',
		fontSize: 22,
		fontWeight: '700',
	},
	role: {
		color: '#38BDF8',
		fontSize: 14,
		fontWeight: '600',
		marginTop: 2,
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		marginTop: 6,
	},
	locationText: {
		color: '#64748B',
		fontSize: 12,
	},
	tagGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 8,
		marginVertical: 24,
	},
	tag: {
		backgroundColor: '#1E293B',
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#334155',
	},
	tagText: {
		color: '#E2E8F0',
		fontSize: 12,
		fontWeight: '500',
	},
	bioBlock: {
		backgroundColor: '#1E293B',
		borderRadius: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: '#334155',
	},
	bioTitle: {
		color: '#F8FAFC',
		fontSize: 14,
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: 1,
		marginBottom: 8,
	},
	bioText: {
		color: '#94A3B8',
		fontSize: 13,
		lineHeight: 20,
	},
});
