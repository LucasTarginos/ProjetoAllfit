import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Medicao() {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem} >
          <Text style={styles.edit}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem} >
          <Text style={styles.edit}>Medições</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem} >
          <MaterialCommunityIcons name="cog" size={wp('10%')} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.conteudocontain}>
        <TouchableOpacity style={styles.headerItem} >
          <MaterialCommunityIcons name="account-circle" size={wp('20%')} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem} >
          <Text style={styles.contain}>Nome do usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem} >
          <Text style={styles.contain}>Treinamentos {'\n'}        20</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.image}>
        <Image source={require('../../assets/tabela.png')} />      
      </View>

      <Text style={styles.title}>Painel</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.treinoButton} onPress={() => navigation.navigate('Treino')}>
          <Image source={require('../../assets/arm-muscle.png')} style={styles.cardIconLarge} />          
          <Text style={styles.ButtonText}>Treino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.medicoesButton}  onPress={() => navigation.navigate('Medicao')}>
          <Image source={require('../../assets/medicao.png')} style={styles.cardIconLarge} />   
          <Text style={styles.ButtonText}>Medições</Text>     
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Treinamentos</Text>

      <View style={styles.treinamento}>
        <TouchableOpacity style={styles.cardIcon} >
          <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.treinoItem} >
          <Text style={styles.treino}>Nome de usuário {'\n'} (data do treino)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.treinoItem} >
          <Image source={require('../../assets/interroga.png')} style={styles.cardIcon} />      
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    backgroundColor: '#B3B3B3',
    paddingStart: wp('2%'),
    alignItems: 'center',
    paddingTop: wp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: wp('10%')
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  edit: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  conteudocontain: {
    alignItems: 'center',
    paddingTop: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  contain: {
    fontSize: wp('3.6%'),
    color: '#000',
  },
  image: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  
  title: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('2%'),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
  },
  Button: {
    alignItems: 'center',
  },

  treinoButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD', 
    padding: wp('1%'),
    paddingHorizontal: wp('15%'), // Preenchimento para melhor aparência
    borderRadius: wp('2%'), // Bordas arredondadas
    marginVertical: hp('2%'),
  },

  medicoesButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD', // Cor de fundo para o botão de medições
    padding: wp('1%'), // Preenchimento para melhor aparência
    paddingHorizontal: wp('13%'), // Preenchimento para melhor aparência
    borderRadius: wp('2%'), // Bordas arredondadas
    marginVertical: hp('2%'),
  },

  ButtonText: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  cardIcon: {
    width: wp('15%'),
    height: hp('7%'),
    resizeMode: 'contain',
  },
  cardIconLarge: {
    width: wp('10%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },
  treinamento: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  treinoItem: {
    flex: 1,
    alignItems: 'center',
  },
  treino: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
    color: '#000',
  },
});
