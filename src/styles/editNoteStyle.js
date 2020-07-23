import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    editNoteContainer:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'space-between'
    },
    inputTitle:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 25,
        borderBottomWidth:2,
        borderBottomColor:'#0BABC4',
        color:'#0BABC4',
        padding:0
    },
    inputDesc:{
        padding:0,
        fontSize: 18,
        color:'#6c6c6c',
        paddingLeft:30,
        paddingRight: 30,
    }

})

export default styles;
