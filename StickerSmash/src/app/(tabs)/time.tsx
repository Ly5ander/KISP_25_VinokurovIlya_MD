import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TimeScreen() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{`${hours}:${minutes}:${seconds}`}</Text>
      <Text style={styles.dateText}>{`${day}_${month}_${year}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateText: {
    color: '#ffd33d',
    fontSize: 24,
  },
});
