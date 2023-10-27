import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Dashboard() {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho Fixado no Topo */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#000" />
        </TouchableOpacity>
        <Text style={styles.user}>Nome do usuário</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <MaterialCommunityIcons name="menu" size={wp('8%')} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Rolável */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Calculadoras')}
          >
            <Image source={require('../../assets/calculadora.png')} style={styles.cardIcon} />
            <Text style={styles.textCard}>Calculadoras</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} >
            <Image source={require('../../assets/macros_icon.png')} style={styles.cardIcon} />
            <Text style={styles.textCard}>Macros</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/arm-muscle.png')} style={styles.cardIcon} />
            <Text style={styles.textCard}>Treino</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/progresso_icon.png')} style={styles.cardIcon} />
            <Text style={styles.textCard}>Progresso</Text>
          </TouchableOpacity>

          <View style={styles.Help}>
            <TouchableOpacity style={styles.ButtonDicas} onPress={toggleTextVisibility}>
              <Text style={styles.dicasText}>Dicas</Text>
            </TouchableOpacity>
            {isVisible && (
              <View style={styles.Dicas}>
                <Text style={styles.text}>
                  Dicas de treinos {'\n'}Dicas escolhidas de forma inteligente para você
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D9D9D9', // Cor de fundo do header
    paddingHorizontal: wp('5%'), // Espaçamento horizontal responsivo
    height: hp('13%'), // Altura do header responsiva
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
    paddingTop: hp('18%'), // Garante espaço para o cabeçalho fixo no topo
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
    alignItems: 'center',
    justifyContent: 'flex-start', 
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
