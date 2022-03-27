import React from 'react';
import { Text, View} from 'react-native';
import stylesBatal from '../styles/stylesBatal';

export default function Batal({ route, navigation }) {
    return (
      <View style={stylesBatal.container}>
          <View style ={stylesBatal.titleBatal}>
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Daftar Pembatalan</Text>
          </View>
      </View>
    );
  };
