import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import CheckoutContextProvider from "../../src/context/CheckoutContext";

export default function CheckoutStack() {
  return (
    <>
      <CheckoutContextProvider>
        <StatusBar style="light" />
        <Stack
          initialRouteName="personal"
          screenOptions={{
            contentStyle: { padding: 15, backgroundColor: "#f0ebf8", flex: 1 },
            headerStyle: { backgroundColor: "#673AB8" },
            headerTitleStyle: { color: "#f0ebf8" },
            headerTintColor: "#f0ebf8",
            // headerBlurEffect: "systemUltraThinMaterial",
          }}
        >
          <Stack.Screen
            name="personal"
            options={{ title: "Personal Information" }}
          />
          <Stack.Screen
            name="delivery"
            options={{ title: "Delivery Information" }}
          />
          <Stack.Screen
            name="payment"
            options={{ title: "Payment Information" }}
          />
        </Stack>
      </CheckoutContextProvider>
    </>
  );
}
