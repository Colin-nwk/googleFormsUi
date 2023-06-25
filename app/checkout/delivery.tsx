import { ScrollView, StyleSheet, Text, View } from "react-native";

import React from "react";
import { useRouter } from "expo-router";
import {
  Button,
  Card,
  useTheme,
  RadioButton,
  HelperText,
} from "react-native-paper";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DeliveryInfoSchema,
  DeliveryInfo,
} from "../../src/schema/checkout.schema";

DeliveryInfoSchema;

import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckoutContext";

const DeliveryDetails = () => {
  const theme = useTheme();
  const router = useRouter();
  const { setDelivery } = useCheckoutContext();

  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });
  const nextPage = (data: DeliveryInfo) => {
    router.push("/checkout/payment");
    setDelivery(data);
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Delivery Address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            name="city"
            control={control}
            label={"City"}
            placeholder="FCT"
          />

          <ControlledInput
            name="postalCode"
            control={control}
            label={"Postal Code"}
            placeholder="9000011"
            keyboardType="numeric"
          />
          <ControlledInput
            name="address"
            control={control}
            label={"Address"}
            placeholder="No 15, Mafemi Crescent"
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Shipping Options"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange },
              fieldState: { error, invalid },
            }) => (
              <View>
                <RadioButton.Group
                  value={value}
                  onValueChange={(value) => onChange(value)}
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button
        onPress={handleSubmit(nextPage)}
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
