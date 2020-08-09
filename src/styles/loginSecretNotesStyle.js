import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
   loginContainer:{
       flex:1,
       alignItems:'center',
       backgroundColor:'#fff',
   },
   informationMessage:{
       width:'90%',
       padding:15,
       fontSize:16,
       textAlign:'center',
       backgroundColor: '#def6fd',
       color:'#4a88aa',
       borderWidth: 1,
       borderColor:'#c3f7ff',
       marginTop:40,
       borderRadius:7
   },
    inputView:{
       flexDirection:'row',
       alignItems: 'center',
       borderRadius: 10,
       borderWidth:1.5,
       borderColor:'#fc5db0',
       width: '65%',
       height: 40,
       marginTop:20
    },
    iconView:{
       height:'100%',
       width:'17%',
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#fc5db0',
       borderTopLeftRadius:8,
       borderBottomLeftRadius:8

    },
    input:{
        flex:1,
        marginRight:5,
        padding:0,
        fontSize: 17,
        paddingLeft:10,
        color:'#797979'
    },
    warningText:{
        width:'65%',
        padding:3,
        fontSize:16,
        textAlign:'center',
        backgroundColor: '#ffcaca',
        color:'#ba4545',
        borderWidth: 1,
        borderColor:'#ffc3c3',
        marginTop:5,
        borderRadius:7
    }
});

export default styles;
