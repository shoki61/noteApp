import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    stickyNoteContainer:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:10,
        alignItems:'center'

    },
    stickyNoteView:{
        width: 180,
        margin:5,
        marginTop:15,
        height:225,
        backgroundColor:'#fff299',
        elevation:3,
    },
    desc:{
        fontSize:16,
        paddingTop:15,
        paddingRight:10,
        paddingLeft:10,
        color:'#7C7C7C',
        height: '83%'
    },
    date:{
        flex:1,
        textAlign:'right',
        paddingRight: 15,
        textAlignVertical:'center',
        color:'#898989',
        fontSize: 15
    }

})

export default styles;
