import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function WaterCalculator() {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");

  const handleCalculator = () => {
    if (!idade || !peso) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos.");
      return;
    }

    const age = parseFloat(idade);
    const weight = parseFloat(peso);

    if (isNaN(age) || isNaN(weight)) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos com valores numéricos.");
      return;
    }

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
      <Text style={styles.titulo}>Calculadora de Água</Text>
      <Text style={styles.desc}>Calculadora de consumo diário de água</Text>
      <Image source={require("../../../assets/copo.png")} style={styles.image} />

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Idade</Text>
          <TextInput
            keyboardType='number-pad'
            style={styles.input}
            value={idade}
            onChangeText={(text) => setIdade(text.replace(/\D/g, ""))}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Peso (kg)</Text>
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
    textAlign: 'center',
    marginBottom: 40,
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 52,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '60%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
