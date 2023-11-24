import React from "react";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { useState } from "react";
import Macros from './Macros';
import SuasReceitas from './SuasReceitas';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {

}
export default function routesMacros(){
    const [isVisible, setIsVisible] = useState(false);
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };
    return(
        
        <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#D9D9D9', // Cor de fundo da top bar
          elevation: 0, // Sombra na top bar (0 para remover)
          marginTop: 30, // Adicionando margem superior
        },
        indicatorStyle: {
          backgroundColor: '#7E7E7E', // Cor da linha indicadora
        },
        
      }}
    >

            <Tab.Screen name="Macros" component={Macros}/>

            <Tab.Screen name="Suas Receitas" component={SuasReceitas}/>

        </Tab.Navigator>
    )
}