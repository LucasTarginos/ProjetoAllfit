<<<<<<< HEAD
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f

export default function GorduraCorporal() {
  const [altura, setAltura] = useState("");
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
<<<<<<< HEAD
  const [pescoco, setPescoco] = useState("");
=======
  const [pescoço, setPescoco] = useState("");
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  const [peso, setPeso] = useState("");

  const handleCalculator = () => {
    const height = parseFloat(altura);
    const waist = parseFloat(cintura);
    const hip = parseFloat(quadril);
<<<<<<< HEAD
    const neck = parseFloat(pescoco);
=======
    const neck = parseFloat(pescoço);
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
    const weight = parseFloat(peso);

    if (isNaN(height) || isNaN(waist) || isNaN(hip) || isNaN(neck) || isNaN(weight)) {
      Alert.alert("Erro", "Certifique-se de preencher todos os campos com valores numéricos.");
      return;
    }

<<<<<<< HEAD
    const ccr = waist / hip; // Cálculo da Circunferência da Cintura para Quadril (CCR)
    const gorduraCorporal = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76; // Cálculo da Gordura Corporal

    Alert.alert(
      "Gordura Corporal",
      `Sua gordura corporal estimada é de ${gorduraCorporal.toFixed(2)}%.\nCircunferência da Cintura para Quadril (CCR): ${ccr.toFixed(2)}`
    );
=======
    // Cálculo da Circunferência da Cintura para Quadril (CCR)
    const ccr = waist / hip;

    // Cálculo da Gordura Corporal
    const gorduraCorporal = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;

    Alert.alert("Gordura Corporal", `Sua gordura corporal estimada é de ${gorduraCorporal.toFixed(2)}%.\nCircunferência da Cintura para Quadril (CCR): ${ccr.toFixed(2)}`);

>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.titulo}>Calculadora de Percentual de Gordura Corporal</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={altura}
          onChangeText={(text) => setAltura(text)}
        />

        <Text style={styles.label}>Cintura (cm)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={cintura}
          onChangeText={(text) => setCintura(text)}
        />

        <Text style={styles.label}>Quadril (cm)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={quadril}
          onChangeText={(text) => setQuadril(text)}
        />

        <Text style={styles.label}>Pescoço (cm)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={pescoco}
          onChangeText={(text) => setPescoco(text)}
        />

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />
      </View>

      <TouchableOpacity onPress={handleCalculator} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

=======
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
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
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
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  label: {
    marginTop: 8,
  },
  input: {
    height: 54,
    width: '100%',
=======
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '80%',
    backgroundColor: '#FFF',
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
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
