import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function GorduraCorporal() {
  const [altura, setAltura] = useState("");
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [pescoço, setPescoco] = useState("");
  const [peso, setPeso] = useState("");

  const handleCalculator = () => {
    const height = parseFloat(altura);
    const waist = parseFloat(cintura);
    const hip = parseFloat(quadril);
    const neck = parseFloat(pescoço);
    const weight = parseFloat(peso);

    if (isNaN(height) || isNaN(waist) || isNaN(hip) || isNaN(neck) || isNaN(weight)) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos com valores numéricos.");
      return;
    }

    // Cálculo da Circunferência da Cintura para Quadril (CCR)
    const ccr = waist / hip;

    // Cálculo da Gordura Corporal
    const gorduraCorporal = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;

    Alert.alert("Gordura Corporal", `Sua gordura corporal estimada é de ${gorduraCorporal.toFixed(2)}%.\nCircunferência da Cintura para Quadril (CCR): ${ccr.toFixed(2)}`);

  };

  return (
    <View style={styles.container}>
      <Text>Altura (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <Text>Cintura (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={cintura}
        onChangeText={(text) => setCintura(text)}
      />

      <Text>Quadril (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={quadril}
        onChangeText={(text) => setQuadril(text)}
      />

      <Text>Pescoço (cm)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={pescoço}
        onChangeText={(text) => setPescoco(text)}
      />

      <Text>Peso (kg)</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text)}
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
