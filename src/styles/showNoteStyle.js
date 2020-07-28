import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({

    backButton:{
        backgroundColor:'#fff',
        borderRadius: 100,
        elevation: 3,
        padding:5
    },

    showNoteCont:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    },
    closeButtonView:{
        alignItems:'flex-end',
        paddingRight:20,
        marginTop:10
    },
    noteContainer:{
        width:w,
        flex:1,
        marginTop: 20,
        justifyContent:'space-between',
    },
    noteTitle:{
        marginBottom:10,
        borderBottomColor:'#0BABC4',
        borderBottomWidth:2,
        marginLeft:20,
        marginRight:20,
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        color:'#0BABC4'
    },
    noteDesc:{
        fontSize: 18,
        color:'#6c6c6c',
        flex:1,
        paddingLeft:30,
        paddingRight: 30,
    },
    noteDate:{
        fontSize:18,
        color:'#868686',
        textAlign: 'right',
        paddingRight:50,
        marginTop:5
    },
    footerButtonCont:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop:15,
        marginBottom: 15
    },
    footerButton:{
        alignItems: 'center',
        width: 55,
        justifyContent:'center',
        borderRadius:100,
        height: 55,
        backgroundColor: '#fff',
        elevation:3
    }
})

export default styles;
