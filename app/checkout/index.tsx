import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native-paper";

const PersonalDetails = () => {
  const router = useRouter();
  const nextPage = () => {
    router.push("/checkout/delivery");
    console.warn("next");
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>PersonalDetails</Text>

      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
