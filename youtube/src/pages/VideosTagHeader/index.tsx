import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import HeaderPageName from '../../components/HeaderPageName';
import { Content } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import Cover from '../../components/Cover';
import { FeedReponse } from '../../types/FeedReponse';
import api from '../../services/api';
import VideoList from '../../components/VideoList';

interface CustomRouteParams {
  title: string;
  tagId: number;  
}

interface IconQuantity{
  icon: string;
  quantity: string;
}

const VideosTagHeader: React.FC = () => {
  const route = useRoute<RouteProp<any, any>>();
  const params = route.params as CustomRouteParams;  
  const [videos, setVideos] = useState<FeedReponse[]>([]);

  function returnIconQuantity(title: string): IconQuantity{
    switch(title){
      case "Gaming":
        return {icon: "sports-esports", quantity: "88.4M"};

      case "Live":
        return {icon: "live-tv", quantity: "13.7M"};

      case "News":
        return {icon: "article", quantity: "35.4M"};

      case "Learning":
        return {icon: "emoji-objects", quantity: "1.66M"};

      case "Sports":
        return {icon: "emoji-events", quantity: "74.9M"};
    }
  }

  useEffect(() => {
    async function loadVideos(){            
      const response = await api.get(`/feed?video.tag.id=${params.tagId}`);      
      setVideos(response.data);
    }
    loadVideos();
  }, []);

  return (
    <Content>
      <HeaderPageName pageName={params.title}/>
      <Cover title={params.title} icon={returnIconQuantity(params.title).icon} quantity={returnIconQuantity(params.title).quantity}/>
      <VideoList data={videos}/>
    </Content>
  );
}

export default VideosTagHeader;