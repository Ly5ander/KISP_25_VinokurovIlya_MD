import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
// Импортируем набор иконок FontAwesome
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PlaceholderImage = { uri: 'https://expo.dev' };

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <View style={styles.footerContainer}>
        {/* Кнопка с иконкой */}
        <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
          <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => alert('Вы нажали кнопку выбора фото.')}>
            <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
            <Text style={[styles.buttonLabel, { color: '#25292e' }]}>Choose a photo</Text>
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => alert('Вы нажали использовать это фото.')}>
            <Text style={styles.buttonLabel}>Use this photo</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
