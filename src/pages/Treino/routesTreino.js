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
        <Tab.Navigator  options={{headerShown:false}}>
            <Tab.Screen name="Sugestões" component={Sugestao}/>

            <Tab.Screen name="Busca" component={Busca}/>

            <Tab.Screen name="Exercicios" component={Exercicios}/>

            <Tab.Screen name="SeusT reinos" component={SeusTreinos}/>
        </Tab.Navigator>
    )
}