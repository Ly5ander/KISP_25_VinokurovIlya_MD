import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Импортируем корневой контейнер
import * as ImagePicker from 'expo-image-picker';

// Импортируем компоненты
import Button from '../../components/Button';
import EmojiPicker from '../../components/EmojiPicker';
import EmojiList from '../../components/EmojiList';
import EmojiSticker from '../../components/EmojiSticker'; // Подключаем наш новый двигающийся стикер

const PlaceholderImage = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAD2wOWNAAAABlBMVEUAAAD///+l2Z/dAAAAMklEQVR4nGNgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgAMgAByN9E8YAAAAASUVORK5CYII=' };

export default function IndexScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | null>(null);

  const pickImageAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Извините, нам нужны разрешения на доступ к фото!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
  };

  return (
    // Обязательно оборачиваем всё в GestureHandlerRootView, иначе жесты не будут считываться
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={styles.image} />
        
        {/* Передаем выбранный смайлик в интерактивный компонент движения */}
        {pickedEmoji && <EmojiSticker stickerSource={pickedEmoji} />}
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <Button label="Reset" onPress={() => { setShowAppOptions(false); setPickedEmoji(null); }} />
          <Button theme="primary" label="Add Sticker" onPress={() => setIsModalVisible(true)} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={() => setIsModalVisible(false)} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    position: 'relative',
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
  optionsContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});