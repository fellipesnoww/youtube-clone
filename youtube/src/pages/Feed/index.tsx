import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';
import { FeedReponse } from '../../types/FeedReponse';
import { AxiosResponse } from 'axios';
import { Container, Content} from './styles';
import VideoList from '../../components/VideoList';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<FeedReponse[]>([]);

  useEffect(() => {
    async function loadVideosFeed(){
      const response = await api.get<AxiosResponse<FeedReponse[]>>('/feed');
      console.log(response.data);
      setVideos(response.data);      
    }

    loadVideosFeed();    
  }, []);

  return (
    <Content>
      <Header />
      <Container>
      </Container>
        <VideoList data={videos}/>           
    </Content>
  );
}

export default Feed;