import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'
import { Container, ContentBack, Title, IconsOptions, ButtonBack } from './styles';

interface CustomProps{
    pageName: string;
}

const HeaderPageName: React.FC<CustomProps> = ({children, ...props}) => {
  const navigation = useNavigation();

  return (
    <Container>              
      <ContentBack>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#FFF" style={{marginRight: 15}}/>
        </ButtonBack>
        <Title>{props.pageName}</Title>          
      </ContentBack>
      <IconsOptions>
        <Icon name="cast" size={30} color="#FFF" style={{marginRight: 20}}/>
        <Icon name="search" solid size={30} color="#FFF" style={{marginRight: 20}}/>
        <Icon name="more-vert" size={30} color="#FFF"/>
      </IconsOptions>
    </Container>
  );
}

export default HeaderPageName;