import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  function acessarPortal() {
    if (Platform.OS === "web") {
      alert("Bem-vindo ao Portal do Aluno SESI!");
    } else {
      Alert.alert(
        "Portal SESI",
        "Bem-vindo ao Portal do Aluno SESI!"
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logosesi.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>
        Bem-vindo ao Portal SESI
      </Text>

      <Text style={styles.texto}>
        Acompanhe suas atividades, notas, horários e comunicados escolares.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={acessarPortal}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          Acessar Portal
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005C7D",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 220,
    height: 120,
    marginBottom: 40,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 26,
    maxWidth: 600,
  },

  botao: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  textoBotao: {
    color: "#005C7D",
    fontSize: 18,
    fontWeight: "bold",
  },
});