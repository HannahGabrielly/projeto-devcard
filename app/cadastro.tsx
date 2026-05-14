import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("azul");

  const [erroNome, setErroNome] = useState("");
  const [erroCargo, setErroCargo] = useState("");
  const [erroAnos, setErroAnos] = useState("");
  const [erroTecnologia, setErroTecnologia] = useState("");

  function validar() {
    let valido = true;

    if (nome.trim().length < 3) {
      setErroNome("Nome obrigatório, mínimo 3 caracteres.");
      valido = false;
    } else {
      setErroNome("");
    }

    if (cargo.trim() === "") {
      setErroCargo("Cargo é obrigatório.");
      valido = false;
    } else {
      setErroCargo("");
    }

    const anosNum = Number(anos);
    if (!anos || isNaN(anosNum) || anosNum <= 0) {
      setErroAnos("Informe um número maior que 0.");
      valido = false;
    } else {
      setErroAnos("");
    }

    if (tecnologia.trim() === "") {
      setErroTecnologia("Tecnologia é obrigatória.");
      valido = false;
    } else {
      setErroTecnologia("");
    }

    if (valido) {
      router.push({
        pathname: "/preview",
        params: { nome, cargo, empresa, anos, tecnologia, cor },
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.subtitulo}>Preencha seus dados de dev</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        style={styles.input}
        placeholder="João Silva"
        onChangeText={setNome}
        value={nome}
      />
      {erroNome !== "" && <Text style={styles.erro}>{erroNome}</Text>}

      <Text style={styles.label}>Cargo</Text>
      <TextInput
        style={styles.input}
        placeholder="Desenvolvedor Mobile"
        onChangeText={setCargo}
        value={cargo}
      />
      {erroCargo !== "" && <Text style={styles.erro}>{erroCargo}</Text>}

      <Text style={styles.label}>Empresa (opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Tech Solutions"
        onChangeText={setEmpresa}
        value={empresa}
      />

      <Text style={styles.label}>Anos de experiência</Text>
      <TextInput
        style={styles.input}
        placeholder="4"
        onChangeText={setAnos}
        value={anos}
        keyboardType="numeric"
      />
      {erroAnos !== "" && <Text style={styles.erro}>{erroAnos}</Text>}

      <Text style={styles.label}>Tecnologia favorita</Text>
      <TextInput
        style={styles.input}
        placeholder="React Native"
        onChangeText={setTecnologia}
        value={tecnologia}
      />
      {erroTecnologia !== "" && <Text style={styles.erro}>{erroTecnologia}</Text>}

      <Text style={styles.label}>Cor do cartão</Text>
      <View style={styles.coresContainer}>
        {["azul", "verde", "roxo"].map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[
              styles.corBotao,
              cor === opcao && styles.corBotaoSelecionado,
            ]}
            onPress={() => setCor(opcao)}
          >
            <View
              style={[
                styles.bolinha,
                {
                  backgroundColor:
                    opcao === "azul"
                      ? "#4A90E2"
                      : opcao === "verde"
                      ? "#27AE60"
                      : "#8E44AD",
                },
              ]}
            />
            <Text
              style={[
                styles.corTexto,
                cor === opcao && { color: "#6C63FF", fontWeight: "bold" },
              ]}
            >
              {opcao.charAt(0).toUpperCase() + opcao.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botao} onPress={validar}>
        <Text style={styles.botaoTexto}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f5f5f5",
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: "#888",
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  erro: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  coresContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  corBotao: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    gap: 6,
  },
  corBotaoSelecionado: {
    borderColor: "#6C63FF",
    backgroundColor: "#f0eeff",
  },
  bolinha: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  corTexto: {
    fontSize: 14,
    color: "#555",
  },
  botao: {
    backgroundColor: "#6C63FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});