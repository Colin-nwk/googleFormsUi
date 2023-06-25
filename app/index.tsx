import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Google Form UI</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Link href={"/checkout"} style={styles.buttonText}>
            Get Started
          </Link>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#673AB8",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 36,
    color: "#fff",
  },
  button: {
    backgroundColor: "#eee",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40,
    elevation: 10,
  },
  buttonText: {
    fontSize: 36,
    // color: "#fff",
  },
});
