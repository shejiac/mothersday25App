import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
        tabBarIcon: () => {
          if (route.name === 'index') {
            return <Text style={{ fontSize: 22 }}>📷</Text>;
          } else if (route.name === 'explore') {
            return <Text style={{ fontSize: 22 }}>💌</Text>;
          }
        },
        tabBarLabel: () => {
          if (route.name === 'index') {
            return <Text style={{ fontSize: 12 }}>Photos!</Text>;
          } else if (route.name === 'explore') {
            return <Text style={{ fontSize: 12 }}>Message!</Text>;
          }
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}

