import { StyleSheet, Dimensions } from 'react-native';
 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#fff'
     },
     title:{
         color:'#5e5e5e',
         fontWeight:'bold',
         fontSize:18,
         padding:10,
         marginTop:15,
         paddingLeft:20,
         paddingBottom:5,
     },
     desc:{
         fontSize: 16,
         color:'#5a5a5a',
         padding:10,
         paddingTop:0,
         minHeight:150,
         paddingLeft: 20,
         textAlignVertical:'top'
     }
 });

 export default styles;
