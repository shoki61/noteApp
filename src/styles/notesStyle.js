import {Dimensions, StyleSheet} from 'react-native';
import controlData from '../controllers/controlData';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    notesContainer:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        paddingTop:10
    },

    settingCont:{
        width:w-75,
        height:35,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:7,
        flexDirection:'row'
    },

    searchView:{
        width:w-75,
        height:45,
        borderRadius:100,
        backgroundColor:'#f7f7f7',
        marginBottom: 15,
        alignItems:'center',
        paddingRight:10,
        paddingLeft:10,
        flexDirection: 'row'
    },
    searchInput:{
        flex:1,
        marginLeft:5,
        textAlignVertical:'center',
        fontSize:18,
        padding:0,
        color:'#707070',

    },
    noteContainer:{
        width: '100%',
        height:80,
        marginTop:7,
        marginBottom:5,
        borderRadius:5,
        backgroundColor:'#fff',
        elevation:3,
        flexDirection:'row',
    },
    Title_Desc_View:{
        width: '70%',
        height:'100%',
        paddingTop:15

    },
    noteTitle:{
        fontSize:20,
        color:'#0BABC4',
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10
    },
    noteDesc:{
        color:'#848484',
        paddingLeft:10,
        paddingRight:10,
        fontSize: 13,
        marginTop:5
    },
    Date_Time_View:{
        alignItems: 'center',
        flex:1,
        paddingTop:15
    },
    noteDate:{
        color:'#6d6d6d',
        fontSize:15,
        paddingRight:10
    },
    noteTime:{
        fontSize:12,
        color:'#868686'
    }

})

export default styles;
