import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const PersonalDetails = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>PersonalDetails</Text>
      <Link href={"/checkout/delivery"} style={styles.subtitle}>
        Next
      </Link>
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
