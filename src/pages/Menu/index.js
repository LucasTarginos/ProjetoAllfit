import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function MenuAmigos() {
  const navigation = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Confirmação',
      'Deseja sair da aplicação?',
      [
        {
          text: 'Sim',
          onPress: () => {
            console.log('Usuário escolheu Sim');
          },
        },
        {
          text: 'Não',
          onPress: () => {
            console.log('Usuário escolheu Não');
          },
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#000" />
        <Text style={styles.userName}>Nome do usuário</Text>
      </View>

  

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.itemText}>Ajuda</Text>
        <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => setAlertVisible(true)}>
        <Text style={styles.itemText}>Sair</Text>
        <Text style={styles.menuItemText}>Sair da aplicação</Text>
      </TouchableOpacity>

      {alertVisible && (
        <View style={styles.help}>
          <Text style={styles.text}>Deseja sair da aplicação?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonHelp} onPress={showAlert}>
              <Text style={styles.buttonTextHelp}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonHelp} onPress={() => setAlertVisible(false)}>
              <Text style={styles.buttonTextHelp}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

<TouchableOpacity style={styles.menuItem} onPress={() => navigation.goBack()}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <MaterialCommunityIcons name="arrow-left" size={wp('10%')} color="#000" />
    <Text style={styles.itemText}>Voltar</Text>
  </View>
</TouchableOpacity>
      <StatusBar style="light" />
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
  },
  userName: {
    fontSize: wp('5%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  menuItem: {
    alignItems: 'left',
    padding: wp('6%'),
    borderBottomWidth: 0.5,
  },
  itemText: {
    marginLeft: wp('4%'),
    fontSize: wp('4.5%'),
    color: '#000',
  },
  menuItemText: {
    marginLeft: wp('4%'),
    fontSize: wp('3.5%'),
    color: '#000',
  },
  help: {
    backgroundColor: '#909090',
    width: wp('80%'),
    borderRadius: 10,
    padding: wp('1%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('10%'),
    color: '#7D7D7D',
    fontSize: wp('1.5%'),
    paddingHorizontal: wp('1%'),
  },
  text: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: hp('1%'),
    width: wp('80%'),
    paddingHorizontal: wp('5%'),
  },
  buttonHelp: {
    backgroundColor: '#B3B3B3',
    width: wp('38%'),
    borderRadius: 4,
    paddingVertical: hp('2%'),
    marginTop: hp('1%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextHelp: {
    color: '#000',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
});
