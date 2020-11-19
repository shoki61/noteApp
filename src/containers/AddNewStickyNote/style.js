import {Dimensions, StyleSheet} from 'react-native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const styles = StyleSheet.create({
    addStickyNoteCont:{
        flex:1,
        backgroundColor: '#fff'
    },
    addStickyNote:{
        width:250,
        height:300,
        backgroundColor:'#fff299',
        elevation:3,
        padding:15,
        margin:60
    },
    addStickyNoteInput:{
        flex:1,
        textAlignVertical:'top',
        fontSize:19,
        color:'#7C7C7C'
    },
    maxLengthText:{
        fontSize: 15,
        color:'#9a9a9a',
        textAlign:'right',
        paddingRight:15
    }

})
export default styles;
