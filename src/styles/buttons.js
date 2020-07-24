import {Dimensions, StyleSheet} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const buttons = StyleSheet.create({
    addNewNoteText:{
        fontSize:16,
        color:'#797979'
    },
    closeInputButton:{
        width:35,height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    addButton:{
        width:65,
        height:65,
        borderRadius:300,
        backgroundColor:'#5373bd',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:3
    },
    notesSubButton:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    deleteButtonText:{
        fontSize:16,
        color:'#f1f1f1'
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
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 100,
        elevation: 3,
    },
    addButtonAbsolute:{
        position:'absolute',
        bottom:30,
        right:30,
        width:65,
        height:65,
        borderRadius:300,
        backgroundColor:'#5373bd',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:3
    },
    buttonText:{
        fontSize:20,
        color:'#fff'
    },
    saveButton:{
        width:w-200,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        marginBottom:25,
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
        width:70,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },

    stickyNoteEdit:{
        backgroundColor:'#fff',
        elevation:3,
        width:37,
        height:37,
        margin:10,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    deleteAllSticky:{
        height:'85%',
        borderRadius:7,
        backgroundColor:'#fff',
        elevation:3,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    deleteAllNoteText:{
        color:'#ff4d4d',
        fontWeight:'700'
    }

})
export default buttons;
