import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Content, Container, OptionsContainer, OptionItem, OptionDescription } from './styles';
import Header from '../../components/Header';

const Library: React.FC = () => {
  return (
    <Content>
      <Header />
      <Container>
        <OptionsContainer>
          <OptionItem>
            <Icon name="history" size={30} color="#FFF"/>
            <OptionDescription>History</OptionDescription>
          </OptionItem>
          <OptionItem>
            <Icon name="slideshow" size={30} color="#FFF"/>
            <OptionDescription>Your videos</OptionDescription>
          </OptionItem>
          <OptionItem>
            <Icon name="theaters" size={30} color="#FFF"/>
            <OptionDescription>Your movies</OptionDescription>
          </OptionItem>
          <OptionItem>
            <Icon name="schedule" size={30} color="#FFF"/>
            <OptionDescription>Watch later</OptionDescription>
          </OptionItem>
        </OptionsContainer>
      </Container>           
  </Content>
  );
}

export default Library;