import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    stickyNoteContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        alignItems: 'center'
    },
    stickyNoteView: {
        width: 180,
        margin: 5,
        height: 225,
        zIndex: -150,
        borderRadius: 15,
        backgroundColor: '#ff9d5b',
        elevation: 3,
    },
    editView: {
        width: 180,
        position: 'absolute',
        height: 225,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    desc: {
        fontSize: 16,
        paddingTop: 15,
        paddingRight: 10,
        paddingLeft: 10,
        color: '#fff',
        height: '83%',
    },
    date: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 15,
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 15
    }

})

export default styles;
