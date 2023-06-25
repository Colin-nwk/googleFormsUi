import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native-paper";

const DeliveryDetails = () => {
  const router = useRouter();
  const nextPage = () => {
    router.push("/checkout/payment");
    console.warn("next");
  };

  return (
    <View>
      <Text>DeliveryDetails</Text>
      <Link href={"/checkout/payment"} style={styles.subtitle}>
        Next
      </Link>
      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
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
