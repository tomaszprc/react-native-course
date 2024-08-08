import React, { useEffect } from "react";
import { Text } from "react-native";

interface Props {
  listings: any[];
  category: string;
}

export const Listing = ({ listings, category }: Props) => {
  useEffect(() => {
    console.log("reload category", listings.length);
  }, [category]);

  return <Text>Listing</Text>;
};
