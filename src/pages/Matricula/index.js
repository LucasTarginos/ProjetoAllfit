import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Perfil() {  
    const navigation = useNavigation();

    return (
    <ScrollView style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.voltar}>
        <MaterialCommunityIcons name="arrow-left" size={wp('10%')} color="#000" />
      </TouchableOpacity>
      <View style={styles.header}>
      <View style={styles.headerImageContainer}>
        <Image source={require('../../assets/logo-oficial.png')} style={styles.footerImage} />
      </View>
        <Text style={styles.title}>ACADEMIA UNIPÊ GYM</Text>
      </View>

     <View style={styles.form}>
        <Text style={styles.formText}>Nome do matriculado: Usuário da Silva Santos</Text>
        <Text style={styles.formText}>Data de nascimento: 20/12/2003</Text>
        <Text style={styles.formText}>Plano escolhido: Anual Premium</Text>
        <Text style={styles.formText}>Validade: abr/2023 - abr/2024</Text>
        <Text style={styles.formText}>Valor: R$59,90</Text>
        <Text style={styles.formText}>Unidade: Bancários</Text>
        <Text style={styles.formText}>E-mail: usuario********@gmail.com</Text>
        <Text style={styles.formText}>Telefone (83) 99001-2023</Text>
        <Text style={styles.formText}>Status: <Text style={styles.greenText}>ATIVO</Text></Text>
     </View>

      <StatusBar style="light" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3B3B3',
  },
  voltar:{
    paddingStart: wp('2%'),
    paddingTop: wp('7%')
  },
  header: {
    paddingStart: wp('2%'),
    alignItems: 'center',
  },
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  title: {
    fontSize: wp('6%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  form:{
    marginHorizontal: wp('5%'),
    justifyContent: 'center',
    paddingVertical: wp('15%'),
  },
  formText:{
    textAlign:'justify',
    fontSize: wp('5%'),
    marginBottom: wp('2%'),
    
  },
  greenText: {
    color: '#4CAF50', // Define a cor verde para qualquer texto com a classe greenText
  }
});
