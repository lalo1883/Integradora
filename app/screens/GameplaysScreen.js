import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform} from 'react-native';

const GameplaysScreen = () => {
  const gameplays = [
    {
      id: '1',
      title: 'Gameplay Épico - Nivel Completo',
      channel: 'GamerPro',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: '2',
      title: 'Speedrun Completo - Récord Mundial',
      channel: 'SpeedRunMaster',
      videoId: 'jNQXAC9IVRw',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    },
    {
      id: '3',
      title: 'Guía Completa - Todos los Secretos',
      channel: 'GameGuide',
      videoId: '9bZkp7q19f0',
      thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    },
    {
      id: '4',
      title: 'Gameplay Multiplayer - Partida Épica',
      channel: 'MultiplayerGaming',
      videoId: 'kJQP7kiw5Fk',
      thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
    },
    {
      id: '5',
      title: 'Primera Impresión - Review Completo',
      channel: 'GameReviewer',
      videoId: 'ZbZSe6N_BXs',
      thumbnail: 'https://img.youtube.com/vi/ZbZSe6N_BXs/maxresdefault.jpg',
    },
  ];

  const openVideo = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(url).catch(err => console.error('Error al abrir video:', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gamplays del Videojuego</Text>
        <Text style={styles.subtitle}>
          Los mejores gameplays y estrategias
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {gameplays.map((gameplay) => (
          <TouchableOpacity
            key={gameplay.id}
            style={styles.videoCard}
            activeOpacity={0.9}
            onPress={() => openVideo(gameplay.videoId)}>
            <View style={styles.videoThumbnail}>
              <View style={styles.playButtonContainer}>
                <View style={styles.playButton}>
                  <Text style={styles.playIcon}>▶</Text>
                </View>
              </View>
              <View style={styles.thumbnailOverlay} />
            </View>
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {gameplay.title}
              </Text>
              <View style={styles.channelContainer}>
                <Text style={styles.youtubeIcon}>▶</Text>
                <Text style={styles.videoChannel}>{gameplay.channel}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  videoCard: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
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
  videoThumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  playButtonContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(233, 69, 96, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  playIcon: {
    fontSize: 28,
    color: '#fff',
    marginLeft: 4,
  },
  videoInfo: {
    padding: 15,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 22,
  },
  channelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  youtubeIcon: {
    fontSize: 12,
    color: '#e94560',
    marginRight: 6,
  },
  videoChannel: {
    fontSize: 14,
    color: '#e94560',
    fontWeight: '500',
  },
});

export default GameplaysScreen;

