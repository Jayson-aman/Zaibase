import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import FigureView from '../components/FigureView';
import { lessonMediaModule } from '../data/lesson-media-lazy';

// 図だけを単独で描く撮影用ページ。ビルド時に EXPO_PUBLIC_DEV_FIGURE=1 を付けたときだけ中身を出す
// （通常ビルドでは何も出さない。ロック中の単元の図が見えてしまうため）。
export default function DevFigure() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const media = lessonMediaModule.use();
  if (process.env.EXPO_PUBLIC_DEV_FIGURE !== '1') return <View />;
  const fig = id && media ? media.getLessonFigure(String(id)) : null;
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {fig ? <FigureView figure={fig} /> : <Text>no figure: {String(id)}</Text>}
    </ScrollView>
  );
}
