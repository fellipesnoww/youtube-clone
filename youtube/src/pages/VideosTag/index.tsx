import React from 'react';
import { View } from 'react-native';
import HeaderPageName from '../../components/HeaderPageName';

import { Content } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';


interface CustomRouteParams {
  title: string;  
}

const VideosTag: React.FC = () => {
  const route = useRoute<RouteProp<any, any>>();
  const params = route.params as CustomRouteParams;  
  return (
    <Content>
      <HeaderPageName pageName={params.title}/>
    </Content>
  );
}

export default VideosTag;