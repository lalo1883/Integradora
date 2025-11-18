import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity} from 'react-native';

const GameScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Guías', 'Estrategias', 'Descubrimientos', 'Análisis', 'Ayuda'];

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
    {
      id: '6',
      title: 'Actualización 1.2: Nuevas Características',
      author: 'DevTeam',
      category: 'Análisis',
      replies: 67,
      views: 445,
      time: '4d',
    },
    {
      id: '7',
      title: 'Mejor Build para Personaje Mago',
      author: 'BuildMaster',
      category: 'Estrategias',
      replies: 29,
      views: 178,
      time: '5d',
    },
    {
      id: '8',
      title: 'Cómo Desbloquear el Final Secreto',
      author: 'SecretHunter',
      category: 'Guías',
      replies: 52,
      views: 312,
      time: '6d',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Guías': '#e94560',
      'Estrategias': '#4ade80',
      'Descubrimientos': '#fbbf24',
      'Análisis': '#3b82f6',
      'Ayuda': '#a855f7',
    };
    return colors[category] || '#e94560';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Foro del Videojuego</Text>
        <Text style={styles.subtitle}>Comparte información y estrategias</Text>
      </View>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryFilter,
              selectedCategory === category && styles.categoryFilterActive,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryFilterText,
                selectedCategory === category && styles.categoryFilterTextActive,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {forumPosts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <View style={[
                styles.categoryBadge,
                {backgroundColor: getCategoryColor(post.category)},
              ]}>
                <Text style={styles.categoryText}>{post.category}</Text>
              </View>
            </View>
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postFooter}>
              <View style={styles.postAuthorContainer}>
                <View style={styles.authorAvatar}>
                  <Text style={styles.authorAvatarText}>
                    {post.author.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.postAuthor}>{post.author}</Text>
              </View>
              <View style={styles.postStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statIcon}>💬</Text>
                  <Text style={styles.statText}>{post.replies}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statIcon}>👁️</Text>
                  <Text style={styles.statText}>{post.views}</Text>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
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
  categoriesContainer: {
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  categoriesContent: {
    paddingRight: 20,
  },
  categoryFilter: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  categoryFilterActive: {
    backgroundColor: '#e94560',
    borderColor: '#e94560',
  },
  categoryFilterText: {
    fontSize: 13,
    color: '#aaa',
    fontWeight: '500',
  },
  categoryFilterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  postHeader: {
    marginBottom: 10,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.3,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    lineHeight: 22,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  authorAvatarText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  postAuthor: {
    fontSize: 13,
    color: '#aaa',
    fontWeight: '500',
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  statText: {
    fontSize: 12,
    color: '#aaa',
    fontWeight: '500',
  },
  postTime: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
});

export default GameScreen;

