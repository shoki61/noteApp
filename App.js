import * as React from 'react';
import { StatusBar } from 'react-native';


import Navigation from './src/Navigation/navigation';

class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <Navigation/>
            </>
        )
    }
}

export default App;
