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

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  // console.warn(errors);

  const nextPage = (data: PersonalInfo) => {
    console.warn(data);
    router.push("/checkout/delivery");
    console.warn("next");
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
