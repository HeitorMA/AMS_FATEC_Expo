import { Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const configuracoes = [
  {
    id: "1",
    nome: "Notificações",
    icone: <Feather name="bell" size={22} color="#4F46E5" />,
  },
  {
    id: "2",
    nome: "Privacidade",
    icone: <Feather name="lock" size={22} color="#DC2626" />,
  },
  {
    id: "3",
    nome: "Segurança",
    icone: <MaterialIcons name="security" size={22} color="#0EA5E9" />,
  },
  {
    id: "4",
    nome: "Idioma",
    icone: <Ionicons name="language" size={22} color="#10B981" />,
  },
  {
    id: "5",
    nome: "Tema",
    icone: <Feather name="sun" size={22} color="#F59E0B" />,
  },
  {
    id: "6",
    nome: "Conta",
    icone: <FontAwesome5 name="user-circle" size={22} color="#6B7280" />,
  },
];

export default function TelaConfiguracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <FlatList
        data={configuracoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.icone}>{item.icone}</View>
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.divisor} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#111827",
  },
  item: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    elevation: 1,
  },
  icone: {
    marginRight: 14,
  },
  nome: {
    fontSize: 16,
    color: "#1F2937",
  },
  divisor: {
    height: 12,
  },
});
