import { StyleSheet } from 'react-native'

const stylesInputDataUser = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  }, 
  
  formPesan:{
    width:'95%',
    height:720,
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

  title:{
    fontSize: 30,
    color:'#0000cd',
    textAlign:'center',
    fontWeight : "bold",
    marginTop:-15,
  },

  marginForm:{
      marginLeft:'6%',
      marginTop:'7%',
      height:'58%',
  },

  deskTiket :{
    width:'94%',
    backgroundColor : '#dcdcdc',
    height:'58%',
    borderRadius:6,
    borderWidth:1,
    borderColor:'#a9a9a9',
  },
  infoTujuan :{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      marginBottom:10,
  },
  Data1 : {
      fontSize:18,
      fontWeight:'bold',
      marginLeft:45,
      marginRight:45,
  },
  
  Data2 : {
    marginLeft:'8%',
  },
  garis: {
    width:'94%',
    height:2,
    backgroundColor : '#dcdcdc',
    borderRadius:6,
    borderWidth:1,
    borderColor:'#808080',
    marginBottom:10,
  },

  dataHarga: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    flexDirection: 'row',
    justifyContent:'center',
  },

  buttonTiket : {
    fontWeight : "bold",
    backgroundColor : "#ff8c00",
    padding:12,
    width : "70%",
    borderRadius: 8,
    marginLeft:5,
    marginRight:5,
    marginTop:20,
  },

  teksTiket : {
    textAlign:'center',
    fontSize :16,
    fontWeight : "bold",
    color:'white'
  },

  sectionStyle: {
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    marginLeft:'6%',
    padding: 10,
    marginTop:5,
    width:'88%',
    borderWidth:1,
    borderColor:'#a9a9a9',
    backgroundColor: '#dcdcdc',
  },

})

export default stylesInputDataUser;