import React from "react";
import { Text, View, TouchableOpacity, Button, SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesDetailTiket from '../styles/stylesDetailTiket';
import stylesHome from '../styles/stylesHome';

export default function DetailTiket({ route, navigation }) {
    return (
        <SafeAreaView style={stylesDetailTiket.container}>
         <ScrollView>  
           
              <View style={stylesHome.formPesan}>
                <Text style={stylesDetailTiket.title}>Kapalzy</Text>
                  <View style={stylesDetailTiket.marginForm}>
                    <Text>Kuota Tersedia (10000)</Text>
                    <Text style={{marginTop:'7%',marginBottom:'6%'}}>Rincian Tiket</Text>
                      <View style={stylesDetailTiket.deskTiket}>
                        <View style={stylesDetailTiket.infoTujuan}>
                          <Text style={stylesDetailTiket.Data1}>
                            {route.params.pelabuhanAwal}
                          </Text> 
                          <Text>
                            <MaterialCommunityIcons name="arrow-right" size={24}/>
                          </Text>
                          <Text style={stylesDetailTiket.Data1}>
                            {route.params.pelabuhanTujuan}
                          </Text>  
                        </View>
                        
                        <View style={stylesDetailTiket.Data2}>
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

                      <View style={stylesDetailTiket.dataHarga}>
                        <Text style={{marginTop:10,marginRight:'45%', fontWeight:'bold', fontSize:20}}>
                            Total
                        </Text>
                        <Text style={{marginTop:10, marginRight:'5%', fontWeight:'bold', fontSize:20}}>
                          Rp 65.000
                        </Text>
                      </View>
                  </View>
                {/* <View style={stylesInputDataUser.button}>
                  <Button title="Kembali" onPress={() => navigation.goBack()} />
                  <Button title="Selanjutnya" onPress={() => navigation.navigate('Home')} />    
                </View> */}

                  <View View style={stylesDetailTiket.button}>
                      <TouchableOpacity style={stylesDetailTiket.buttonTiket1}
                        onPress={() => navigation.goBack()} 
                      >
                        <Text style={stylesDetailTiket.teksTiket2}> 
                        Kembali
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style={stylesDetailTiket.buttonTiket2}
                        // onPress={() => navigation.navigate('Home')}
                        onPress={() => {
                          navigation.navigate("InputDataUser", {
                            pelabuhanAwal : route.params.pelabuhanAwal,
                            pelabuhanTujuan : route.params.pelabuhanTujuan,
                            kelasLayanan : route.params.kelasLayanan,
                            tanggalMasuk : route.params.tanggalMasuk,
                            jamMasuk : route.params.jamMasuk,
                          });
                        }}
                      >
                        <Text style={stylesDetailTiket.teksTiket1}> 
                        Selanjutnya
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>     
          </ScrollView>
        </SafeAreaView>   
      
    );
  }