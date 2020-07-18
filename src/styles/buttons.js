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
    selectButton:{
        width:40,
        backgroundColor:'#eaeaea',
        height:40,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
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
    },
    headerBackButton:{
        width:50,
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    settingButton:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor: '#ffd500',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        padding:0
    }
})
export default buttons;
