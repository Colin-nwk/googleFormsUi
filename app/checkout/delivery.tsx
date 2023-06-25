import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const DeliveryDetails = () => {
  return (
    <View>
      <Text>DeliveryDetails</Text>

      <Link href={"/checkout/payment"} style={styles.subtitle}>
        Next
      </Link>
    </View>
  );
};

export default DeliveryDetails;
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
