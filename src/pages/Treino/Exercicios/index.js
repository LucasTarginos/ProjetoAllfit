import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Imc() {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero((previousState) => !previousState);
  
  const handleCalculator = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);
  
    const imc = weight / (height * height);
  
    if (genero === false) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
      if (imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal",
          `Seu IMC é de ${imc.toFixed(2)} e está considerado normal`
        );
      if (imc > 26.4 && imc <= 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso`
        );
      if (imc > 27.8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} e está obeso`
        );
    } else if (genero == true){
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
      if (imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal",
          `Seu IMC é de ${imc.toFixed(2)} e está considerado normal`
        );
      if (imc > 26.4 && imc <= 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso`
        );
      if (imc > 27.8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} e está obeso`
        );
    }
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.inputGroupRow}>
      <Text>Feminino</Text>
      <Switch
        trackColor={{ false: '#FFC0CB', true: '#81b0ff' }}
        thumbColor={genero ? '#81b0ff' : '#FFC0CB'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch} // Atualiza o valor do gênero
        value={genero}
      />


      <Text>Masculino</Text>
      </View>
      <Text>Altura (cm)</Text>
      <TextInput keyboardType='number-pad' style={styles.input} value={altura} onChangeText={(text) => setAltura(text.replace(/\D/g,""))}/>
      
      <Text>Peso (kg)</Text>
      <TextInput
  style={styles.input}
  value={peso}
  keyboardType='number-pad'
  onChangeText={(text) => {
    // Filtra os caracteres não numéricos, exceto o ponto decimal
    text = text.replace(/[^0-9.]/g, "");

    // Certifica-se de que há apenas um ponto decimal
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
  inputGroupRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 54,
    width: "80%",
    backgroundColor:"#FFF",
    borderRadius:8,
    justifyContent:"center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  button:{
    backgroundColor:'#D9D9D9',
    width: "80%",
    height: 64,
    justifyContent: 'center',
    alignItems:"center",
    elevation: 2,
    borderRadius: 8,
    marginTop:16,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 12,
  },
});
