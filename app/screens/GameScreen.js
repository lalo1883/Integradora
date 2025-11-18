import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game</Text>
      <Text style={styles.subtitle}>Pantalla de juego</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
  },
});

export default GameScreen;

