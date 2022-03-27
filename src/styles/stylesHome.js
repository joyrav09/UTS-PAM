import { StyleSheet } from 'react-native'

const stylesHome = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },  
  
  formPesan:{
      width:'95%',
      height:640,
      marginLeft:'2.5%',
      backgroundColor : 'white',
      justifyContent:'center',
      borderRadius:10,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    sty_text:{
      fontSize: 14,
      color:'black',
      marginLeft:'5%',
      marginBottom:7,
      marginTop:10,
    },

    title:{
      fontSize: 30,
      color:'#0000cd',
      textAlign:'center',
      fontWeight : "bold",
      marginTop:10,
    },

    buttonTiket : {
      borderColor: 'white',
      color : "white",
      fontWeight : "bold",
      backgroundColor : "#ff8c00",
      padding:10,
      width : "50%",
      borderRadius: 10,
      marginLeft:'25%',
      marginTop:22,
      marginBottom:25,
    },

    teksTiket : {
      textAlign:'center',
      fontSize :14,
      fontWeight : "bold",
    },

    inputData : {
      backgroundColor: '#dcdcdc',
      borderColor:'#a9a9a9',
      borderWidth: 1,
      height: 40,
      borderRadius: 5,
      marginLeft:'3%',
      padding:8,
      width:'83%',
    },

    sectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: '#000',
      height: 45,
      borderRadius: 5,
      marginLeft:'5%',
    },

  })

  export default stylesHome;