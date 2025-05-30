import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const produtos = [
  {
    id: "1",
    nome: "Notebook Dell XPS 13",
    preco: "R$ 7.999",
    imagem: "https://i.imgur.com/nOTEbUe.png",
  },
  {
    id: "2",
    nome: "Smartphone Samsung Galaxy S23",
    preco: "R$ 4.299",
    imagem: "https://i.imgur.com/Fh7GqGU.png",
  },
  {
    id: "3",
    nome: "Fones de Ouvido Bluetooth Sony",
    preco: "R$ 699",
    imagem: "https://i.imgur.com/v0pLMyT.png",
  },
  {
    id: "4",
    nome: "Monitor LG UltraWide 29\"",
    preco: "R$ 1.499",
    imagem: "https://i.imgur.com/Bcs1NSO.png",
  },
  {
    id: "5",
    nome: "Teclado Mecânico HyperX",
    preco: "R$ 349",
    imagem: "https://i.imgur.com/6n3fSFP.png",
  },
  {
    id: "6",
    nome: "Mouse Gamer Logitech G502",
    preco: "R$ 299",
    imagem: "https://i.imgur.com/8AoOEnu.png",
  },
  {
    id: "7",
    nome: "Cadeira Gamer ThunderX3",
    preco: "R$ 1.299",
    imagem: "https://i.imgur.com/BoYvBuE.png",
  },
  {
    id: "8",
    nome: "Smartwatch Apple Watch Series 9",
    preco: "R$ 3.999",
    imagem: "https://i.imgur.com/dPDM7oV.png",
  },
  {
    id: "9",
    nome: "Tablet iPad Air",
    preco: "R$ 5.499",
    imagem: "https://i.imgur.com/jAhbfPY.png",
  },
  {
    id: "10",
    nome: "SSD NVMe Kingston 1TB",
    preco: "R$ 399",
    imagem: "https://i.imgur.com/sax7uOT.png",
  },
];

export default function Exer4() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprar</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => alert(item.nome)}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    alignSelf: "center",


  },
  item: {
    backgroundColor: "#236bcb",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  imagem: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  nome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  preco: {
    color: "#e0f7ff",
    fontSize: 14,
    marginTop: 5,
  },
});
