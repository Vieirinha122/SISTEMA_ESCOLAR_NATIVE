import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const AvisosScreen = () => {
  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {
    const fetchComunicados = async () => {
      try {
        const response = await axios.get('https://sistema-escolar-two.vercel.app/api/comunicados');
        setComunicados(response.data);
      } catch (error) {
        console.error('Erro ao buscar comunicados:', error);
      }
    };

    fetchComunicados();
  }, []);

  const formatarData = (data) => {
    const date = new Date(data);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  };

  const renderComunicado = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.data}>{formatarData(item.data)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Avisos</Text>
      <FlatList
        data={comunicados}
        renderItem={renderComunicado}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1633',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  data: {
    fontSize: 14,
    color: '#999',
    textAlign: 'right',
  },
});

export default AvisosScreen;
