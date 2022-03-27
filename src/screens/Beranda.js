import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesHome from '../styles/stylesHome';
import 'react-native-gesture-handler';


export default function Beranda({ navigation }) {

    const [pelabuhanAwal, setpelabuhanAwal] = useState('');
    const [pelabuhanTujuan, setpelabuhanTujuan] = useState('');
    const [kelasLayanan, setkelasLayanan] = useState('');
    const [tanggalMasuk, settanggalMasuk] = useState('');
    const [jamMasuk, setjamMasuk] = useState('');
    
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setpelabuhanAwal('');
        setpelabuhanTujuan('');
        setkelasLayanan('');
        settanggalMasuk('');
        setjamMasuk('');
      });
      return unsubscribe;
    }, [navigation]);

    const checkTextInput = () => {
      if (!pelabuhanAwal.trim()) {
        alert('Silahkan Masukkan Lokasi Anda');
        return;
      }
      else if (!pelabuhanTujuan.trim()) {
        alert('Silahkan Masukkan Tujuan Anda');
        return;
      }
      else if (!kelasLayanan.trim()) {
        alert('Silahkan Pilih Kelas Layanan');
        return;
      }
      else if (!tanggalMasuk.trim()) {
        alert('Masukkan Tanggal Keberangkatan');
        return;
      }
      else if (!jamMasuk.trim()) {
        alert('Masukkan Jam Keberangkatan');
        return;
      }
      else{
        navigation.navigate("DetailTiket", {
          pelabuhanAwal : pelabuhanAwal,
          pelabuhanTujuan : pelabuhanTujuan,
          kelasLayanan : kelasLayanan,
          tanggalMasuk : tanggalMasuk,
          jamMasuk : jamMasuk,
        });
      }
    };

    return (
        <SafeAreaView style={stylesHome.container}>
          <StatusBar 
                barStyle = "white"
                hidden = {false}
                backgroundColor = "black"
                translucent = {false}
                networkActivityIndicatorVisible = {true}
            />
        <ScrollView> 
            <View style={stylesHome.formPesan}>
              <Text style={stylesHome.title}>Kapalzy</Text>
              
              <Text style={stylesHome.sty_text}>Pelabuhan Awal</Text>
              <View style={stylesHome.sectionStyle}>
                <MaterialCommunityIcons name="ferry" size={26}/>
                  <TextInput style={stylesHome.inputData} 
                  placeholder="Pilih Pelabuhan Awal"
                  value={pelabuhanAwal}
                  onChangeText={ pelabuhanAwal => 
                    setpelabuhanAwal (pelabuhanAwal) }
                  >
                    
                  </TextInput>
              </View>
            
              <Text style={stylesHome.sty_text}>Pelabuhan Tujuan</Text>
              <View style={stylesHome.sectionStyle}>
                <MaterialCommunityIcons name="ferry" size={26}/>
                  <TextInput style={stylesHome.inputData} 
                  placeholder="Pilih Pelabuhan Tujuan"
                  value={pelabuhanTujuan}
                  onChangeText={ pelabuhanTujuan => 
                    setpelabuhanTujuan (pelabuhanTujuan) }
                  >
                    
                  </TextInput>
              </View>

              <Text style={stylesHome.sty_text}>Kelas Layanan</Text>
              <View style={stylesHome.sectionStyle}>
                <MaterialCommunityIcons name="seat-recline-normal" size={26}/>
                  <TextInput style={stylesHome.inputData}
                  placeholder="Pilih Layanan"
                  value={kelasLayanan}
                  onChangeText={ kelasLayanan => 
                    setkelasLayanan (kelasLayanan) }
                  >
                    
                  </TextInput>
              </View>

              <Text style={stylesHome.sty_text}>Tanggal Masuk Pelabuhan</Text>
              <View style={stylesHome.sectionStyle}>
                <MaterialCommunityIcons name="calendar-text" size={26}/>
                  <TextInput style={stylesHome.inputData} 
                  placeholder="Pilih Hari dan Tanggal"
                  value={tanggalMasuk}
                  onChangeText={ tanggalMasuk => 
                    settanggalMasuk (tanggalMasuk) }
                  >
                    
                  </TextInput>
              </View>

              <Text style={stylesHome.sty_text}>Jam Masuk Pelabuhan</Text>
              <View style={stylesHome.sectionStyle}>
                <MaterialCommunityIcons name="clock-time-four" size={26}/>
                  <TextInput style={stylesHome.inputData} 
                  placeholder="Pilih Jam Masuk"
                  value={jamMasuk}
                  onChangeText={ jamMasuk => 
                    setjamMasuk (jamMasuk) }
                  >
                    
                  </TextInput>
              </View>

               
              <View style={{flexDirection: 'row',
                            backgroundColor: '#dcdcdc',
                            borderWidth: 1,
                            borderColor:'#a9a9a9',
                            height: 40,
                            borderRadius: 5,
                            marginTop:18,
                            marginLeft:'5.5%',
                            width:'88.5%',
                            textAlign:'center', 
                            justifyContent:'center',   
                            padding:10,}}>
              
                  <View>
                    <Text style={{fontWeight:'bold', marginRight:80}}>Dewasa  </Text>
                  </View>

                  <View>         
                    <Text style={{fontWeight:'bold', marginLeft:80}}>1 Orang</Text>
                  </View>      
              </View>
                
            <TouchableOpacity style={stylesHome.buttonTiket}
              onPress={() => checkTextInput()}
              >
              <Text style={stylesHome.teksTiket}> 
                <MaterialCommunityIcons name="magnify" size={18}/>    BUAT TIKET
              </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>   
    );
  }