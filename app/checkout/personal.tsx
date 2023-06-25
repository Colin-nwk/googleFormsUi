import { ScrollView, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

const PersonalDetails = () => {
  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
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
          <TextInput
            placeholder="Name"
            label="Name"
            autoFocus
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="example@email.com"
            label="Email"
            style={{ backgroundColor: theme.colors.background }}
          />
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

export default PersonalDetails;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
