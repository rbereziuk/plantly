import { FlatList, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { usePlantsStore } from '@/store/plantsStore';
import { PlantCard } from '@/components/PlantCard';
import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';

export default function App() {
  const plants = usePlantsStore((state) => state.plants);
  const router = useRouter();

  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <Button
          title="Add your first plant"
          onPress={() => router.navigate('/new')}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
