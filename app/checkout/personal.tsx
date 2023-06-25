import { ScrollView, StyleSheet, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, Card, useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";

import ControlledInput from "./../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckoutContext";

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  // console.warn(errors);
  const { setPersonal } = useCheckoutContext();

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);
    router.push("/checkout/delivery");
  };
  return (
    <ScrollView
      contentContainerStyle={{ gap: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />
          <ControlledInput
            control={control}
            name="email"
            placeholder="Email"
            label="Email"
          />
          <ControlledInput
            control={control}
            name="password"
            placeholder="Password"
            label="Password"
            secureTextEntry
          />
          <ControlledInput
            control={control}
            name="password_confirmation"
            placeholder="Confirm Password"
            label="Confirm Password"
            secureTextEntry
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

export default PersonalDetails;
