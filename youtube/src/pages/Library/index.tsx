import React, {useEffect, useState} from 'react';
import { AxiosResponse } from 'axios';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Content, Container, OptionsContainer, OptionItem, OptionDescription, WatchedVideos, VideoName, VideoContent, PlaylistContainer, TitleContent, Title, NewItem, Description, Playlists, PlaylistContent, Name, InfoContent, Quantity, InfoContentFirstItem, WatchedContent } from './styles';
import Header from '../../components/Header';
import Playlist from '../../types/PlaylistResponse';
import {FeedReponse} from '../../types/FeedReponse';
import stringChanger from '../../utils/stringChanger';

import api from '../../services/api';

const Library: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [watchedVideos, setWatchedVideos] = useState<FeedReponse[]>([])
  const [firstItem, setFirstItem] = useState<Playlist>(null);

  useEffect(() => {
    async function loadPlaylists(){
      const response = await api.get<AxiosResponse<Playlist[]>>('/playlists');
      const watchedResponse = await api.get<AxiosResponse<Playlist[]>>('/feed');

      setFirstItem(response.data[0]);
      const filteredItems = response.data.filter(x => { return x.id !== 1});      
      setPlaylists(filteredItems);
      setWatchedVideos(watchedResponse.data);
      console.log(watchedResponse.data);
    }

    loadPlaylists();
  }, []);

  return (
    <Content>
      <Header />
      <Container>
        <WatchedContent>
          <Title>Recent</Title>
          <WatchedVideos 
          data={watchedVideos}        
          showsHorizontalScrollIndicator={false}
          horizontal
          key={data => String(data?.video.id)}
          renderItem={({ item }) => (
            <>
              <VideoContent>
                <Image source={{uri: item?.video.image_url}} style={{width: 150, height: 90}} />
                <VideoName>{
                  item?.video.name.length <= 22 ?
                  item?.video.name : 
                  stringChanger(19, item?.video.name)
                }
                </VideoName>
              <VideoName>{item?.video.channel.name}</VideoName>
              </VideoContent>
            </>
          )}
        />
        </WatchedContent>
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
        <TitleContent>
          <Title>Playlist</Title>
        </TitleContent>
        <PlaylistContainer>
          <NewItem>
            <Icon name="add" size={30} color="#0066ff"/>
            <Description>New Playlist</Description>
          </NewItem>
          <PlaylistContent>                
            <Icon name="thumb-up-off-alt" size={30} color="#FFF" style={{marginLeft: 5}}/>                
            <InfoContentFirstItem>
              <Name>{firstItem?.name}</Name>
              <Quantity>{firstItem?.quantity}</Quantity>
            </InfoContentFirstItem>
          </PlaylistContent>
          <Playlists 
          data={playlists}        
          showsVerticalScrollIndicator={false}          
          key={data => String(data.id)}
          renderItem={({ item }) => (
            <>
              <PlaylistContent>
                <Image source={{uri: item?.image_url}} style={{width: 40, height: 40}} />                 
                <InfoContent>
                  <Name>{item?.name}</Name>
                  <Quantity>{item?.quantity}</Quantity>
                </InfoContent>
              </PlaylistContent>
            </>
          )}
        />
        </PlaylistContainer>
      </Container>           
  </Content>
  );
}

export default Library;