import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const skills = [
	{ id: '1', name: 'React Native', icon: 'logo-react' },
	{ id: '2', name: 'Expo', icon: 'box' },
	{ id: '3', name: 'JavaScript', icon: 'logo-javascript' },
	{ id: '4', name: 'StyleSheet', icon: 'color-palette-outline' },
	{ id: '5', name: 'Git & GitHub', icon: 'logo-github' },
	{ id: '6', name: 'UI/UX Design', icon: 'layers-outline' },
	{ id: '7', name: 'NodeJS', icon: 'server-outline' },
	{ id: '8', name: 'Python', icon: 'logo-python' },
	{ id: '9', name: 'Responsivo', icon: 'phone-portrait-outline' }
];

export default function HabilidadesScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				data={skills}
				keyExtractor={(item) => item.id}
				numColumns={2} // Transforma a lista em duas colunas de blocos pequenos
				columnWrapperStyle={styles.rowGrid}
				contentContainerStyle={styles.list}
				ListHeaderComponent={() => (
					<View style={styles.headerGap}>
						<Text style={styles.title}>Tech Stack</Text>
						<Text style={styles.subtitle}>Competências técnicas divididas em blocos de desenvolvimento.</Text>
					</View>
				)}
				renderItem={({ item }) => (
					<View style={styles.skillBox}>
						<View style={styles.iconCircle}>
							<Ionicons 
								name={item.icon.startsWith('logo-') ? item.icon : 'code-working-outline'} 
								size={18} 
								color="#38BDF8" 
							/>
						</View>
						<Text style={styles.skillName} numberOfLines={1}>{item.name}</Text>
					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F172A',
		paddingHorizontal: 20,
	},
	headerGap: {
		marginBottom: 20,
		marginTop: 16,
	},
	title: {
		color: '#F8FAFC',
		fontSize: 24,
		fontWeight: '700',
	},
	subtitle: {
		color: '#64748B',
		fontSize: 13,
		marginTop: 4,
	},
	list: {
		paddingBottom: 32,
	},
	rowGrid: {
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	skillBox: {
		backgroundColor: '#1E293B',
		width: '48%', // Alinhamento exato para duas colunas
		borderRadius: 12,
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		borderWidth: 1,
		borderColor: '#334155',
	},
	iconCircle: {
		width: 32,
		height: 32,
		borderRadius: 8,
		backgroundColor: '#0F172A',
		alignItems: 'center',
		justifyContent: 'center',
	},
	skillName: {
		color: '#E2E8F0',
		fontSize: 13,
		fontWeight: '600',
		flex: 1,
	},
});
