import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

// Componente de icono personalizado
const TabIcon = ({focused, icon, label}) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.icon, focused && styles.iconActive]}>
      {icon}
    </Text>
    {focused && <View style={styles.activeIndicator} />}
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#e94560',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIcon: ({focused, color, size}) => {
          let icon = '';
          if (route.name === 'Game') {
            icon = '🎮';
          } else if (route.name === 'Home') {
            icon = '🏠';
          } else if (route.name === 'Account') {
            icon = '👤';
          }
          return <TabIcon focused={focused} icon={icon} label={route.name} />;
        },
      })}>
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarLabel: 'Game',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#16213e',
    borderTopWidth: 0,
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    paddingTop: 12,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  tabBarItem: {
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: 24,
    opacity: 0.7,
    transform: [{scale: 0.9}],
  },
  iconActive: {
    opacity: 1,
    transform: [{scale: 1.1}],
  },
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e94560',
  },
});

export default BottomTabNavigator;

