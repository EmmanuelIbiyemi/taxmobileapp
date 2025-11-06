import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';

export default function BlogDetail() {
  const { title, image, content } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-white">
      <Image source={{ uri: image }} className="w-full h-64" />
      <Text className="text-2xl font-bold text-gray-900 m-4">{title}</Text>
      <Text className="text-base text-gray-700 mx-4 mb-8 leading-relaxed">{content}</Text>
    </ScrollView>
  );
}
