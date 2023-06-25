import { ScrollView, StyleSheet, View } from "react-native";

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
zodResolver;

const PaymentDetails = () => {
  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const theme = useTheme();
  const router = useRouter();
  const handleSave = () => {
    //TODO: why wont it redirect to the home page
    router.push("/");
    console.warn("submit");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        // maxWidth: 800,
        // width: "100%",
        // alignItems: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Payment Details"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            name="number"
            control={control}
            label={"Card number"}
            placeholder="0000 0000 0000 0000"
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
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <ControlledInput
            name="pin"
            control={control}
            label={"Pin"}
            placeholder="0000"
          />

          {/* <View>
            <Switch />
            <Text>Save payment information</Text>
          </View> */}
          <Controller
            name="saveInfo"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                onPress={() => onChange(!value)}
                label="Save payment Information"
                status={value ? "checked" : "unchecked"}
                // position="leading"
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
