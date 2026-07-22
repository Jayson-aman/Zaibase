import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

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
          tabBarIcon: ({ color }) => <TabBarIcon name="schools" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'クイズ',
          tabBarIcon: ({ color }) => <TabBarIcon name="quiz" color={color} />,
        }}
      />
      <Tabs.Screen
        name="textbook"
        options={{
          title: 'テキスト',
          tabBarIcon: ({ color }) => <TabBarIcon name="textbook" color={color} />,
        }}
      />
      <Tabs.Screen
        name="geography"
        options={{
          title: '地図',
          tabBarIcon: ({ color }) => <TabBarIcon name="geography" color={color} />,
        }}
      />
      <Tabs.Screen
        name="timeline"
        options={{
          title: '年表',
          tabBarIcon: ({ color }) => <TabBarIcon name="timeline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="formulas"
        options={{
          title: '公式',
          tabBarIcon: ({ color }) => <TabBarIcon name="formulas" color={color} />,
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'コーチ',
          tabBarIcon: ({ color }) => <TabBarIcon name="coach" color={color} />,
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
});
