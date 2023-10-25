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


export default function Signin() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
      
  const [isVisible, setIsVisible] = useState(false);
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
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
          placeholder='Username ou email'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Text style={styles.showPasswordButtonText} >
          <MaterialCommunityIcons name="crop-square" size={wp('4%')} color="#000" />
            {showPassword ? 'Ocultar Senha' : 'Exibir Senha'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Notsenha}  onPress={toggleTextVisibility}>
          <Text style={styles.esqueci}> Esqueceu a senha? recuperar senha </Text>
        </TouchableOpacity>

        {isVisible && (
	<View  style={styles.help}>
          <Text style={styles.text}>
           Restaurar senha
          </Text>

	<TextInput
          placeholder='Coloque o seu e-mail'
          style={styles.inputHelp}
        />
	 <TouchableOpacity style={styles.bhelp}>
          <Text style={styles.buttonTexthelp}>Restaurar</Text>
        </TouchableOpacity>
    </View>
        )}

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não possui conta? cadastre-se  </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), // 25% da altura da tela
    marginBottom: hp('2%'), // 2% da altura da tela de margem inferior
    paddingVertical: hp('20%'), // 10% da altura da tela de preenchimento superior
  },

  logoImage: {
    width: wp('100%'), // 100% da largura da tela
  },

  containerForm: {
    width: wp('90%'), // 90% da largura da tela
    paddingHorizontal: wp('5%'), // 5% da largura da tela para espaçamento horizontal
    alignSelf: 'center',
  },

  
  input: {
    borderBottomWidth: 1,
    height: hp('7%'), // 7% da altura da tela
    marginBottom: hp('3%'), // 3% da altura da tela de margem inferior
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
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
    width: wp('80%'), // 80% da largura da tela
    borderRadius: 4,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('2%'), // 2% da altura da tela de margem superior
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },

  Notsenha: {
    marginTop: hp('2%'), // 2% da altura da tela de margem superior
    alignSelf: 'center',
  },
  
  help:{
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: wp('1%'), 
    marginVertical: hp('1%'),
    color: '#7D7D7D',
    fontSize: wp('1.5%'), 
    paddingHorizontal: wp('5%')
  },

  text:{
    fontSize: wp('4%'), 
    fontWeight: 'bold',
    marginTop: hp('1%'), 
    marginBottom: hp('1%'), 
    textAlign: 'center',
  },

  inputHelp:{
    borderBottomWidth: 1,
    height: hp('4%'), 
    marginBottom: hp('2%'), 
    fontSize: wp('3%'), 
    width: '80%',
  },

  bhelp:{
    backgroundColor: '#fff',
    width: wp('50%'), // 80% da largura da tela
    borderRadius: 4,
    paddingVertical: hp('1%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('1%'), // 2% da altura da tela de margem superior
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonTexthelp:{
    color: '#000',
    fontSize: wp('3%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },

  esqueci: {
    color: '#a1a1a1',
    fontSize: wp('3%'), // 3% da largura da tela para o tamanho da fonte
  },

  buttonRegister: {
    marginTop: hp('2%'), // 2% da altura da tela de margem superior
    alignSelf: 'center',
  },

  registerText: {
    color: '#a1a1a1',
    fontSize: wp('3%'), // 3% da largura da tela para o tamanho da fonte
  },
});
