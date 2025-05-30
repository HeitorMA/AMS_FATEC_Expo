import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function exer1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste com Expo</Text>
      <Text style={styles.subtitle}>Heitor Mota Avilla - Fatec Itu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "White",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#black",
  },
  subtitle: {
    fontSize: 18,
    color: "#black",
    marginTop: 2,
  },
});