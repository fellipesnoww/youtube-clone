import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { FeedReponse } from '../../types/FeedReponse';
import { AxiosResponse } from 'axios';
import VideoList from '../../components/VideoList';
import { Content, TagContent, TagsRigth, TagsLeft, Tag, Title, VideosContent, TitleHeader } from './styles';

const Explore: React.FC = () => {
  const [videos, setVideos] = useState<FeedReponse[]>([]);

  useEffect(() => {
    async function loadVideosFeed(){
      const response = await api.get<AxiosResponse<FeedReponse[]>>('/feed');

      setVideos(response.data);
    }

    loadVideosFeed();
  }, [])
  return (
    <Content>
      <Header />
      <TagContent>
        <TagsRigth>
          <Tag color="#CF5151">
            <Icon name="local-fire-department" size={30} color="#FFF"/>
            <Title>Trending</Title>
          </Tag>
          <Tag color="#E68383">
            <Icon name="sports-esports" size={30} color="#FFF"/>
            <Title>Gaming</Title>
          </Tag>
          <Tag color="#CFAC13">
            <Icon name="local-movies" size={30} color="#FFF"/>
            <Title>Movies</Title>
          </Tag>
          <Tag color="#FA7E11">
            <Icon name="live-tv" size={30} color="#FFF"/>
            <Title>Live</Title>
          </Tag>
        </TagsRigth>
        <TagsLeft>   
          <Tag color="#28A17A">
            <Icon name="music-note" size={30} color="#FFF"/>
            <Title>Music</Title>
          </Tag>
          <Tag color="#0041BA">
            <Icon name="article" size={30} color="#FFF"/>
            <Title>News</Title>
          </Tag>
          <Tag color="#067333">
            <Icon name="emoji-objects" size={30} color="#FFF"/>
            <Title>Learning</Title>
          </Tag>
          <Tag color="#187AF2">
            <Icon name="emoji-events" size={30} color="#FFF"/>
            <Title>Sports</Title>
          </Tag>       
        </TagsLeft>
      </TagContent>
      <VideosContent>
        <TitleHeader>Trending videos</TitleHeader>
        <VideoList data={videos}/>
      </VideosContent>
    </Content>
  );
}

export default Explore;