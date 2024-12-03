import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HorarioScreen from './screens/HorarioScreen';
import ConceitosScreen from './screens/ConceitosScreen';
import AvisoScreen from './screens/AvisoScreen';
import ContatoScreen from './screens/ContatosScreen';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#021F39',
                 },
                headerTintColor: '#fff',
                drawerActiveTintColor: '#003366',
                drawerStyle: { backgroundColor: '#04325A',
                  paddingTop: 20,
                },
                drawerItemStyle: {
                  borderTopWidth: 1, 
                  borderBottomWidth: 1, 
                  borderColor: '#095291', 
                  marginHorizontal: 0, 
                },
                drawerLabelStyle: {
                  color: '#fff',
                  fontWeight: 'bold', 
                  fontSize: 15,
                  marginHorizontal: 2,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerTitle: '',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color="#fff" size={25} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Conceitos"
                component={ConceitosScreen}
                options={{
                  headerTitle: '',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="graduation-cap" size={25} color="#fff" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Horário"
                component={HorarioScreen}
                options={{
                  headerTitle: '',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="calendar-alt" size={25} color="#fff" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Avisos"
                component={AvisoScreen}
                options={{
                  headerTitle: '',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="warning" size={25} color="#fff" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Contatos"
                component={ContatoScreen}
                options={{
                  headerTitle: '',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="phone" size={25} color="#fff" />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;