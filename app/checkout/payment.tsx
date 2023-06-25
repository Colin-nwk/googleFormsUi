import { Alert, ScrollView, StyleSheet, View } from "react-native";

import React from "react";
import { useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Switch,
  Text,
  Checkbox,
} from "react-native-paper";

import ControlledInput from "../../src/components/ControlledInput";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentInfoSchema,
  PaymentInfo,
} from "../../src/schema/checkout.schema";
import { useCheckoutContext } from "../../src/context/CheckoutContext";
zodResolver;

const PaymentDetails = () => {
  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });
  const { onSubmitAll } = useCheckoutContext();
  const theme = useTheme();
  const router = useRouter();
  const handleSave = async (data: PaymentInfo) => {
    const success = await onSubmitAll(data);

    if (success) {
      router.push("/");
    } else {
      Alert.alert("Failed to submit the form");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Payment Details"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            name="card_number"
            control={control}
            label={"Card number"}
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
          />
          <ControlledInput
            name="card_name"
            control={control}
            label={"Card Name"}
            placeholder="Name Name"
          />
          <View style={{ flexDirection: "row", gap: 20 }}>
            <ControlledInput
              name="expirationDate"
              control={control}
              label={"Expiration Date"}
              placeholder=" mm/yy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <ControlledInput
              name="security_code"
              control={control}
              label={"Security Code"}
              placeholder="ex 000"
              keyboardType="numeric"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <ControlledInput
            name="pin"
            control={control}
            label={"Pin"}
            placeholder="0000"
            keyboardType="numeric"
            secureTextEntry
          />

          <Controller
            name="saveInfo"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                onPress={() => onChange(!value)}
                label="Save payment Information"
                status={value ? "checked" : "unchecked"}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Button
        onPress={handleSubmit(handleSave)}
        mode="contained"
        uppercase
        contentStyle={{ paddingVertical: 10 }}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

export default PaymentDetails;
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
