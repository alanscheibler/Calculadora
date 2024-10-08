import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Historico({ route }) {
  const { historic } = route.params; 

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.calculoTitle}>Cálculo {index + 1}</Text>
      <Text style={styles.text}>Valor 1: {item.value1}</Text>
      <Text style={styles.text}>Valor 2: {item.value2}</Text>
      <Text style={styles.text}>
        Operação: {item.operation === 'add' ? 'adição' : item.operation === 'subtract' ? 'subtração' : item.operation === 'multiply' ? 'multiplicação' : 'divisão'}
      </Text>
      <Text style={styles.text}>Cálculo: {item.calculo}</Text>
      <Text style={styles.text}>Resultado: {item.result}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={historic}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#181818',
    width: '100%',
  },
  listContent: {
    padding: 0,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  calculoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#FFF',
  },
});
