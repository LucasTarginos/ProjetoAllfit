import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Macros() {
    const navigation = useNavigation();
  
    const [isVisible, setIsVisible] = useState(false);
    const toggleTextVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      
  <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
           </View>
  
          <View style={styles.cards}>
            <TouchableOpacity style={styles.card}
              onPress={() => navigation.navigate('Calculadoras')}
            >
              <Image source={require('../../../assets/cafe.png')} style={styles.cardIcon} />
              <Text style={styles.textCard}>Café da manhã</Text>
              <MaterialCommunityIcons name="plus" size={wp('9%')} color="#000" />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../../assets/almoco.png')} style={styles.cardIcon} />
              <Text style={styles.textCard}>Almoço</Text>
              <MaterialCommunityIcons name="plus" size={wp('9%')} color="#000" />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.card} >
              <Image source={require('../../../assets/jantar.png')} style={styles.cardIcon} />
              <Text style={styles.textCard}>Jantar</Text>
              <MaterialCommunityIcons name="plus" size={wp('9%')} color="#000" />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.card} >
              <Image source={require('../../../assets/lanches.png')} style={styles.cardIcon} />
              <Text style={styles.textCard}>Lanches</Text>
              <MaterialCommunityIcons name="plus" size={wp('9%')} color="#000" />
            </TouchableOpacity>
             
            </View>
        </ScrollView>
  
    );}
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header:{
      paddingStart: wp('4%'),
      paddingBottom: wp('10%'),
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9', // Cor de fundo do header
        paddingHorizontal: wp('5%'), // Espaçamento horizontal responsivo
        height: hp('15%'), // Altura do header responsiva
        width: '100%',
        position: 'absolute', // Fixa o cabeçalho no topo da tela
        top: 0, // Posiciona o cabeçalho no topo da tela
        zIndex: 1, // Garante que o cabeçalho fique acima do conteúdo rolável
      },
      user: {
        fontSize: wp('5%'), // Tamanho do texto responsivo
        color: '#fff', // Cor do texto
      },
    
      scrollContent: {
        paddingTop: hp('1%'), // Garante espaço para o cabeçalho fixo no topo
        alignItems: "center",
    },
    
      cards: {
        marginTop: hp('1%'),
        paddingHorizontal: wp('2%'),
        width: wp('95%'),
      },
    
      card: {
        backgroundColor: '#D9D9D9',
        width: wp('90%'),
        height: hp('11%'),
        borderRadius: wp('4%'), // Bordas proporcionais ao width
        borderWidth: wp('0.5%'), // Borda proporcional ao width
        borderColor: '#D9D9D9',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('6%'),
        marginBottom: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
      },
    
      cardIcon: {
        width: wp('11%'),
        height: hp('6%'),
        marginRight: wp('8%'),
      },
    
      textCard: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
      },
      
      Help: {
        paddingHorizontal: wp('1%'), // 2% da largura da tela para espaçamento horizontal
      },
    
      ButtonDicas: {
        marginTop: hp('5%'), // 5% da altura da tela para espaçamento
        alignSelf: 'center',
      },
    
      dicasText: {
        color: '#000000',
        fontSize: wp('5%'),
      },
    
      Dicas: {
        backgroundColor: '#D9D9D9',
        borderRadius: wp('4%'), // Bordas proporcionais ao width
        padding: wp('10%'), // 2% da largura da tela para padding
        marginVertical: hp('2%'),
        color: '#7D7D7D',
        fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
        textAlign: 'center',
      },
      text: {
        fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
        textAlign: 'center',
      },
    });