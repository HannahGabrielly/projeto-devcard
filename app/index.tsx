import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>💳</Text>
      <Text style={styles.titulo}>DevCard</Text>
      <Text style={styles.subtitulo}>Seu cartão de visita digital de dev mobile</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/cadastro")}>
        <Text style={styles.botaoTexto}>Criar meu cartão</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>Aplicações Móveis · Aula 7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6C63FF",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 50,
  },
  botao: {
    backgroundColor: "#6C63FF",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  rodape: {
    position: "absolute",
    bottom: 30,
    color: "#aaa",
    fontSize: 12,
  },
});