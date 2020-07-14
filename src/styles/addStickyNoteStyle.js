import {Dimensions, StyleSheet} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    addStickyNoteCont:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    addStickyNote:{
        width:275,
        height:325,
        backgroundColor:'#FFF6B6',
        elevation:3,
        padding:15
    },
    addStickyNoteInput:{
        flex:1,
        textAlignVertical:'top',
        fontSize:20,
        color:'#7C7C7C'
    }

})
export default styles;
