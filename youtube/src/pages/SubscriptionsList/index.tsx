import React, {useEffect, useState} from 'react';
import { Image } from 'react-native';
import HeaderPageName from '../../components/HeaderPageName';
import { Container, SubscribedChannels, ChannelContent, ChannelName} from './styles';
import { Channel } from '../../types/FeedReponse';
import { RouteProp, useRoute } from '@react-navigation/native';

interface ChannelCustom{
  channel: Channel;
}

interface CustomRouteParams {
  subscribedChannels: Array<ChannelCustom>;  
}

const SubscriptionsList: React.FC = () => {
  const route = useRoute<RouteProp<any, any>>();
  const channels = route.params as CustomRouteParams;
  console.log(channels);
  return (
    <Container>
      <HeaderPageName pageName="Channel list"/>
      <SubscribedChannels 
          data={channels.subscribedChannels}        
          showsVerticalScrollIndicator={false}          
          key={data => String(data.channel.id)}
          renderItem={({ item }) => (
            <>
              <ChannelContent>
                <Image source={{uri: item?.channel.avatar}} style={{width: 60, height: 60, borderRadius: 50}} />
                <ChannelName>{item?.channel.name}</ChannelName>                
              </ChannelContent>
            </>
          )}
        />
    </Container>
  )
}

export default SubscriptionsList;