import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import { Listing } from "@/components/Listing";
import { SafeAreaView } from "react-native-safe-area-context";

import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChange={onDataChanged} />,
        }}
      />

      <Listing listings={items} category={category} />
    </View>
  );
};

export default Page;
