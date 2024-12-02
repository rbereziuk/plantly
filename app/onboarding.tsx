import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { Button } from '@/components/Button';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHadOnboarded();
    router.replace('/');
  };

  return (
    <LinearGradient
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Button title="Let me in!" onPress={handlePress} />
    </LinearGradient>
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
