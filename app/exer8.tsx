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

      {/* Foto de Perfil sobreposta e centralizada */}
      <View style={styles.perfilContainer}>
        <Image
          source={require('../assets/images/heitor.jpg')}
          style={styles.perfil}
        />
      </View>

      {/* Nome com menos margem embaixo */}
      <View style={[styles.secao, styles.nomeContainer]}>
        <Text style={styles.nome}>Heitor Mota Avilla</Text>
      </View>

      {/* Bio mais próxima do nome */}
      <View style={[styles.secao, styles.bioContainer]}>
        <Text style={styles.bio}>I love cars.</Text>
      </View>

      <View style={styles.secaoCompacta}>
        <Text style={styles.secaoTitulo}>Meus Posts</Text>
        <Text style={styles.secaoConteudo}>7 Posts</Text>
      </View>

      <View style={styles.secaoCompacta}>
        <Text style={styles.secaoTitulo}>Seguidores</Text>
        <Text style={styles.secaoConteudo}>367 Seguidores</Text>
      </View>

      <View style={styles.secaoCompacta}>
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
    marginTop: -60, // sobe a foto para sobrepor a capa
    alignItems: "center", // centraliza horizontalmente
    zIndex: 1, // fica acima da capa
  },
  perfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  nomeContainer: {
    marginBottom: 5, // margem menor depois do nome
  },
  bioContainer: {
    marginBottom: 10,
  },
  bio: {
    marginHorizontal: 20,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  secao: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  secaoCompacta: {
    marginHorizontal: 20,
    marginBottom: 10,
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
