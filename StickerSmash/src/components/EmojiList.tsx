import { StyleSheet, FlatList, Text, Pressable, Platform } from 'react-native';
import { useState } from 'react';

type Props = {
  onSelect: (item: string) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  // Заменяем картинки на обычные текстовые смайлики
  const [emoji] = useState(['😀', '😎', '😉', '😍', '🥳', '🐱', '🚀', '👑']);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
          style={styles.pressableItem}
        >
          <Text style={styles.emojiText}>{item}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Даем списку занять всю высоту шторки
  },
  pressableItem: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiText: {
    fontSize: 48, // Делаем текстовые смайлики крупными и красивыми
  },
});