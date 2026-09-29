import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#8B5A38',
        tabBarInactiveTintColor: '#9C9186',
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
  // 6タブ並ぶので、10pxだと「コーチ」が「校地」に見えるほど読めなかった。
  // 12px・太字にし、その分タブの高さも足す。
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1.5,
    borderTopColor: '#DCD3C5',
    height: 68,
    paddingBottom: 8,
    paddingTop: 6,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
});
