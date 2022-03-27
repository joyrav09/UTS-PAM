import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button, TextInput, SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesInputDataUser from '../styles/stylesInputDataUser';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from "expo-app-loading";

export default function InputDataUser({ route, navigation }) {

    const [namaUser, setnamaUser] = useState('');
    const [identitasUser, setidentitasUser] = useState('');
    const [umurUser, setumurUser] = useState('');

    const checkTextInput = () => {
      if (!namaUser.trim()) {
        alert('Silahkan Masukkan Nama Anda');
        return;
      }
      else if (!identitasUser.trim()) {
        alert('Silahkan Masukkan Identitas Anda');
        return;
      }
      else if (!umurUser.trim()) {
        alert('Silahkan Masukkan Umur Anda');
        return;
      }
      else{
        alert('Sukses Tambah Data')
        // navigation.navigate("Pesanan", {
        //   pelabuhanAwal : route.params.pelabuhanAwal,
        //   pelabuhanTujuan : route.params.pelabuhanTujuan,
        //   kelasLayanan : route.params.kelasLayanan,
        //   tanggalMasuk : route.params.tanggalMasuk,
        //   jamMasuk : route.params.jamMasuk,
        //   namaUser : namaUser,
        //   identitasUser : identitasUser,
        //   umurUser : umurUser
        // });
      }
    };

    return (
        <SafeAreaView style={stylesInputDataUser.container}>
         <ScrollView>  
              <View style={stylesInputDataUser.formPesan}>
                <Text style={stylesInputDataUser.title}>Kapalzy</Text>
                  <View style={stylesInputDataUser.marginForm}>
                    <Text style={{marginBottom:'6%', fontWeight: 'bold'}}>Informasi Pemesanan</Text>
                      <View style={stylesInputDataUser.deskTiket}>
                        <View style={stylesInputDataUser.infoTujuan}>
                          <Text style={stylesInputDataUser.Data1}>
                            {route.params.pelabuhanAwal}
                          </Text> 
                          <Text>
                            <MaterialCommunityIcons name="arrow-right" size={24}/>
                          </Text>
                          <Text style={stylesInputDataUser.Data1}>
                            {route.params.pelabuhanTujuan}
                          </Text>  
                        </View>
                        
                        <View style={stylesInputDataUser.Data2}>
                          <Text style={{marginBottom:10}}>
                              Jadwal Masuk Pelabuhan
                          </Text>
                          <Text style={{marginBottom:10}}>
                             {route.params.tanggalMasuk}
                          </Text>
                          <Text style={{marginBottom:15}}>
                             {route.params.jamMasuk} WIB
                          </Text>

                          <Text style={{marginBottom:10,fontWeight:'bold'}}>
                             Layanan
                          </Text>

                          <Text style={{marginBottom:10}}>
                             {route.params.kelasLayanan}
                          </Text>

                          <Text style={stylesInputDataUser.garis}>       
                          </Text>   
                        </View>
                        
                        <View style={stylesInputDataUser.dataHarga}>
                          <Text style={{marginRight:50}}>
                            Dewasa x 1
                          </Text>
                          <Text style={{marginLeft:50}}>
                            Rp 65.000,00
                          </Text>
                        </View>
                      </View>
                  </View>

                  <View style={{marginTop:-110}}>
                    <Text style={{marginLeft:'6%', fontWeight:'bold'}}>
                      Data Pemesan
                    </Text>
                
                    <Text style={{marginLeft:'6%', marginTop:7}}>Nama Lengkap</Text>
                    <View style={stylesInputDataUser.sectionStyle}>
                        <TextInput
                        placeholder="Joy Ravelo"
                        value={namaUser}
                        onChangeText={ namaUser => 
                          setnamaUser (namaUser) }>
                          
                        </TextInput>
                    </View>

                    <Text style={{marginLeft:'6%', marginTop:7}}>Identitas</Text>
                    <View style={stylesInputDataUser.sectionStyle}>
                        <TextInput
                        placeholder="Laki-laki"
                        value={identitasUser}
                        onChangeText={ identitasUser => 
                          setidentitasUser (identitasUser) }>
                          
                        </TextInput>
                    </View>       

                     <Text style={{marginLeft:'6%', marginTop:7}}>Umur</Text>
                    <View style={stylesInputDataUser.sectionStyle}>
                        <TextInput 
                        placeholder="15 Tahun"
                        value={umurUser}
                        onChangeText={ umurUser => 
                          setumurUser (umurUser) }>
                          
                        </TextInput>
                    </View>             
                  </View>

                  
                  
                  <View View style={stylesInputDataUser.button}>               
                      <TouchableOpacity style={stylesInputDataUser.buttonTiket}
                       onPress={() => checkTextInput()}
                       >
                        <Text style={stylesInputDataUser.teksTiket}> 
                        Submit
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>     
          </ScrollView>
        </SafeAreaView>   
      
    );
  }