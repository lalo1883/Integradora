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
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Gameplays')}>
          <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.sectionIcon}>🎮</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>Gamplays del Videojuego</Text>
              <Text style={styles.sectionDescription}>
                Mira los mejores gameplays y estrategias
              </Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sectionCard}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('TopGlobales')}>
          <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.sectionIcon}>🏆</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>Top Globales</Text>
              <Text style={styles.sectionDescription}>
                Estadísticas de tiempo - Los mejores tiempos
              </Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sectionCard}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EasterEggs')}>
          <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.sectionIcon}>🥚</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>Easter Eggs</Text>
              <Text style={styles.sectionDescription}>
                Descubre los secretos ocultos del juego
              </Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
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
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  sectionIcon: {
    fontSize: 32,
  },
  textContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  sectionDescription: {
    fontSize: 13,
    color: '#aaa',
    lineHeight: 18,
  },
  arrowIcon: {
    fontSize: 28,
    color: '#e94560',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomeScreen;

