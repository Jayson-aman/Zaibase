import { Tabs } from 'expo-router';
import { Text, StyleSheet } from 'react-native';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>
      {emoji}
    </Text>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#C8A84B',
        tabBarInactiveTintColor: '#4A6480',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="schools"
        options={{
          title: '学校別',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🏫" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'クイズ',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📝" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="textbook"
        options={{
          title: 'テキスト',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📚" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="geography"
        options={{
          title: '地図',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🗾" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: '進捗',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📊" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#070F1E',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    height: 65,
    paddingBottom: 8,
    paddingTop: 4,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
  tabIcon: {
    fontSize: 22,
    opacity: 0.5,
  },
  tabIconFocused: {
    opacity: 1,
  },
});
