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
        name="timeline"
        options={{
          title: '年表',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📅" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="formulas"
        options={{
          title: '公式',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📋" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'コーチ',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🎓" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          href: null,
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
    height: 60,
    paddingBottom: 6,
    paddingTop: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
  tabIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  tabIconFocused: {
    opacity: 1,
  },
});
