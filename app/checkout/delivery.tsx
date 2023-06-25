import { ScrollView, StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
} from "react-native-paper";

const DeliveryDetails = () => {
  const [shipping, setShipping] = useState<string>("free");
  const theme = useTheme();
  const router = useRouter();
  const nextPage = () => {
    router.push("/checkout/payment");
    console.warn("next");
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Delivery Address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={"City"}
            placeholder="ex FCT"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={"Postal Code"}
            placeholder="ex 9000011"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={"Address"}
            placeholder="ex No 15, Mafemi Crescent"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Shipping Options"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            value={shipping}
            onValueChange={(value) => setShipping(value)}
          >
            <RadioButton.Item label="Free" value="free" />
            <RadioButton.Item label="Fast" value="fast" />
            <RadioButton.Item label="Same day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <Button
        onPress={nextPage}
        mode="contained"
        uppercase
        contentStyle={{ paddingVertical: 10 }}
      >
        Next
      </Button>
    </ScrollView>
  );
};

export default DeliveryDetails;
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
