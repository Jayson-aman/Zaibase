import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#5A2E0F',
        tabBarInactiveTintColor: '#5F564D',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="schools"
        options={{
          title: '学校別',
          tabBarIcon: ({ color }) => <TabBarIcon name="schools" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} size={28} />,
        }}
      />
      {/* 教科書はホームの一番上から開く。下のタブからは外してある
          （ここを href: null にしても画面自体は残るので、遷移はできる）。 */}
      <Tabs.Screen
        name="textbook"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="geography"
        options={{
          title: '地図',
          tabBarIcon: ({ color }) => <TabBarIcon name="geography" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="timeline"
        options={{
          title: '年表',
          tabBarIcon: ({ color }) => <TabBarIcon name="timeline" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="formulas"
        options={{
          title: '公式',
          tabBarIcon: ({ color }) => <TabBarIcon name="formulas" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'コーチ',
          tabBarIcon: ({ color }) => <TabBarIcon name="coach" color={color} size={28} />,
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
  // 6タブ並ぶので、10pxだと「コーチ」が「校地」に見えるほど読めなかった。
  // 12px・太字にし、その分タブの高さも足す。
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1.5,
    borderTopColor: '#DCD3C5',
    height: 78,
    paddingBottom: 10,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '800',
    marginTop: 3,
  },
});
