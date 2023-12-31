import React from "react";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import Sugestao from './Sugestao';
import Busca from './Busca';
import Exercicios from './Exercicios';
import SeusTreinos from './SeusTreinos';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {


}
export default function RoutesTreino(){
    return(
        <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 11,
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
            <Tab.Screen name="Sugestões" component={Sugestao}/>

            <Tab.Screen name="Exercicios" component={Exercicios}/>

            <Tab.Screen name="Seus Treinos" component={SeusTreinos}/>
        </Tab.Navigator>
    )
}