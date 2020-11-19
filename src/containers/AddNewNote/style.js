import {Dimensions, StyleSheet} from 'react-native';

const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    addNewNoteContainer:{
        backgroundColor:'#fff',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputTitle:{
        color:'#5e5e5e',
        fontWeight:'bold',
        fontSize:18,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 25,
        padding:0,
        paddingBottom:5
    },
    inputDesc:{
        fontSize: 18,
        color:'#6c6c6c',
        padding:0,
        textAlignVertical:'top',
        marginRight: 20,
        marginLeft: 20,


    }
})

export default styles;
