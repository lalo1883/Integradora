import React from 'react';
import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';

const EasterEggsScreen = () => {
  const easterEggs = [
    {
      id: '1',
      title: 'El Mensaje Secreto',
      description: 'Encuentra el mensaje oculto en el nivel 3. Busca detrás de la cascada.',
      icon: '💬',
      difficulty: 'Fácil',
    },
    {
      id: '2',
      title: 'NPC Especial',
      description: 'Habla con el NPC que aparece solo los viernes a las 3:00 AM.',
      icon: '👻',
      difficulty: 'Difícil',
    },
    {
      id: '3',
      title: 'Combinación de Teclas',
      description: 'Presiona UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT en el menú principal.',
      icon: '⌨️',
      difficulty: 'Medio',
    },
    {
      id: '4',
      title: 'Referencia a Clásicos',
      description: 'Encuentra la referencia oculta a un juego clásico en el nivel 7.',
      icon: '🎮',
      difficulty: 'Fácil',
    },
    {
      id: '5',
      title: 'Personaje Secreto',
      description: 'Desbloquea al personaje secreto completando el juego sin morir.',
      icon: '🦸',
      difficulty: 'Muy Difícil',
    },
    {
      id: '6',
      title: 'Música Oculta',
      description: 'Escucha la música oculta en el nivel final. Quédate quieto por 30 segundos.',
      icon: '🎵',
      difficulty: 'Medio',
    },
    {
      id: '7',
      title: 'Arma Legendaria',
      description: 'Encuentra el arma legendaria escondida en el cofre invisible del nivel 5.',
      icon: '⚔️',
      difficulty: 'Difícil',
    },
    {
      id: '8',
      title: 'Efecto Visual Especial',
      description: 'Activa el modo arcoíris escribiendo "RAINBOW" en la consola de comandos.',
      icon: '🌈',
      difficulty: 'Medio',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil':
        return '#4ade80';
      case 'Medio':
        return '#fbbf24';
      case 'Difícil':
        return '#f97316';
      case 'Muy Difícil':
        return '#ef4444';
      default:
        return '#aaa';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Easter Eggs</Text>
        <Text style={styles.subtitle}>
          Descubre los secretos ocultos del juego
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {easterEggs.map((egg) => (
          <View key={egg.id} style={styles.eggCard}>
            <View style={styles.eggHeader}>
              <Text style={styles.eggIcon}>{egg.icon}</Text>
              <View style={styles.eggTitleContainer}>
                <Text style={styles.eggTitle}>{egg.title}</Text>
                <View style={[
                  styles.difficultyBadge,
                  {backgroundColor: getDifficultyColor(egg.difficulty)},
                ]}>
                  <Text style={styles.difficultyText}>{egg.difficulty}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.eggDescription}>{egg.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 100 : 90,
  },
  eggCard: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 4,
  },
  eggHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eggIcon: {
    fontSize: 36,
    marginRight: 12,
  },
  eggTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eggTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.5,
  },
  eggDescription: {
    fontSize: 14,
    color: '#aaa',
    lineHeight: 22,
    marginLeft: 48,
    paddingTop: 4,
  },
});

export default EasterEggsScreen;

