import React from 'react';
import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';

const TopGlobalesScreen = () => {
  const rankings = [
    { position: 1, player: 'ProGamer2024', time: '12:34', level: 'Completo' },
    { position: 2, player: 'SpeedRunner99', time: '13:45', level: 'Completo' },
    { position: 3, player: 'ElitePlayer', time: '14:12', level: 'Completo' },
    { position: 4, player: 'MasterGamer', time: '15:23', level: 'Completo' },
    { position: 5, player: 'ChampionX', time: '15:56', level: 'Completo' },
    { position: 6, player: 'GameMaster', time: '16:34', level: 'Completo' },
    { position: 7, player: 'TopPlayer', time: '17:12', level: 'Completo' },
    { position: 8, player: 'EliteRunner', time: '17:45', level: 'Completo' },
    { position: 9, player: 'SpeedKing', time: '18:23', level: 'Completo' },
    { position: 10, player: 'ProRunner', time: '18:56', level: 'Completo' },
  ];

  const getMedalEmoji = (position) => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Globales</Text>
        <Text style={styles.subtitle}>
          Estadísticas de tiempo - Los mejores tiempos
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Pos</Text>
          <Text style={[styles.headerText, styles.flex2]}>Jugador</Text>
          <Text style={styles.headerText}>Tiempo</Text>
        </View>

        {rankings.map((rank) => (
          <View 
            key={rank.position}
            style={[
              styles.rankingRow,
              rank.position <= 3 && styles.topThreeRow,
            ]}>
            <View style={styles.positionContainer}>
              <Text style={styles.medalEmoji}>{getMedalEmoji(rank.position)}</Text>
              <Text style={[
                styles.positionText,
                rank.position <= 3 && styles.topThreeText,
              ]}>
                #{rank.position}
              </Text>
            </View>
            <Text style={[
              styles.playerText,
              styles.flex2,
              rank.position <= 3 && styles.topThreeText,
            ]}>
              {rank.player}
            </Text>
            <Text style={[
              styles.timeText,
              rank.position <= 3 && styles.topThreeText,
            ]}>
              {rank.time}
            </Text>
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
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e94560',
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  rankingRow: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#0f3460',
    alignItems: 'center',
  },
  topThreeRow: {
    backgroundColor: '#1a2e3e',
    borderColor: '#e94560',
    borderWidth: 2,
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  medalEmoji: {
    fontSize: 20,
    marginRight: 5,
  },
  positionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#aaa',
    flex: 1,
  },
  topThreeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  playerText: {
    fontSize: 16,
    color: '#fff',
    flex: 2,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e94560',
    flex: 1,
    textAlign: 'right',
  },
});

export default TopGlobalesScreen;

