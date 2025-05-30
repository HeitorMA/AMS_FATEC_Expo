import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function UniversoScroll() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Explorando o Universo</Text>

      {dados.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <Text style={styles.texto}>{item.texto}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const dados = [
  {
    texto: "O universo é infinito e cheio de mistérios. Estrelas nascem e morrem todos os dias.",
    imagem: "https://placehold.co/300x180?text=Galáxia",
  },
  {
    texto: "Buracos negros distorcem o tempo e o espaço com sua gravidade imensa.",
    imagem: "https://placehold.co/300x180?text=Buraco+Negro",
  },
  {
    texto: "As galáxias se espalham pelo cosmos em padrões fascinantes e gigantescos.",
    imagem: "https://placehold.co/300x180?text=Galáxia+Espiral",
  },
  {
    texto: "Missões espaciais desbravam os limites conhecidos do espaço sideral.",
    imagem: "https://placehold.co/300x180?text=Exploração",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c2a",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#90caf9",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#1a1b3d",
    borderRadius: 12,
    marginBottom: 20,
    padding: 16,
    borderColor: "#4fc3f7",
    borderWidth: 1,
    shadowColor: "#00e5ff",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imagem: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  texto: {
    fontSize: 16,
    color: "#e0f7fa",
    lineHeight: 22,
  },
});
