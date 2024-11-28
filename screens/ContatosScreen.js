import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contatos</Text>
      <View style={styles.card}>
        <View style={styles.contactItem}>
          <Text style={styles.title}>Unidade Recife</Text>
          <Text style={styles.phone}>(81) 3413-6666</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.title}>Coordenação</Text>
          <View style={styles.row}>
            <Text style={styles.phone}>(81) 9615-7981</Text>
            <TouchableOpacity>
              <Ionicons name="logo-whatsapp" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.title}>Secretaria</Text>
          <Text style={styles.phone}>(81) 0000-0000</Text>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Logo_senac.png')} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00224D", // Cor azul-escuro do fundo
    padding: 16,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 200,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  contactItem: {
    marginBottom: 16,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333",
  },
  phone: {
    fontSize: 20,
    color: "#555",
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  icon: {
    marginLeft: 8,
  },
  footer: {
    color: "white",
    fontSize: 16,
    marginTop: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 240,
  },
  logo: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
    alignItems: 'center'
  },
});
