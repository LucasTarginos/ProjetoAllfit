import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';

export default function TmbCalculator() {
=======
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function Imc() {
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  const toggleSwitch = () => setGenero((previousState) => !previousState);

  const handleCalculator = () => {
    const height = parseFloat(altura);
    const weight = parseFloat(peso);
    const age = parseFloat(idade);

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos com valores numéricos.");
      return;
    }

    const tmb = genero
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

<<<<<<< HEAD
    Alert.alert("Sua TMB", `Sua taxa metabólica basal é de ${tmb.toFixed(2)} calorias por dia.`);
=======
    Alert.alert("Sua TMB", `Sua taxa metabólica basal é de ${tmb}`);
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.titulo}>Taxa Metabólica Basal</Text>
      <Text style={styles.desc}>É o total de calorias gastas para manter as funções vitais, como os batimentos cardíacos, a pressão arterial e a temperatura corporal.</Text>
=======
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
      <View style={styles.inputGroupRow}>
        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: '#FFC0CB', true: '#81b0ff' }}
          thumbColor={genero ? '#81b0ff' : '#FFC0CB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
<<<<<<< HEAD
=======

>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
        <Text>Masculino</Text>
      </View>
      <Text>Altura (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
<<<<<<< HEAD
=======

>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
      <Text>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        value={peso}
        keyboardType="number-pad"
        onChangeText={(text) => setPeso(text)}
      />
<<<<<<< HEAD
=======

>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
      <Text>Idade</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
<<<<<<< HEAD
      <TouchableOpacity onPress={handleCalculator} style={styles.button}>
        <Text style={styles.buttonText}>Calcular TMB</Text>
=======

      <TouchableOpacity onPress={handleCalculator} style={styles.button}>
        <Text style={styles.buttonText}>Calculadora</Text>
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
<<<<<<< HEAD
    paddingTop: 20,
=======
    justifyContent: 'center',
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    color: 'grey',
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 20,
=======
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  },
  input: {
    height: 54,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
<<<<<<< HEAD
    borderWidth: 0,
    borderBottomWidth: 1,
=======
    borderWidth: 1,
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '80%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
