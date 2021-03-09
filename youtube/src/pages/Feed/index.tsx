import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';
import { FeedReponse } from '../../types/FeedReponse';
import { AxiosResponse } from 'axios';
import { Container, Content, VideoContent, AboutContent, DetailText, ContentText, AboutText} from './styles';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<FeedReponse[]>([]);
  const [test, setTest] = useState<FeedReponse>(null);
  useEffect(() => {
    async function loadVideosFeed(){
      const response = await api.get<AxiosResponse<FeedReponse[]>>('/feed');
      console.log(response.data);
      setVideos(response.data);
      setTest(response.data[0]);
      console.log('Teste>', test.video.image_url);
    }

    loadVideosFeed();    
  }, []);

  return (
    <Content>
      <Header />
      <Container>
        <VideoContent>          
          <Image source={{uri: test?.video.image_url}} style={{width: '100%', height: 220}}/>
          <AboutContent>
            <View style={{marginLeft: 10, marginTop: 5}}>
              <Image source={{uri: test?.video.channel.avatar}} style={{width: 40, height: 40, borderRadius: 50}}/>
            </View>
            <ContentText>
              <DetailText>{test?.video.name}</DetailText>
              <AboutText>{`${test?.video.channel.name} • ${test?.video.views} views • ${test?.video.date}`}</AboutText>
            </ContentText>
          </AboutContent>          
        </VideoContent>   
      </Container>
    </Content>
  );
}

export default Feed;