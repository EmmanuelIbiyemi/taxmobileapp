import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const arrayBlog = [
  {
    id: 1,
    blogtitle: "Blog 1: The Power of Simplicity",
    blog: "Learn why simplicity leads to better design, faster results, and happier users.",
    imageblog: "https://picsum.photos/id/237/400/300",
  },
  {
    id: 2,
    blogtitle: "Blog 2: How to Stay Consistent",
    blog: "Consistency in your work builds momentum — here’s how to stay on track daily.",
    imageblog: "https://picsum.photos/seed/picsum/400/300",
  },
  {
    id: 3,
    blogtitle: "Blog 3: Design that Speaks",
    blog: "Good UI is not about fancy visuals, it’s about clarity, flow, and emotion.",
    imageblog: "https://picsum.photos/400/300?grayscale",
  },
  {
    id: 4,
    blogtitle: "Blog 4: Build, Break, Rebuild",
    blog: "Iteration is key — learn to rebuild without fear and improve your craft.",
    imageblog: "https://picsum.photos/400/300/?blur",
  },
];

const DisplayArticle = () => {
  return (
    <FlatList
      data={arrayBlog}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => console.log("Opening:", item.blogtitle)}
        >
          <View
            className="flex-row items-center bg-white rounded-2xl mx-5 my-3"
            style={{
              elevation: 5,
              shadowColor: "#000",
              shadowOpacity: 0.40,
              shadowRadius: 20,
              shadowOffset: { width: 0, height: 4 },
            }}
          >
            <Image
              source={{ uri: item.imageblog }}
              style={{
                width: 120,
                height: 120,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }}
            />
            <View className="flex-1 p-3">
              <Text className="font-bold text-gray-700 text-lg mb-1">
                {item.blogtitle}
              </Text>
              <Text className="text-gray-600 text-sm" numberOfLines={3}>
                {item.blog}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default function Article() {
  return (
    <View className="flex-1 bg-white">
      <DisplayArticle />
    </View>
  );
}
