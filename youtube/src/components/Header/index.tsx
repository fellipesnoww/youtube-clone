import React from 'react';
import { StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, IconsContent } from './styles';

import logoHeader from '../../assets/yt_logo_dark.png';
import avatar from '../../assets/avatar.png';

const Header: React.FC = () => {
  return (
    <Container>
        <Image source={logoHeader}/>
        <IconsContent>
          <Icon name="cast" size={30} color="#FFF" style={{marginRight: 30}}/>
          <Icon name="notifications" solid size={30} color="#FFF" style={{marginRight: 15}}/>
          <Icon name="search" size={30} color="#FFF" style={{marginRight: 30}}/>
          <Image source={avatar} style={{width: 30, height: 30, borderRadius: 50}}/>
        </IconsContent>
    </Container>
  );
}

export default Header;