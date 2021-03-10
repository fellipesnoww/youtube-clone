import React from 'react';
import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
import { List, VideoContent, AboutContent, DetailText, ContentText, AboutText, Thumbnail, AvatarImage, IconContent, DurationContent, TextDuration } from './styles';
import { FeedReponse } from '../../types/FeedReponse';

interface CustomProps{
  data: Array<FeedReponse>
}

const VideoList: React.FC<CustomProps> = ({children, ...props}) => {
  
  function changeString(text: string): string {    
    var strChange = text.substring(77);    
    var newStr = text.replace(strChange, " ...");    
    return newStr;
  }

  return (
  <>
    <List
      data={props.data}
      showsVerticalScrollIndicator={false}
      key={video => String(video.video.id)}
      renderItem={({ item }) => (
        <VideoContent>          
          <Thumbnail source={{uri: item?.video.image_url}}/>        
          <AboutContent>
            <View style={{marginTop: 5, flexDirection: "row", width: "90%"}}>
              <AvatarImage source={{uri: item?.video.channel.avatar}}/>
              <ContentText>
                {item?.video.name.length <= 77 ?
                  <DetailText>{item?.video.name}</DetailText>
                  :
                  <DetailText>{changeString(item?.video.name)}</DetailText>
                }
                <AboutText>{`${item?.video.channel.name} • ${item?.video.views} views • ${item?.video.date}`}</AboutText>
              </ContentText>
            </View>
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