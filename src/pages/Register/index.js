import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Register() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo-oficial.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <TextInput
          placeholder='Username'
          style={styles.input}
        />
        <TextInput
          placeholder='E-mail'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder='Confirme a senha'
          secureTextEntry={!showPassword}
          style={styles.input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Text style={styles.showPasswordButtonText} >
          <MaterialCommunityIcons name="crop-square" size={wp('4%')} color="#000" />
            {showPassword ? 'Ocultar Senha' : 'Exibir Senha'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonRegister}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.login}>Já possui conta? login</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), // 25% da altura da tela
    marginBottom: hp('5%'), // 5% da altura da tela de margem inferior
  },

  logoImage: {
    width: wp('100%'), // 100% da largura da tela
  },

  containerForm: {
    width: wp('90%'), // 80% da largura da tela
    paddingHorizontal: wp('5%'), // 1% da largura da tela para espaçamento horizontal
    alignSelf: 'center',
  },

  input: {
    borderBottomWidth: 1,
    height: hp('7%'), // 7% da altura da tela
    marginBottom: hp('3%'), // 3% da altura da tela para espaçamento
    fontSize: hp('2.5%'), // 2.5% da altura da tela para o tamanho da fonte
    width: '100%',
  },

  showPasswordButton: {
    marginTop: hp('1%'), // 1% da altura da tela para espaçamento superior
    alignSelf: 'flex-start',
  },

  showPasswordButtonText: {
    color: '#000',
    fontSize: hp('2%'), // 2% da altura da tela para o tamanho da fonte
  },

  button: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 4,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento superior
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonRegister: {
    color: '#fff',
    fontSize: hp('2.5%'), // 2.5% da altura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },

  buttonLogin: {
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento superior
    alignSelf: 'center',
  },

  login: {
    color: '#a1a1a1',
  },
});
