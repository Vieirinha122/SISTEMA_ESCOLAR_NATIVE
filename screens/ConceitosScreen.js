import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert, } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ConceitosScreen = () => {
  const [conceitos, setConceitos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nomeTurma, setNomeTurma] = useState('');
  
  const idTurma = '6706ef71cad930ff6a322541'; 
  
  const API_CONCEITOS_URL = 'https://sistema-escolar-two.vercel.app/api/conceitos';
  const API_TURMAS_URL = 'https://sistema-escolar-two.vercel.app/api/turmas';

  const fetchTurma = async (idTurma) => {
    try {
      const response = await axios.get(`${API_TURMAS_URL}/${idTurma}`);
      setNomeTurma(response.data.nome);  
    } catch (error) {
      console.error('Erro ao buscar nome da turma:', error);
    }
  };

  useEffect(() => {
    if (idTurma) {
      fetchTurma(idTurma); 
    }
  }, [idTurma]);


  const fetchConceitos = async () => {
    try {
      const response = await axios.get(API_CONCEITOS_URL);
      setConceitos(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados');
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConceitos();  
  }, []);

  const renderConceitoItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.disciplina}>{item.disciplina?.nome || 'Disciplina Desconhecida'}</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>AV1</Text>
        <Text style={styles.tableCell}>AV2</Text>
        <Text style={styles.tableCell}>MU</Text>
        <Text style={styles.tableCell}>NOA</Text>
        <Text style={styles.tableCell}>M.F</Text>
        <Text style={styles.tableCell}>Resultado</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{item.AV1}</Text>
        <Text style={styles.tableCell}>{item.AV2}</Text>
        <Text style={styles.tableCell}>{item.MU}</Text>
        <Text style={styles.tableCell}>{item.NOA}</Text>
        <Text style={styles.tableCell}>{item.MF}</Text>
        <View style={styles.resultadoContainer}>
          {item.resultado === 'Aprovado' ? (
            <MaterialCommunityIcons name="check-circle" size={20} color="green" />
          ) : (
            <MaterialCommunityIcons name="close-circle" size={20} color="red" />
          )}
          <Text style={[styles.resultado, item.resultado === 'Aprovado' ? styles.aprovado : styles.reprovado]}>
            {item.resultado}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conceitos</Text>
      <Text style={styles.subheader}>Turma: {nomeTurma || 'Carregando...'}</Text>
      <View style={styles.filters}>
        <Text style={styles.filterButton}>Unidade</Text>
        <Text style={styles.filterButton}>AV1</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <FlatList
          data={conceitos}
          keyExtractor={(item) => item._id}
          renderItem={renderConceitoItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false} 
          scrollEventThrottle={30} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021F39',
    padding: 15,
  },
  header: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ffffff',
    color: '#021F39',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  disciplina: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#021F39',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#021F39',
    fontWeight: '500',
  },
  resultadoContainer: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  resultado: {
    fontSize: 20,
    marginLeft: 5,
   }, 
  aprovado: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 12,
  },
  reprovado: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ConceitosScreen;