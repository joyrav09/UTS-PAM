import React from 'react';
import { Text, View, Modal, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesDataLainnya from '../styles/stylesDataLainnya';

export default function DataLainnya({ navigation }) {
    return (
      <View>
        <Modal isVisible={true}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:'90%', marginTop:10}}>
                <MaterialCommunityIcons name="window-close" size={26}/>
            </TouchableOpacity>

          <View style={stylesDataLainnya.centeredView}>
                <View style={stylesDataLainnya.modalView}>
                    <Text style={stylesDataLainnya.modalText}>Menu</Text>

                    <View style={stylesDataLainnya.iconDetail}>
                      <View style={stylesDataLainnya.setIcon1}>
                        <MaterialCommunityIcons name="magnify" color='blue' size={60}/>
                        <Text style={{fontSize:11}}>Cari Pemesanan</Text>
                      </View>
                      <View style={stylesDataLainnya.setIcon2}>
                        <MaterialCommunityIcons name="account" color='blue' size={60}/>
                        <Text style={{fontSize:11}}>Detail Profil</Text>
                      </View>
                    </View>

                    <View style={stylesDataLainnya.iconDetail}>
                      <View style={stylesDataLainnya.setIcon1}>
                        <MaterialCommunityIcons name="phone" color='blue' size={60}/>
                        <Text style={{fontSize:11}}>Cari Pemesanan</Text>
                      </View>
                      <View style={stylesDataLainnya.setIcon2}>
                        <MaterialCommunityIcons name="clipboard-text" color='blue' size={60}/>
                        <Text style={{fontSize:11}}>Histori Pemesanan</Text>                     
                      </View>
                    </View>
                </View>
          </View>
        </Modal>
      </View>
    );
  };