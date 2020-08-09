import {Dimensions, StyleSheet} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const buttons = StyleSheet.create({
    addNewNoteText:{
        fontSize:16,
    },
    closeInputButton:{
        width:35,
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    addButton:{
        width:50,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:3
    },
    navButton:{
        width:'70%',
        flexDirection:'row',
        height:45,
        margin:7,
        borderWidth:1.5,
        alignItems:'center',
        borderRadius:10
    },
    deleteButtonText:{
        fontSize:16,
        color:'#f1f1f1'
    },
    selectButton:{
        paddingHorizontal:7,
        backgroundColor:'#fff',
        height:35,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        elevation:3
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
        width:55,
        height:55,
        borderRadius:15,
        backgroundColor:'#5373bd',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:3
    },
    buttonText:{
        fontSize:20,
        color:'#2980b9',
        marginLeft:15
    },
    saveButton:{
        width:0,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        position:'absolute',
        bottom:0
    },
    saveButtonText:{
        fontSize:18,
        color:'#fff',
        marginLeft: 5
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
    },
    loginButton:{
        width:'100%',
        height:50,
        backgroundColor:'#48aaff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:0
    },
    loginButtonText:{
        color:'#ffffff',
        fontSize:18,
        marginLeft:3
    },
    hintButton:{
        position: 'absolute',
        top:20,
        right:20,
        flexDirection:'row',
        alignItems:'center'
    },
    selectButtonText:{
        fontSize:15,
        color:'#fc5db0'
    },
    deleteAllNote:{
        height:35,
        padding:10,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:3
    }

})
export default buttons;
