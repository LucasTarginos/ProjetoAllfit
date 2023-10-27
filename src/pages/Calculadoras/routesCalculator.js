import React from "react";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import Bf from './Bf'
import Imc from './Imc';
import Agua from './Agua';
import Tbm from './Tbm';

const Tab = createMaterialTopTabNavigator();

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