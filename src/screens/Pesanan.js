import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesBatal from '../styles/stylesBatal';
import stylesHome from '../styles/stylesHome';
import stylesDetailTiket from '../styles/stylesDetailTiket';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from "expo-app-loading";
import { useState } from 'react/cjs/react.production.min';

export default function Pesanan({ route, navigation }) {
    return (

      <View style={stylesBatal.container}>
        <View style ={stylesBatal.titleBatal}>
          <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Daftar Pemesanan</Text>
        </View>
    
        <View style={stylesBatal.marginForm}>
          <View style={stylesDetailTiket.deskTiket}>
            <View style={stylesDetailTiket.infoTujuan}>
              <Text style={stylesDetailTiket.Data1}>
                Merak
              </Text> 
              <Text>
                <MaterialCommunityIcons name="arrow-right" size={24}/>
              </Text>
              <Text style={stylesDetailTiket.Data1}>
                Bakauheni
              </Text>  
              
              </View>
                <View style={stylesDetailTiket.Data2}>
                  <Text style={{marginBottom:10}}>
                    Jadwal Masuk Pelabuhan
                  </Text>
                  <Text style={{marginBottom:10}}>
                    Kamis, 12 Januari 2022
                  </Text>
                  <Text style={{marginBottom:15}}>
                    17:00 WIB
                  </Text>

                  <Text style={{marginBottom:10,fontWeight:'bold'}}>
                    Layanan
                  </Text>

                  <Text style={{marginBottom:10}}>
                    Reguler
                  </Text>

                  <Text style={stylesDetailTiket.garis}>    
                  </Text>        
              </View>
                
              <View style={stylesDetailTiket.dataHarga}>
                <Text style={{marginRight:50}}>
                  Dewasa x 1
                </Text>
                <Text style={{marginLeft:50}}>
                  Rp 65.000,00
                </Text>
              </View>
            </View>
        </View>
      </View>
      
    );
  };