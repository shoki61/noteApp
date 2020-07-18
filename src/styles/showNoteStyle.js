import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({

    showNoteCont:{
        flex:1,
        backgroundColor:'#fff'
    },
    closeButtonView:{
        alignItems:'flex-end',
        paddingRight:20,
        marginTop:10
    },
    noteContainer:{
        width:w,
        height:h-175,
        marginTop: 10,
        justifyContent:'space-between',
        marginBottom: 5
    },
    noteTitle:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginRight: 20,
        marginLeft: 20,
        borderBottomWidth:2,
        borderBottomColor:'#0BABC4',
        color:'#0BABC4',
        paddingBottom:10
    },
    noteDesc:{
        fontSize: 18,
        color:'#6c6c6c',
        paddingLeft:30,
        paddingRight: 30,
        marginTop:15,
        flex:1,

    },
    noteDate:{
        fontSize:18,
        color:'#7f7f7f',
        textAlign: 'right',
        paddingRight:50,
        marginBottom:20,
    },
    footerButtonCont:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    footerButton:{
        alignItems: 'center',
        width: 70,
        justifyContent:'center',
        borderRadius:100,
        height: 70,
        backgroundColor: '#fff',
        elevation:3
    },
    footerButtonText:{
        color:'#0BABC4'
    }
})

export default styles;
