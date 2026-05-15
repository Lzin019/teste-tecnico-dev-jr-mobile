import { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const tabs = [
  { key: 'perfil', label: 'Início', icon: 'person-outline', iconActive: 'person' },
  { key: 'habilidades', label: 'Habilidades', icon: 'flash-outline', iconActive: 'flash' },
  { key: 'projetos', label: 'Projetos', icon: 'folder-open-outline', iconActive: 'folder-open' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('perfil');

  const screen = useMemo(() => {
    if (activeTab === 'habilidades') return <HabilidadesScreen />;
    if (activeTab === 'projetos') return <ProjetosScreen />;
    return <PerfilScreen />;
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Luiz Felipe</Text>
          <Text style={styles.headerSubtitle}>Software Developer Portfolio</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>v2.0</Text>
        </View>
      </View>

      <View style={styles.content}>{screen}</View>

      <View style={styles.bottomNav}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={styles.navButton}
            >
              <Ionicons 
                name={isActive ? tab.iconActive : tab.icon} 
                size={20} 
                color={isActive ? '#38BDF8' : '#64748B'} 
              />
              <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#1E293B',
  },
  headerTitle: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#334155',
  },
  badgeText: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderTopWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 12,
    paddingBottom: 24,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  navLabel: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#38BDF8',
    fontWeight: '600',
  },
});
