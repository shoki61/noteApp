import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';



class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor='#3DABFF' />
          <Text>App</Text>
        </View>
    )
  }
}


export default App;
