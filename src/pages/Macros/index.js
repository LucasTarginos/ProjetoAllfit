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
    <View>
        <Text>Calorias Restantes:                  1560</Text>
        <Text>Calorias Consumidas:                 1222</Text>
    </View>

    

  );}