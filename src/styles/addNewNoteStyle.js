import {Dimensions, StyleSheet} from 'react-native';

const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    addNewNoteContainer:{
        minHeight:h/2+100,
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
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'#1bb7e2',
        color:'#1bb7e2',
        padding:0,
        paddingBottom:5
    },
    inputDesc:{
        fontSize: 18,
        color:'#6c6c6c',
        padding:0,
        textAlignVertical:'top',
        minHeight: 250,
        marginRight: 20,
        marginLeft: 20,


    }
})

export default styles;
