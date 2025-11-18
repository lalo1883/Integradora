import React from 'react';
import {View, Text, StyleSheet, Platform, ScrollView} from 'react-native';

const GameScreen = () => {
  const forumPosts = [
    {
      id: '1',
      title: 'Guía Completa: Cómo Dominar el Nivel Final',
      author: 'ProGamer2024',
      category: 'Guías',
      replies: 24,
      views: 156,
      time: '2h',
    },
    {
      id: '2',
      title: 'Descubrimiento: Nuevo Easter Egg en el Nivel 7',
      author: 'Explorer99',
      category: 'Descubrimientos',
      replies: 18,
      views: 89,
      time: '5h',
    },
    {
      id: '3',
      title: 'Mejores Estrategias para Speedrun',
      author: 'SpeedRunner',
      category: 'Estrategias',
      replies: 32,
      views: 234,
      time: '1d',
    },
    {
      id: '4',
      title: 'Análisis del Sistema de Combate',
      author: 'GameAnalyst',
      category: 'Análisis',
      replies: 15,
      views: 112,
      time: '2d',
    },
    {
      id: '5',
      title: 'Tips para Principiantes',
      author: 'Helper',
      category: 'Ayuda',
      replies: 41,
      views: 298,
      time: '3d',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Foro del Videojuego</Text>
        <Text style={styles.subtitle}>Comparte información y estrategias</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {forumPosts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postMeta}>
              <Text style={styles.postAuthor}>Por {post.author}</Text>
              <Text style={styles.postTime}>hace {post.time}</Text>
            </View>
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
    paddingTop: 60,
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
  postCard: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    fontSize: 13,
    color: '#aaa',
  },
  postTime: {
    fontSize: 13,
    color: '#aaa',
  },
});

export default GameScreen;

