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
      <MaterialCommunityIcons name="account-circle" size={wp('50%')} color="#000" />
        <Text style={styles.userName}>Nome do usuário</Text>
      </View>

     <View style={styles.form}>
        <Text style={styles.formText}>e-mail: usuario********@gmail.com</Text>
        <Text style={styles.formText}>Academia:      Unipê Gym Bancários</Text>
        <Text style={styles.formText}>Matrícula válida até:          abr/2024</Text>
        <Text style={styles.formText}>Seu plano:                Anual Premium</Text>
     </View>

     <TouchableOpacity style={styles.menuItem} > 
        <MaterialCommunityIcons name="arrow-top-right" size={wp('10%')} color="#000" />
        <Text style={styles.menuItemText}>Meu Progresso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Matricula')}>
        <MaterialCommunityIcons name="clipboard-check-outline" size={wp('10%')} color="#000" />
        <Text style={styles.menuItemText}>Matricula</Text>
      </TouchableOpacity>
      
      <View style={styles.footerImageContainer}>
        <Image source={require('../../assets/logo-oficial.png')} style={styles.footerImage} />
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  voltar:{
    paddingStart: wp('2%'),
    paddingTop: wp('7%')
  },
  header: {
    paddingStart: wp('2%'),
    alignItems: 'center',
    paddingTop: wp('7%')
  },
  userName: {
    fontSize: wp('6%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  form:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp('5%')
  },

  formText:{
    fontSize: wp('5%')
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('6%'),
    backgroundColor: '#D9D9D9',
    marginStart: wp('4%'),
    marginTop: hp('1%'),
    paddingHorizontal: wp('2%'),
    width: wp('90%'),
  },
  menuItemText: {
    marginLeft: wp('4%'),
    fontSize: wp('4.5%'),
    color: '#000',
    fontWeight:'bold'
  },

  footerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    paddingTop: wp('10%')
  },

  footerImage: {
    width: wp('20%'),
    height: hp('9%'),
    marginBottom: hp('2%'),
  },
});