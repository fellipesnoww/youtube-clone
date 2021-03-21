import React from 'react';
import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
import { List, VideoContent, AboutContent, DetailText, ContentText, AboutText, Thumbnail, AvatarImage, IconContent, DurationContent, TextDuration, VideoDescription } from './styles';
import { FeedReponse } from '../../types/FeedReponse';
import stringChanger from '../../utils/stringChanger';
interface CustomProps{
  data: Array<FeedReponse>;
  usePadding?: boolean;
}

const VideoList: React.FC<CustomProps> = ({children, ...props}) => {
  return (
  <>
    <List
      data={props.data}
      usePadding={props.usePadding}
      showsVerticalScrollIndicator={false}
      key={video => String(video?.video.id)}
      renderItem={({ item }) => (
        <VideoContent>          
          <Thumbnail source={{uri: item?.video.image_url}}/>        
          <AboutContent>
            <VideoDescription>
              <AvatarImage source={{uri: item?.video.channel.avatar}}/>
              <ContentText>
                {item?.video.name.length <= 77 ?
                  <DetailText>{item?.video.name}</DetailText>
                  :
                  <DetailText>{stringChanger(77, item?.video.name)}</DetailText>
                }
                <AboutText>{`${item?.video.channel.name} • ${item?.video.views} views • ${item?.video.date}`}</AboutText>
              </ContentText>
            </VideoDescription>
            <IconContent>
              <Icon name="more-vertical" size={20} color="#FFFF"/>
            </IconContent>            
          </AboutContent>
          <DurationContent width={item?.video.time.length <= 5 ? "43" : "63"} 
            marginLeft={item?.video.time.length <= 5 ? "345" : "325"}>            
            <TextDuration>{item?.video.time}</TextDuration>
          </DurationContent>
        </VideoContent>
      )} />
  </>
  );
}

export default VideoList;