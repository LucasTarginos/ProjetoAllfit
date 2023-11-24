import React from "react";
<<<<<<< HEAD
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
=======
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f

import Bf from './Bf'
import Imc from './Imc';
import Agua from './Agua';
import Tbm from './Tbm';

const Tab = createMaterialTopTabNavigator();

<<<<<<< HEAD
export default function RoutesCalculator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },

        style: {
          backgroundColor: '#F5F5F5', // Cor de fundo da top bar
          elevation: 0, // Sombra na top bar (0 para remover)
          marginTop: 30, // Adicionando margem superior
        },
        indicatorStyle: {
          backgroundColor: '#7E7E7E', // Cor da linha indicadora
        },
      }}
    >
      <Tab.Screen name="Bf" component={Bf} />

      <Tab.Screen name="Imc" component={Imc} />

      <Tab.Screen name="Água" component={Agua} />

      <Tab.Screen name="Tbm" component={Tbm} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  // Pode adicionar estilos adicionais se necessário
});
=======
const tabBarOptions = {


}
export default function RoutesCalculator(){
    return(
        <Tab.Navigator  options={{headerShown:false}}>
            <Tab.Screen name="Bf" component={Bf}/>

            <Tab.Screen name="Imc" component={Imc}/>

            <Tab.Screen name="Agua" component={Agua}/>

            <Tab.Screen name="Tbm" component={Tbm}/>
        </Tab.Navigator>
    )
}
>>>>>>> 0cd8400e992cf85bfff3f3074fae6a3b7ff2304f
