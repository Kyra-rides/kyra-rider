import { Alert, Button, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AadhaarScreen() {
  // Local memory for the 12-digit Aadhaar number the user types.
  const [aadhaar, setAadhaar] = useState('');

  const handleContinue = () => {
    // Mock validation: real Aadhaar uses a 12-digit number with a Verhoeff
    // checksum, and verification happens via UIDAI's eKYC API. For now we
    // only check the digit count so the demo flow works end-to-end.
    if (aadhaar.length !== 12) {
      Alert.alert(
        'Enter your 12-digit Aadhaar',
        'Aadhaar numbers are exactly 12 digits.'
      );
      return;
    }
    Alert.alert(
      'Aadhaar received ✓',
      'Selfie verification is the next step (coming soon).',
      [
        // dismissAll pops the entire onboarding stack and returns to the
        // welcome screen. When the selfie screen exists, this becomes
        // router.push('/selfie') instead.
        { text: 'Continue', onPress: () => router.dismissAll() },
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Verify your identity
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Enter your 12-digit Aadhaar to confirm you&apos;re a verified woman.
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="1234 5678 9012"
        keyboardType="number-pad"
        maxLength={12}
        value={aadhaar}
        onChangeText={setAadhaar}
      />

      <ThemedText style={styles.disclaimer}>
        Your Aadhaar is checked against UIDAI and never stored on Kyra&apos;s servers.
      </ThemedText>

      <Button title="Continue" onPress={handleContinue} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 14,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  input: {
    width: '85%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    fontSize: 20,
    letterSpacing: 4,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6b7280',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
});
