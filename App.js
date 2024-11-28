import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import AvisosScreen from './screens/AvisoScreen';
import HorarioScreen from './screens/HorarioScreen';
import ConceitosScreen from './screens/ConceitosScreen';
import ContatosScreen from './screens/ContatosScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Avisos' component={AvisosScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Horarios' component={HorarioScreen} options={{headerShown: false}}/> 
        <Stack.Screen name='Conceitos' component={ConceitosScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Contatos' component={ContatosScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
