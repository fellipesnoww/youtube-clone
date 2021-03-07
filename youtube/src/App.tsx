import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './routes'
// import { Container } from './styles';

const App: React.FC = () => {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#312E38"/>        
        <Routes/>
      </>
    )
}

export default App;