import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';

export default function HomeScreen({ route, navigation }) {
  const { aluno } = route.params;
  const [nomeTurma, setNomeTurma] = useState('');


  const fetchTurma = async (idTurma) => {
    try {
      console.log("Fetching turma with ID:", idTurma);
      const response = await axios.get(`https://sistema-escolar-two.vercel.app/api/turmas/${idTurma}`);
      setNomeTurma(response.data.nome); 
      console.log("Nome da turma:", response.data.nome); 
    } catch (error) {
      console.error('Erro ao buscar nome da turma:', error);
    }
  };


  useEffect(() => {

    if (aluno && Array.isArray(aluno.turma) && aluno.turma.length > 0) {
      fetchTurma(aluno.turma[0]); 
    } else {
      console.log("ID da turma não encontrado.");
    }
  }, [aluno]);

  return (
    <View style={styles.container}>
      <View style={styles.studentCard}>
        <MaterialIcons name="person" size={40} color="#004B8D" />
        <Text style={styles.studentText}>ALUNO: {aluno.nome}</Text>
        <Text style={styles.studentText}>{aluno.matricula} - Ano: 2024</Text>
        <Text style={styles.studentText}>{nomeTurma ? `${nomeTurma} - ${aluno.turno}` : 'Carregando turma...'}</Text>
      </View>


      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="school" size={40} color="#004B8D" />
          <Text style={styles.buttonText}>Conceitos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate ('Avisos')}
        >
          <MaterialIcons name="warning" size={40} color="#004B8D" />
          <Text style={styles.buttonText}>Avisos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/Geekie_One.png')} style={styles.logoGeekie} />
          <Text style={styles.buttonText}>GeekieOne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="calendar-month" size={40} color="#004B8D" />
          <Text style={styles.buttonText}>Horários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <MaterialIcons name="door-back" size={40} color="#004B8D" />
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
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
    backgroundColor: '#014E90',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  studentCard: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 70,
    borderRadius: 50,
    alignItems: 'center',
    width: '70%',
  },
  studentText: {
    fontSize: 16,
    color: '#1A73BA',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 10,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#1A73BA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  logoGeekie: {
    width: 70,
    height: 40,
    resizeMode: 'contain',
  }
});
