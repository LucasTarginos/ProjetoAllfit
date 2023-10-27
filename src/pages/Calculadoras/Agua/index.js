import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function Agua() {

  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");

  const handleCalculator = () => {
    const age = parseFloat(idade);
    const weight = parseFloat(peso);

    const aguaA = weight * 0.035;
    const aguaC = weight * 0.040;

    if (age >= 18) {
      Alert.alert(
        "Sua quantidade de água",
        `Sua quantidade de água recomendada é ${aguaA.toFixed(1)} litros por dia`
      );
    } else {
      Alert.alert(
        "Quantidade de água diária",
        `Sua quantidade de água recomendada é ${aguaC.toFixed(1)} litros por dia`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Idade</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text.replace(/\D/g, ""))}
      />

      <Text>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        value={peso}
        keyboardType='number-pad'
        onChangeText={(text) => {
          // Filtra os caracteres não numéricos, exceto o ponto decimal
          text = text.replace(/[^0-9.]/g, "");

          // Certifique-se de que há apenas um ponto decimal
          if (text.split(".").length > 2) {
            // Se houver mais de um ponto decimal, remova os extras
            text = text.replace(/\.+/g, ".");
          }

          setPeso(text);
        }}
      />

      <TouchableOpacity onPress={handleCalculator} style={styles.button}>
        <Text style={styles.buttonText}>Calculadora</Text>
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
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: "80%",
    height: 64,
    justifyContent: 'center',
    alignItems: "center",
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
