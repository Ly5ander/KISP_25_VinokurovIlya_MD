import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  stickerSource: string;
};

export default function EmojiSticker({ stickerSource }: Props) {
  // Общие значения Reanimated для отслеживания координат
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Контекстные значения, чтобы запоминать позицию при начале нового движения
  const contextX = useSharedValue(0);
  const contextY = useSharedValue(0);

  // Настройка жеста перемещения (Pan)
  const panGesture = Gesture.Pan()
    .onStart(() => {
      // Запоминаем текущую позицию стикера, когда пользователь только коснулся его
      contextX.value = translateX.value;
      contextY.value = translateY.value;
    })
    .onChange((event) => {
      const nextX = contextX.value + event.translationX;
      const nextY = contextY.value + event.translationY;

      // Ограничиваем движение: влево/вправо на 130px, вверх/вниз на 190px
      translateX.value = Math.max(-130, Math.min(130, nextX));
      translateY.value = Math.max(-190, Math.min(190, nextY));
    });

  // Связываем координаты с CSS-стилями стикера
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[containerStyle, styles.stickerContainer]}>
        {/* Выводим текстовый смайлик */}
        <Animated.Text style={styles.emojiText}>{stickerSource}</Animated.Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  stickerContainer: {
    position: 'absolute',
    top: 245,   // Опустили пониже для идеального центра
    left: 130,  // Влево/вправо оставляем так же
    zIndex: 10,
  },
  emojiText: {
    fontSize: 55, // Размер вашего стикера
  },
});