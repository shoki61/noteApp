import {Dimensions, StyleSheet} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const buttons = StyleSheet.create({
    addButton:{
        width:65,
        height:65,
        borderRadius:300,
        backgroundColor:'#0EBEDA',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:3
    },
    notesButton:{
        width: w/1-150,
        height: h/13,
        backgroundColor: '#0EBEDA',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 100,
        elevation: 3
    },
    addButtonAbsolute:{
        position:'absolute',
        bottom:30,
        right:30,
    },
    buttonText:{
        fontSize:20,
        color:'#fff'
    },
    saveButton:{
        width:w-200,
        height:45,
        backgroundColor:'#0EBEDA',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        marginBottom:25,
        elevation:3
    },
    saveButtonText:{
        fontSize:18,
        color:'#fff'
    }
})
export default buttons;
