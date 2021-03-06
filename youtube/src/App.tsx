import React from 'react';
import { View, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#312E38"/>
        <View style={{flex: 1, backgroundColor: "#312E38"}}></View>
      </>
    )
}

export default App;