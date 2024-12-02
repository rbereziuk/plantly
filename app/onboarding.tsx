import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';
import { Button } from '@/components/Button';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHadOnboarded();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Button title="Let me in!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
  },
});
