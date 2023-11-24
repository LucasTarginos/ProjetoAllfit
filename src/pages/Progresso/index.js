import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {
  LineChart,
} from "react-native-chart-kit";

export default function Medicao() {
  const navigation = useNavigation();
  
  const generateChartData = () => {
    const data = [];
    for (let i = 1; i <= 25; i += 5) {
      data.push(Math.random() * 100);
    }
    return data;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={styles.edit}>Editar Perfil</Text>
        </TouchableOpacity>
        <Text style={[styles.headerItem, styles.title1]}>Progresso</Text>
        <TouchableOpacity style={styles.headerItem}>
          <MaterialCommunityIcons name="cog" size={wp('10%')} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.headerItem}>
          <MaterialCommunityIcons name="account-circle" size={wp('20%')} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={styles.content}>Nome do usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={styles.content}>Treinamentos {'\n'}20</Text>
        </TouchableOpacity>
      </View>

      <View>
        <LineChart
          data={{
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
            datasets: [
              {
                data: [
                  Math.random() * 20,
                  Math.random() * 20,
                  Math.random() * 20,
                  Math.random() * 20,
                  Math.random() * 20,
                  Math.random() * 20
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
         
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#FFFFFF", // Alterado para branco para remover o fundo
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Alterado para preto
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Alterado para preto
            style: {
              borderRadius: 0,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#000" // Alterado para preto
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 0
          }}
        />
        
        {/* Adiciona uma barra abaixo do gráfico */}
        <View style={styles.bar}></View>
      </View>

      <Text style={styles.title}>Painel</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Treino')}>
          <Image source={require('../../assets/arm-muscle.png')} style={styles.iconLarge} />
          <Text style={styles.buttonText}>Treino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Medicao')}>
          <Image source={require('../../assets/medicao.png')} style={styles.iconLarge} />
          <Text style={styles.buttonText}>Medições</Text>
        </TouchableOpacity>
      </View>

      {/* Adiciona uma barra abaixo dos botões */}
      <View style={styles.bar}></View>

      <Text style={styles.title}>Treinamentos</Text>

      <View style={styles.trainingItem}>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#000" />
        </TouchableOpacity>
        <View style={styles.treinoItem}>
          <Text style={styles.treino}>Nome de usuário {'\n'}(data do treino)</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../../assets/interroga.png')} style={styles.expand} />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: wp('7%'),
    paddingBottom: wp('10%'),
    paddingHorizontal: -50,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
    
  },
  bar: {
    marginHorizontal:18,
    height: 1,
    width: 370,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  edit: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  title1: {
    fontWeight: "bold",
    fontSize: wp('4.5%'), // Ajuste o tamanho da fonte conforme necessário
    color: '#000',
    marginLeft:30,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: wp('4%'),
    paddingHorizontal: wp('5%'),
  },
  content: {
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
    fontWeight: "bold",
    marginLeft: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: wp('1%'),
    paddingHorizontal: wp('15%'),
    borderRadius: wp('3%'),
    marginVertical: hp('2%'),
  },
  buttonText: {
    fontSize: wp('4%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  iconLarge: {
    width: wp('10%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },
  trainingItem: {
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
  icon: {
    width: wp('15%'),
    height: hp('7%'),
    resizeMode: 'contain',
  },
  expand:{
    width: wp('6%'),
    height: hp('7%'),
    resizeMode: 'contain',
  }
});
