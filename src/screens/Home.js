import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Beranda from './Beranda';
import DetailTiket from './DetailTiket';
import InputDataUser from './InputDataUser';
import DataLainnya from './DataLainnya';

const Stack = createNativeStackNavigator();

function Home() {
  return(
      <Stack.Navigator initialRouteName='Beranda'
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="DetailTiket" component={DetailTiket} />
        <Stack.Screen name="InputDataUser" component={InputDataUser} />
        <Stack.Screen name="lainnya" component={DataLainnya} />
      </Stack.Navigator>
  );
}

export default Home;