import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';

export default function Imc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero((previousState) => !previousState);

  const handleCalculator = () => {
    if (!altura || !peso) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos.");
      return;
    }

    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    if (isNaN(height) || isNaN(weight)) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos com valores numéricos.");
      return;
    }

    const imc = weight / (height * height);

    let category = "";

    if (imc < 20.7) {
      category = "Abaixo do peso!";
    } else if (imc <= 26.4) {
      category = "Normal";
    } else if (imc <= 27.8) {
      category = "Pouco acima do peso!";
    } else if (imc <= 31.1) {
      category = "Acima do peso!";
    } else {
      category = "Obeso!";
    }

    Alert.alert(
      category,
      `Seu IMC é de ${imc.toFixed(2)} e está ${category.toLowerCase()}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <Text style={styles.desc}>
        O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade.
        É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
      </Text>
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
      <View style={styles.inputs}>
        <View>
          <Text>Altura (cm)</Text>
          <TextInput
            keyboardType='number-pad'
            style={styles.input}
            value={altura}
            onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
          />
        </View>
        <View>
          <Text>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            value={peso}
            keyboardType='number-pad'
            onChangeText={(text) => {
              text = text.replace(/[^0-9.]/g, "");

              if (text.split(".").length > 2) {
                text = text.replace(/\.+/g, ".");
              }

              setPeso(text);
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleCalculator} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
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
    paddingTop: 20,
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
    marginBottom: 30,
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 88,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  input: {
    height: 54,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 4,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 60,
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
