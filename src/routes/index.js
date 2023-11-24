import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Register from '../pages/Register'
import Signin from '../pages/Signin'
import Dashboard from '../pages/Dashboard'
import Menu from '../pages/Menu'
import Perfil from '../pages/Perfil'
import Matricula from '../pages/Matricula'
import Calculadoras from '../pages/Calculadoras'
import Treino from '../pages/Treino'
import Macros from '../pages/Macros'
import Progresso from '../pages/Progresso'
import Medicao from '../pages/Medicao'
import MedicaoEdit from '../pages/MedicaoEdit'

const Stack = createNativeStackNavigator(); 

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome"
                component={Welcome}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>
    
            <Stack.Screen name="Register"
                component={Register}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>
            
            <Stack.Screen name="Signin"
                component={Signin}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Dashboard"
                component={Dashboard}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Calculadoras"
                component={Calculadoras}
                options={{headerShown:false}}
            > 
            </Stack.Screen>

            <Stack.Screen name="Treino"
                component={Treino}
                options={{headerShown:false}}
            > 
            </Stack.Screen>

            <Stack.Screen name="Menu"
                component={Menu}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Perfil"
                component={Perfil}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Matricula"
                component={Matricula}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Progresso"
                component={Progresso}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>


            <Stack.Screen name="Medicao"
                component={Medicao}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="MedicaoEdit"
                component={MedicaoEdit}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Macros"
                component={Macros}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

        </Stack.Navigator>
    )
}