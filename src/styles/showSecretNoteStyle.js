import { StyleSheet, Dimensions } from 'react-native';

const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    date:{
        fontSize:13,
        color:'grey',
        textAlign:'center',
        marginTop: 7
    },
    title:{
        color:'#5e5e5e',
        fontWeight:'bold',
        fontSize:18,
        padding:10,
        paddingBottom:10,
        marginTop:5,
    },
    desc:{
        fontSize: 16,
        color:'#5a5a5a',
        padding:10,
        paddingTop:0,
        flex:1
    },
    bottomButtonsCont:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:20,
        marginTop:20
    },
    bottomButton:{
        width: 55,
        height:55,
        borderRadius:100,
        elevation:3,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center'
    }

});

export default styles;
