import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Pesanan from './src/screens/Pesanan';
import Batal from './src/screens/Batal';
import 'react-native-gesture-handler';


const Tab = createMaterialBottomTabNavigator();

const Lainnya = () => <View/>

export function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="blue"
        barStyle={{ backgroundColor: 'white', height:60 }}
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Pesanan"
          component={Pesanan}
          options={{
            tabBarLabel: 'Pesanan Saya',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Batal"
          component={Batal}
          options={{
            tabBarLabel: 'Pembatalan',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="close-box" color={color} size={26} />
            ),
          }}
         
        />
        <Tab.Screen
          name="Lainnya"
          component={Lainnya}
          options={{
            tabBarLabel: 'Lainnya',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),
          }}

          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault()
              navigation.navigate("lainnya")
            },
          })}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;