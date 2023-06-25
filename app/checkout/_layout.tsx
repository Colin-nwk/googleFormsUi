import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function CheckoutStack() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: "#f0ebf8", flex: 1 },
          headerStyle: { backgroundColor: "#673AB8" },
          headerTitleStyle: { color: "#f0ebf8" },
          headerTintColor: "#f0ebf8",
          // headerBlurEffect: "systemUltraThinMaterial",
        }}
      >
        <Stack.Screen
          name="index"
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
    </>
  );
}
