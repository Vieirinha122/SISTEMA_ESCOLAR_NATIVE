import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://sistema-escolar-two.vercel.app/api/login', {
        matricula: matricula,
        senha: senha,
      });

      if (response.data.success) {
        const aluno = response.data.aluno; // Acesse os dados do aluno da resposta
        navigation.navigate('Home', { aluno });
      } else {
        Alert.alert('Erro', response.data.message || 'Matrícula ou senha incorreta');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image source={require('../assets/Senac_Mediotec.png')} style={styles.logo} />

        <Text style={styles.label}>Matrícula</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Matrícula"
            value={matricula}
            onChangeText={setMatricula}
            keyboardType="numeric"
          />
          <MaterialIcons name="person" size={20} color="#004B8D" style={styles.icon} />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <MaterialIcons name="lock" size={20} color="#004B8D" style={styles.icon} />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021F39',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120, 
    height: 90,
    marginBottom: 30, 
    objectFit: 'contain'
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 18,
    color: '#00478F',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#00478F',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
  },
  icon: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#00478F',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});