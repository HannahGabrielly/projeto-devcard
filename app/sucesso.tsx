import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconeContainer}>
        <Text style={styles.icone}>✓</Text>
      </View>

      <Text style={styles.titulo}>Cartão criado{"\n"}com sucesso!</Text>
      <Text style={styles.subtitulo}>
        Seu cartão de visita digital está pronto.{"\n"}Compartilhe com a galera!
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.botaoTexto}>Criar outro cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={styles.linkTexto}>Voltar ao início</Text>
      </TouchableOpacity>
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
  iconeContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#27AE60",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 4,
    shadowColor: "#27AE60",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  icone: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111",
    marginBottom: 12,
    lineHeight: 36,
  },
  subtitulo: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 22,
  },
  botao: {
    backgroundColor: "#6C63FF",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkTexto: {
    color: "#6C63FF",
    fontSize: 14,
    marginTop: 4,
  },
});