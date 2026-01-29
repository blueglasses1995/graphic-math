import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { allCategories } from '@learnmath/tutorials';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>LearnMath</Text>
      <Text style={styles.subtitle}>数学を視覚的に学ぶ</Text>

      {allCategories.map((category) => (
        <View key={category.id} style={styles.category}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Text style={styles.categoryDesc}>{category.description}</Text>
          {category.tutorials.map((tutorial) => (
            <TouchableOpacity key={tutorial.id} style={styles.tutorialCard}>
              <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
              <Text style={styles.tutorialDesc}>{tutorial.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#94a3b8', textAlign: 'center', marginBottom: 30 },
  category: { backgroundColor: '#1e293b', borderRadius: 12, padding: 16, marginBottom: 16 },
  categoryTitle: { fontSize: 20, fontWeight: '600', color: '#fff', marginBottom: 4 },
  categoryDesc: { fontSize: 14, color: '#94a3b8', marginBottom: 12 },
  tutorialCard: { backgroundColor: '#334155', borderRadius: 8, padding: 12, marginBottom: 8 },
  tutorialTitle: { fontSize: 16, fontWeight: '500', color: '#fff' },
  tutorialDesc: { fontSize: 13, color: '#cbd5e1', marginTop: 4 },
});
