import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const apps = [
  { nome: "Mensagens", icone: <Ionicons name="chatbubble-ellipses-outline" size={30} color="#5A67D8" /> },
  { nome: "Câmera", icone: <Ionicons name="camera-outline" size={30} color="#38B2AC" /> },
  { nome: "Galeria", icone: <Ionicons name="images-outline" size={30} color="#F6AD55" /> },
  { nome: "Música", icone: <Ionicons name="musical-notes-outline" size={30} color="#ED64A6" /> },
  { nome: "Navegador", icone: <FontAwesome name="globe" size={28} color="#48BB78" /> },
  { nome: "Configurações", icone: <MaterialCommunityIcons name="cog-outline" size={30} color="#718096" /> },
];

export default function MeusApps() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Aplicativos</Text>
      <FlatList
        data={apps}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.icone}>{item.icone}</View>
            <Text style={styles.nome}>{item.nome}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2D3748",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    paddingBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    transitionDuration: "150ms",
  },
  cardPressed: {
    backgroundColor: "#E2E8F0", // cor mais escura no toque
  },
  icone: {
    marginBottom: 10,
  },
  nome: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4A5568",
  },
});
