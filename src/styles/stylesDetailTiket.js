import { StyleSheet } from 'react-native'

const stylesDetailTiket = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },  

  title:{
    fontSize: 30,
    color:'#0000cd',
    textAlign:'center',
    fontWeight : "bold",
    marginTop:-10,
  },

  marginForm:{
      marginLeft:'6%',
      marginTop:'7%',
      height:'65%',
  },
  
  deskTiket :{
    width:'94%',
    height:'65%',
    backgroundColor : '#dcdcdc',
    borderRadius:6,
    borderWidth:1,
    borderColor:'#a9a9a9',
  },
  infoTujuan :{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      marginBottom:20,
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

  buttonTiket1 : {
    fontWeight : "bold",
    backgroundColor : "white",
    padding:12,
    width : "40%",
    borderWidth:1,
    borderColor:'#0000cd',
    borderRadius: 8,
    marginLeft:5,
    marginRight:5,
  },
  
  buttonTiket2 : {
    fontWeight : "bold",
    backgroundColor : "#0000cd",
    padding:12,
    width : "40%",
    borderRadius: 8,
    marginLeft:5,
    marginRight:5,
  },

  teksTiket1 : {
    textAlign:'center',
    fontSize :16,
    fontWeight : "bold",
    color:'white'
  },

  teksTiket2 : {
    textAlign:'center',
    fontSize :16,
    fontWeight : "bold",
    color:'#0000cd',
  },

})

export default stylesDetailTiket;