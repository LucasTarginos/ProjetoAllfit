import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>

    <View style={styles.containerForm}>
        <Text style={styles.title}>            Bem vindo ao{'\n'}seu novo parceiro de treino</Text>
      </View>

      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo-oficial.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Começar</Text>
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

  containerForm: {
    marginStart: wp('5%'), 
    paddingStart: wp('5%'), 
    paddingEnd: wp('5%'),
    paddingTop: wp ('35%') 
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), 
  },


  logoImage: {
    width: wp('80%'), 
  },


  mainImage: {
    width: wp('80%'), 
  },


  title: {
    fontSize: wp('6%'), 
    fontWeight: 'bold',
    marginTop: hp('2%'), 
    marginBottom: hp('1%'), 
    textAlign: 'justify',
  },

  button: {
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: hp('2%'), 
    width: wp('80%'), 
    height: hp('10%'), 
    alignSelf: 'center',
    bottom: hp('-15%'), 
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: wp('4%'), 
    fontWeight: 'bold',
    color: '#000000',

  },
});