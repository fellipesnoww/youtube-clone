import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';
import { FeedReponse, Channel } from '../../types/FeedReponse';
import { AxiosResponse } from 'axios';
import VideoList from '../../components/VideoList';
import stringChanger from '../../utils/stringChanger';

import { Container, Content, HorizontalContent, SubscribedChannels, ChannelContent, ChannelName, NavigationContent, NavigationButton, NavigationText} from './styles';

interface ChannelCustom{
  channel: Channel;
}

const Subscription: React.FC = () => {
  const [videos, setVideos] = useState<FeedReponse[]>([]);
  const [subscribedChannels, setSubscribedChannels] = useState<Channel[]>([]);

  useEffect(() => {
    async function loadVideosSubscriptions(){
     const videoResponse = await api.get<AxiosResponse<FeedReponse[]>>('/feed');
     const subscriptionsResponse = await api.get<AxiosResponse<ChannelCustom[]>>('/subscription'); 
     setVideos(videoResponse.data);
     setSubscribedChannels(subscriptionsResponse.data);     
    }

    loadVideosSubscriptions();  
  }, []);

  return (
    <Content>
      <Header />
      <HorizontalContent> 
        <SubscribedChannels 
          data={subscribedChannels}        
          showsHorizontalScrollIndicator={false}
          horizontal
          key={data => String(data?.channel.id)}
          renderItem={({ item }) => (
            <>
              <ChannelContent>
                <Image source={{uri: item?.channel.avatar}} style={{width: 60, height: 60, borderRadius: 50}} />
                <ChannelName>{
                  item?.channel.name.length <= 10 ?
                  item?.channel.name : 
                  stringChanger(10, item?.channel.name)
                }
                </ChannelName>
              </ChannelContent>
            </>
          )}
        />
        <NavigationContent>
          <NavigationButton onPress={() => {console.log("asioeaosijeojase")}}>
            <NavigationText>ALL</NavigationText>
          </NavigationButton>
        </NavigationContent> 
      </HorizontalContent>
      <Container>
      </Container>
        <VideoList data={videos}/>           
    </Content>
  );
}

export default Subscription;