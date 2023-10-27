import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function MenuAmigos() {  
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };

    return (
    <ScrollView style={styles.container}>
        
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#000" />
        <Text style={styles.userName}>Nome do usuário</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.ItemText}>Perfil</Text>
        <Text style={styles.menuItemText}>acesse seu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.ItemText}>Ajuda</Text>
        <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={toggleTextVisibility}>
       <Text style={styles.ItemText}>Sair</Text>
        <Text style={styles.menuItemText}>Sair da aplicação</Text>
      </TouchableOpacity>

      {isVisible && (
	<View  style={styles.help}>
          <Text style={styles.text}>
          Deseja sair da aplicação ?          
          </Text>

          <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.bhelp}>
                            <Text style={styles.buttonTexthelp}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bhelp}>
                            <Text style={styles.buttonTexthelp}>Não</Text>
                        </TouchableOpacity>
                    </View>
    </View>
        )}


      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={wp('10%')} color="#fff" />
        <Text style={styles.ItemText}>Voltar</Text>
      </TouchableOpacity>
      <StatusBar style="light" />  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    backgroundColor: '#B3B3B3',
    paddingStart: wp('2%'),
    alignItems: 'center',
    paddingTop: wp('7%')
  },
  userName: {
    fontSize: wp('5%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('6%'),
  },
  ItemText:{
    marginLeft: wp('4%'),
    fontSize: wp('4.5%'),
    color: '#000',
  },
  menuItemText: {
    marginLeft: wp('4%'),
    fontSize: wp('3.5%'),
    color: '#000',
  },
  help:{
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
  buttonContainer: {
    flexDirection: 'column',
    marginTop: hp('1%'), // Adapte conforme necessário
    width: wp('80%'),
    paddingHorizontal: wp('5%'),
},
bhelp: {
    backgroundColor: '#B3B3B3',
    width: wp('38%'), // Ajuste conforme necessário
    borderRadius: 4,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('1%'), // 2% da altura da tela de margem superior
    alignItems: 'center',
    alignSelf: 'center',
},

  buttonTexthelp:{
    color: '#000',
    fontSize: wp('3%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },
});
