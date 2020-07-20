import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    addNewNoteContainer:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        alignItems:'center'
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
    },
    inputDesc:{
        fontSize: 18,
        color:'#6c6c6c',
        paddingLeft:30,
        paddingRight: 30

    }
})

export default styles;
