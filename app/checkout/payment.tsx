import { ScrollView, StyleSheet, View } from "react-native";

import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Switch,
  Text,
  Checkbox,
} from "react-native-paper";

const PaymentDetails = () => {
  const [shipping, setShipping] = useState<string>("free");
  const theme = useTheme();
  const router = useRouter();
  const handleSubmit = () => {
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
          <TextInput
            label={"Card number"}
            placeholder="ex 0000 0000 0000 0000"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={"Card Name"}
            placeholder="ex Name Name"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TextInput
              label={"Expiration Date"}
              placeholder=" mm/yy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={"Security Code"}
              placeholder="ex 000"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <TextInput
            label={"Pin"}
            placeholder="0000"
            style={{ backgroundColor: theme.colors.background }}
          />

          {/* <View>
            <Switch />
            <Text>Save payment information</Text>
          </View> */}

          <Checkbox.Item
            label="Save payment Information"
            status="checked"
            // position="leading"
          />
        </Card.Content>
      </Card>

      <Button
        onPress={handleSubmit}
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
