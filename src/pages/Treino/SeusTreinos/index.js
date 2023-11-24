import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';


export default function Imc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState(false);
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

    Alert.alert("Sua TMB", `Sua taxa metabólica basal é de ${tmb}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroupRow}>
        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: '#FFC0CB', true: '#81b0ff' }}
          thumbColor={genero ? '#81b0ff' : '#FFC0CB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />

        <Text>Masculino</Text>
      </View>
      <Text>Altura (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <Text>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        value={peso}
        keyboardType="number-pad"
        onChangeText={(text) => setPeso(text)}
      />

      <Text>Idade</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
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
