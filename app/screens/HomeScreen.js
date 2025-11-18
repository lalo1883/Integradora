import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Platform, ScrollView} from 'react-native';
import {logoutUser, getCurrentUser} from '../services/authService';

const HomeScreen = ({navigation}) => {
  const user = getCurrentUser();

  const handleLogout = async () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: async () => {
            const result = await logoutUser();
            if (!result.success) {
              Alert.alert('Error', result.error);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido</Text>
        {user && (
          <Text style={styles.email}>{user.email}</Text>
        )}
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={styles.sectionCard}
          onPress={() => navigation.navigate('Gameplays')}>
          <Text style={styles.sectionIcon}>🎮</Text>
          <Text style={styles.sectionTitle}>Gamplays del Videojuego</Text>
          <Text style={styles.sectionDescription}>
            Mira los mejores gameplays y estrategias
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sectionCard}
          onPress={() => navigation.navigate('TopGlobales')}>
          <Text style={styles.sectionIcon}>🏆</Text>
          <Text style={styles.sectionTitle}>Top Globales</Text>
          <Text style={styles.sectionDescription}>
            Estadísticas de tiempo - Los mejores tiempos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sectionCard}
          onPress={() => navigation.navigate('EasterEggs')}>
          <Text style={styles.sectionIcon}>🥚</Text>
          <Text style={styles.sectionTitle}>Easter Eggs</Text>
          <Text style={styles.sectionDescription}>
            Descubre los secretos ocultos del juego
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#e94560',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 100 : 90,
  },
  sectionCard: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#aaa',
    lineHeight: 20,
  },
});

export default HomeScreen;

