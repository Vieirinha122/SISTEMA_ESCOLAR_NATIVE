import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <FontAwesome5 name="user-circle" size={40} color="#fff" />
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Bem vindo(a)!</Text>
          <Text style={styles.userDetails}>
            Aluno(a): Sabrina Vidal{'\n'}1234 - Ano: 2024{'\n'}Turma ADS - Manhã
          </Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Conceitos')}
          >
            <FontAwesome5 name="graduation-cap" size={30} color="#021F39" />
            <Text style={styles.optionText}>Conceitos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Avisos')}
          >
            <MaterialIcons name="warning" size={30} color="#ff9900" />
            <Text style={styles.optionText}>Avisos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('GeekieOne')}
          >
            <Image source={require('../assets/Geekie_One.png')} style={styles.logo}/>
            <Text style={styles.optionText}>GeekieOne</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Contatos')}
          >
            <FontAwesome5 name="phone" size={30} color="#003366" />
            <Text style={styles.optionText}>Contatos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Horário')}
          >
            <FontAwesome5 name="calendar-alt" size={30} color="#021F39" />
            <Text style={styles.optionText}>Horário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('Financeiro')}
          >
            <FontAwesome5 name="dollar-sign" size={30} color="#28a745" />
            <Text style={styles.optionText}>Financeiro</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Sair */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.replace('Login')}
      >
        <MaterialIcons name="logout" size={24} color="#fff" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
      <Image source={require('../assets/Logo_senac.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021F39',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginLeft: 150,
    marginTop: 20,
    width: '100%',
  },
  userInfo: {
    marginLeft: 15,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  menu: {
    marginTop: 20,
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  optionText: {
    color: '#003366',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    backgroundColor: '#828587',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 45,
    height: 45,
    objectFit: 'contain',
  }
});

export default HomeScreen;