import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Exercícios</Text>

      <Link href="/exer1" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 01</Text>
        </Pressable>
      </Link>

      <Link href="/exer2" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 02</Text>
        </Pressable>
      </Link>

      <Link href="/exer3" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 03</Text>
        </Pressable>
      </Link>

      <Link href="/exer4" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 04</Text>
        </Pressable>
      </Link>

      <Link href="/exer5" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 05</Text>
        </Pressable>
      </Link>

      <Link href="/exer6" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 06</Text>
        </Pressable>
      </Link>

      <Link href="/exer7" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 07</Text>
        </Pressable>
      </Link>

      <Link href="/exer8" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 08</Text>
        </Pressable>
      </Link>

      <Link href="/exer9" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 09</Text>
        </Pressable>
      </Link>

      <Link href="/exer10" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Exercício 10</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#236bcb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
});
