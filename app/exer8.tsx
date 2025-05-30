
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Exer8() {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem de Capa */}
      <Image
        source={{ uri: "https://driftforu.com/cdn/shop/files/popo_-202.jpg?v=1735529182&width=1500" }}
        style={styles.capa}
      />

      {/* Foto de Perfil sobreposta */}
      <View style={styles.perfilContainer}>
        <Image
          source={require('../assets/images/heitor.jpg')}
          style={styles.perfil}
        />
      </View>

      <View style={styles.secao}>
        <Text style={styles.nome}>Heitor Mota Avilla</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.bio}>I love cars.</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Meus Posts</Text>
        <Text style={styles.secaoConteudo}>7 Posts</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguidores</Text>
        <Text style={styles.secaoConteudo}>367 Seguidores</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguindo</Text>
        <Text style={styles.secaoConteudo}>1.312 Seguindo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  capa: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  perfilContainer: {
    position: "absolute",
    top: 150,
    left: 20,
    alignItems: "center",
    zIndex: 1, // Garantir que a imagem de perfil tenha um índice maior para aparecer sobre a capa
  },
  perfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
  nomeContainer: {
    position: "absolute",
    top: 280, // Ajuste para garantir que o nome apareça abaixo da foto de perfil
    left: 20,
    alignItems: "center",
    zIndex: 1, // Garantir que o nome apareça sobre o fundo
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },
  bio: {
    marginHorizontal: 3,
    fontSize: 16,
    color: "#333",
    textAlign: "left",
  },
  secao: {
    marginHorizontal: 20,
    marginBottom: 20
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  secaoConteudo: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
});
