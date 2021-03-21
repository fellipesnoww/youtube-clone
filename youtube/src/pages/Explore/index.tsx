import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { FeedReponse } from '../../types/FeedReponse';
import { AxiosResponse } from 'axios';
import VideoList from '../../components/VideoList';
import {useNavigation} from '@react-navigation/native';
import { Content, TagContent, TagsRigth, TagsLeft, Tag, Title, VideosContent, TitleHeader, NavigationButton } from './styles';
import { LogBox } from 'react-native';

const Explore: React.FC = () => {
  LogBox.ignoreLogs(['Warning: ...'])
  
  const [videos, setVideos] = useState<FeedReponse[]>([]);
  const navigation = useNavigation();

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
            <NavigationButton onPress={() => {navigation.navigate("Videos tag", {title: "Trending", tagId: 1})}}> 
              <Icon name="local-fire-department" size={30} color="#FFF"/>
              <Title>Trending</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#E68383">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "Gaming", tagId: 3})}}> 
              <Icon name="sports-esports" size={30} color="#FFF"/>
              <Title>Gaming</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#CFAC13">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag", {title: "Movies", tagId: 5})}}> 
              <Icon name="local-movies" size={30} color="#FFF"/>
              <Title>Movies</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#FA7E11">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "Live", tagId: 7})}}> 
              <Icon name="live-tv" size={30} color="#FFF"/>
              <Title>Live</Title>
            </NavigationButton>
          </Tag>
        </TagsRigth>
        <TagsLeft>   
          <Tag color="#28A17A">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "Music", tagId: 2})}}> 
              <Icon name="music-note" size={30} color="#FFF"/>
              <Title>Music</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#0041BA">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "News", tagId: 4})}}> 
              <Icon name="article" size={30} color="#FFF"/>
              <Title>News</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#067333">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "Learning", tagId: 6})}}> 
              <Icon name="emoji-objects" size={30} color="#FFF"/>
              <Title>Learning</Title>
            </NavigationButton>
          </Tag>
          <Tag color="#187AF2">
            <NavigationButton onPress={() => {navigation.navigate("Videos tag header", {title: "Sports", tagId: 8})}}> 
              <Icon name="emoji-events" size={30} color="#FFF"/>
              <Title>Sports</Title>
            </NavigationButton>
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