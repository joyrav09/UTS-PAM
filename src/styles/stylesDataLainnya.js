import { StyleSheet } from 'react-native'

const stylesDataLainnya = StyleSheet.create({
    container: {
        flex: 1,

      },
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width:'80%',
        height:'55%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      modalText: {
        fontSize:18,
        textAlign: "center",
        fontWeight: "bold"
      },

      iconDetail :{
          flexDirection: 'row',
        
      },

      setIcon1 :{
          borderWidth:1,
          borderColor:'#a9a9a9',
          alignItems: "center",
          justifyContent:'center',
          backgroundColor:'#dcdcdc',
          width: 110,
          height: 90,
          borderRadius: 10,
          marginRight:8,
          marginTop : 10,
          
      },
      setIcon2 :{
        borderWidth:1,
        width: 110,
        height: 90,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor:'#dcdcdc',
        borderColor:'#a9a9a9',
        marginTop : 10,
        marginLeft:8,
    }
})

export default stylesDataLainnya;