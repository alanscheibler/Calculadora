import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';

import Add from '../assets/icons/addition.svg';
import Subtract from '../assets/icons/subtraction.svg';
import Multiply from '../assets/icons/multiplication.svg';
import Divide from '../assets/icons/division.svg';

export default function Calculadora() {

  const navigation = useNavigation();
  
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [historic, setHistoric]= useState([]);

  const selectoperation = (op) => {
    setOperation(op);
  };

  const calcular = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)){
      Alert.alert('Erro', 'Por favor, insira números válidos.');
      return;
    };

    if (operation === null) {
      Alert.alert('Erro', 'Por favor, selecione uma operação.')
      return;
    };

    let res;
    switch(operation){
      case 'add':
        res=num1+num2;
        break;
      case 'subtract':
        res=num1-num2;
        break;
      case 'multiply':
        res=num1*num2;
        break;
      case 'divide':
        if (num2 === 0) {
          Alert.alert('Erro', 'Não é possível vividir por 0');
          return;
        }
        res=num1/num2;
        break;
      default:
        return;
      }
      setResult(res);
      setHistoric([...historic, {
        value1, value2, operation,  calculo: `${value1} ${operation === 'add' ? '+' : operation === 'subtract' ? '-' : operation === 'multiply' ? '*' : '/'} ${value2}`, result: res,
      }])
  }; 

  const goToHistoric = () => {
    navigation.navigate('Historico', {historic});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Informe o seu primeiro valor</Text>
        <CInput 
          keyboardType = 'numeric'
          value={value1}
          onChangeText={setValue1}
          />
        <Text style={styles.text}>Informe o seu segundo valor</Text>
        <CInput 
          keyboardType = 'numeric'
          value={value2}
          onChangeText={setValue2}
        />

        <Text style={styles.text}>Informe a operação:</Text>


        <View style={styles.rowContainer}>
          <CButton
           IconComponent={Add}
           onPress={()=> selectoperation('add')}
           />
          <CButton
           IconComponent={Subtract}
           onPress={()=> selectoperation('subtract')}
           />
          <CButton
           IconComponent={Multiply}
           onPress={()=> selectoperation('multiply')}
           />
          <CButton
           IconComponent={Divide}
           onPress={()=> selectoperation('divide')}
           />
        </View>

        <View style={styles.calculateButtonContainer}>
          <CButton
            text='Calcular'
            onPress={calcular}
            style={styles.calculateButton}
            />
        </View>
        
        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Resultado: {result}</Text>
          </View>
        )}

        <View style={styles.historyButtonContainer}>
          <CButton
            text='Histórico'
            onPress={goToHistoric}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
    backgroundColor: '#181818',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 64,
  },

  text: {
    paddingHorizontal:64,  
    marginVertical:10,
    fontSize: 16,
    color: '#FFF',
  },

  calculateButtonContainer:{
    width: '100%',
    alignItems:'center',
    marginVertical: 20,
  },

  calculateButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  resultContainer:{
    marginVertical: 24,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },

  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF'
  },

  historyButtonContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24, 
    width: 'auto', 
    alignItems: 'flex-end',
  },


})