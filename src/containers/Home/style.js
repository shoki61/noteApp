import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;

const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createNoteCont: {
        alignItems: 'center'
    },
    createNoteText: {
        color: '#A7A7A7',
        fontSize: 18
    },
    navigationIconView: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7
    },
    backImg: {
        flex: 1,
        alignSelf: 'stretch',
        width: null
    }

})

export default styles;
