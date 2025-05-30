import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Home",
      }} />
      <Stack.Screen name="exer1" options={{
        title: "Exercício 01",
      }} />
      <Stack.Screen name="exer2" options={{
        title: "Exercício 02",
      }} />
      <Stack.Screen name="exer3" options={{
        title: "Exercício 03",
      }} />
      <Stack.Screen name="exer4" options={{
        title: "Exercício 04",
      }} />
    <Stack.Screen name="exer5" options={{
        title: "Exercício 05",
      }} />
    <Stack.Screen name="exer6" options={{
        title: "Exercício 06",
      }} />

     <Stack.Screen name="exer7" options={{
        title: "Exercício 07",
      }} />
      
      <Stack.Screen name="exer8" options={{
        title: "Exercício 08",
      }} />

     <Stack.Screen name="exer9" options={{
        title: "Exercício 09",
      }} />

    <Stack.Screen name="exer10" options={{
        title: "Exercício 10",
      }} />

    </Stack>
    


  );
}