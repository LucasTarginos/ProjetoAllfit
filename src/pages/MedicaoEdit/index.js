import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function MedicaoEdit() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem} onPress={() => navigation.goBack()}>
          <Text style={styles.edit}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={[styles.edit, styles.medicoes]}>Medições</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.edit}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.data}>
        <Text style={styles.dataText}>
          <Text style={styles.dataTitle}>Data </Text>
          <Text style={styles.dataValue}>24 de novembro de 2023</Text>
        </Text>
        <TextInput />

      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Peso Corporal (kg)                                 (peso a ser salvo)</Text>
        <Text style={styles.formText}>Cintura (cm)                                            (peso a ser salvo)</Text>
        <Text style={styles.formText}>Gordura Corporal (%)                             (peso a ser salvo)</Text>
        <Text style={styles.formText}>Pescoço (cm)                                         (peso a ser salvo)</Text>
        <Text style={styles.formText}>Abdômen (cm)                                        (peso a ser salvo)</Text>
        <Text style={styles.formText}>Bíceps Esquerdo (cmd)                         (peso a ser salvo)</Text>
        <Text style={styles.formText}>Bíceps Direito (cmd)                              (peso a ser salvo)</Text>
        <Text style={styles.formText}>Quadris (cm)                                           (peso a ser salvo)</Text>
        <Text style={styles.formText}>Coxa Esquerda (cm)                              (peso a ser salvo)</Text>
        <Text style={styles.formText}>Coxa Direito (cm)                                   (peso a ser salvo)</Text>
        <Text style={styles.formText}>Panturrilha Esquerda (cm)                    (peso a ser salvo)</Text>
        <Text style={styles.formText}>Panturrilha Direita (cm)                         (peso a ser salvo)</Text>
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
    paddingBottom: wp('10%'),

  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  edit: {
    fontSize: wp('3.2%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  medicoes: {
    marginTop: 0, // Redefinindo o marginTop
  },
  data: {
    alignItems: 'center',
    marginBottom: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  dataText: {
    fontSize: wp('3.5%'),
  },
  
  dataValue: {
    marginLeft: wp('2%'),
  },
  form: {
    marginHorizontal: wp('2%'),
    justifyContent: 'center',
    paddingVertical: wp('5%'),
  },
  formText: {
    textAlign: 'justify',
    fontSize: wp('3.5%'),
    marginBottom: wp('2%'),
    lineHeight: wp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
