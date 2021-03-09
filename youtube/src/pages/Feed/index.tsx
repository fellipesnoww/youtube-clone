import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import Header from '../../components/Header';

import { Container, Content } from './styles';
import api from '../../services/api';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function loadVideosFeed(){
      const response = await api.get('/feed');
      console.log(response.data);
      setVideos(response.data);
    }

    loadVideosFeed();
  }, [])

  return (
    <Content>
      <Header />
      <Container>   
      </Container>
    </Content>
  );
}

export default Feed;