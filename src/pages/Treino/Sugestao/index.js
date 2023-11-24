import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Sugestao() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/emagrecer.png')}
        style={styles.backgroundImage}
      >
        <Text style={styles.imageText}>PARA EMAGRECER</Text>
        <Text style={styles.imageText}>Treinos para você que está buscando perder gordura e ganhar massa magra</Text>
      </ImageBackground>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/massa.png')}
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/casa.png')}
          style={styles.containImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ou 'contain' dependendo do comportamento desejado
    justifyContent: 'center',
    alignItems: 'center',
  },
  containImage: {
    flex: 1,
    width: '100%', // Ajuste o valor conforme necessário
    height: '100%', // Ajuste o valor conforme necessário
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
