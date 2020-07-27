import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    searchView:{
        width:'80%',
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#afafaf',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    input:{
        padding:0,
        fontSize:17,
        color:'#6e6e6e',
        marginLeft:10,
        flex:1
    }
});

export default styles;
