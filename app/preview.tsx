import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Preview() {
  const router = useRouter();
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<{
      nome: string;
      cargo: string;
      empresa: string;
      anos: string;
      tecnologia: string;
      cor: string;
    }>();

  // Cor de fundo do cartão
  function getCorFundo(cor: string) {
    if (cor === "verde") return "#27AE60";
    if (cor === "roxo") return "#8E44AD";
    return "#4A90E2"; // azul (padrão)
  }

  // Badge de nível baseado nos anos
  function getNivel(anos: string) {
    const n = Number(anos);
    if (n >= 6) return { texto: "Sênior", cor: "#F5A623" };
    if (n >= 3) return { texto: "Pleno", cor: "#F5A623" };
    return { texto: "Júnior", cor: "#aaa" };
  }

  const primeiraLetra = String(nome).charAt(0).toUpperCase();
  const nivel = getNivel(String(anos));
  const corFundo = getCorFundo(String(cor));

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Seu Cartão</Text>

      <View style={[styles.cartao, { backgroundColor: corFundo }]}>
        {/* Avatar circular */}
        <View style={styles.avatar}>
          <Text style={styles.avatarLetra}>{primeiraLetra}</Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        {empresa ? <Text style={styles.empresa}>{empresa}</Text> : null}

        <View style={styles.divisor} />

        <Text style={styles.especialistaLabel}>Especialista em</Text>
        <Text style={styles.tecnologia}>{tecnologia}</Text>

        {/* Badge de nível */}
        <View style={[styles.badge, { backgroundColor: nivel.cor }]}>
          <Text style={styles.badgeTexto}>{nivel.texto}</Text>
        </View>

        <Text style={styles.anosTexto}>{anos} anos de experiência</Text>
      </View>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => router.back()}>
        <Text style={styles.botaoSecundarioTexto}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace("/sucesso")}
      >
        <Text style={styles.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 24,
    alignItems: "center",
  },
  tituloPagina: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 10,
  },
  cartao: {
    width: "100%",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 24,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  avatarLetra: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  cargo: {
    fontSize: 14,
    color: "#eee",
    marginBottom: 2,
  },
  empresa: {
    fontSize: 13,
    color: "#ddd",
  },
  divisor: {
    width: "80%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginVertical: 16,
  },
  especialistaLabel: {
    fontSize: 13,
    color: "#eee",
    marginBottom: 4,
  },
  tecnologia: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 14,
  },
  badge: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  badgeTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  anosTexto: {
    fontSize: 12,
    color: "#eee",
    marginTop: 4,
  },
  botaoSecundario: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#6C63FF",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  botaoSecundarioTexto: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 15,
  },
  botao: {
    width: "100%",
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});