import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PlaceholderImage = { uri: 'https://expo.dev' };

export default function App() {
  return (
    <View style={styles.container}>
      {/* Основной контент экрана */}
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

        <View style={styles.footerContainer}>
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
      </View>

      {/* Панель навигации (Раздел: Add navigation) */}
      <View style={styles.navigationBar}>
        <Pressable style={styles.navItem}>
          <FontAwesome name="home" size={24} color="#ffd33d" />
          <Text style={[styles.navLabel, { color: '#ffd33d' }]}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <FontAwesome name="gear" size={24} color="#a1a1a1" />
          <Text style={styles.navLabel}>Settings</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 40,
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 18,
  },
  footerContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 50,
    marginVertical: 6,
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
  /* Стили для навигации */
  navigationBar: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#383e46',
    backgroundColor: '#1f2226',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    color: '#a1a1a1',
    fontSize: 12,
    marginTop: 4,
  },
});
