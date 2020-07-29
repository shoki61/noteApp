import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    headerBar:{
        width:'85%',
        marginBottom:10,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    searchView:{
        width:'100%',
        height:45,
        borderRadius:100,
        backgroundColor:'#f7f7f7',
        alignItems:'center',
        paddingRight:10,
        paddingLeft:10,
        flexDirection: 'row'
    },
    input:{
        flex:1,
        marginLeft:5,
        textAlignVertical:'center',
        fontSize:18,
        padding:0,
        color:'#707070',
    },
    secretNotesCont:{
        width:w,
        minHeight:h/1.5,
    },
    secretNoteCont:{
        width:w/2-20,
        height:205,
        borderRadius: 7,
        margin:7,
        elevation:4,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    secretNoteTitle:{
        height:40,
        fontWeight: 'bold',
        textAlign:'center',
        textAlignVertical: 'center',
        color:'#fff',
        fontSize:17,
        backgroundColor:'#fc5db0',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        paddingLeft: 5,
        paddingRight: 5

    },
    content:{
        color:'#868686',
        fontSize: 14,
        fontWeight:'bold',
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5
    },
    dateText:{
        color:'#7b7b7b',
        fontWeight:'bold',
        fontSize:12,
        paddingTop: 5,
        paddingBottom:5,
        paddingRight:10,
        textAlign: 'right'
    },
    selectView:{
        width:w/2-20,
        height:205,
        borderRadius: 7,
        zIndex:100,
        backgroundColor: 'rgba(177,177,177,0.42)',
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
});

export default styles;
