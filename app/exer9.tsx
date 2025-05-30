import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const posts = [
  {
    id: "1",
    usuario: "Ana Beatriz",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    descricao: "Um pôr do sol inesquecível no topo da montanha! 🌄",
  },
  {
    id: "2",
    usuario: "João Marcos",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    imagem: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    descricao: "Programando...",
  },
  {
    id: "3",
    usuario: "Larissa Silva",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    imagem: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    descricao: "Minha humilde casinha!",
  },
  {
    id: "4",
    usuario: "Pedro Henrique",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    imagem: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    descricao: "Eu amo o universo.",
  },
];

export default function FeedNoticias() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Feed de Notícias</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.nome}>{item.usuario}</Text>
            </View>
            <Image source={{ uri: item.imagem }} style={styles.postImagem} />
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#EDF2F7",
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2D3748",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A202C",
  },
  postImagem: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: "#4A5568",
  },
});
