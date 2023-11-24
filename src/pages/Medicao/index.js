import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
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
        <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('MedicaoEdit')}>
          <MaterialCommunityIcons name="plus" size={wp('9%')} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.conteudocontain}>
        <Text style={styles.conteudo}>Seu histórico de medições está vazio</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
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
    backgroundColor: '#C0C0C0', // Alterei para um tom de cinza
    padding: wp('5%'),
    margin: wp('5%'),
    borderRadius: 10,
  },
  conteudo: {
    fontSize: wp('4%'),
    color: '#000',
  },
});
