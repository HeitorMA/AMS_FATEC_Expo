import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Exer2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/images/heitor.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Heitor Mota Avilla</Text>
        <Text style={styles.description}>Desenvolvedor Mobile - React-Native
          Iniciante</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    width: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginTop: 5,
  },
});