import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';

import {FeedReponse} from '../../types/FeedReponse'

interface CustomProps{
  width?: string; 
  marginLeft?: string;
  usePadding?: boolean;
}

export const List = styled<CustomProps>(
    FlatList as new () => FlatList<FeedReponse>,
  ).attrs({
    numColumns: 1,
  })`       
  ${props => props.usePadding ? "padding: 0 10px" : ""};
  `;

  export const VideoContent = styled.View`
  width: 100%;
  height: 275px; 
  background-color: #312E38;   
  elevation: 1;
  margin-bottom: 12px;
  margin-top: 5px;  
`;

export const AboutContent = styled.View`
  width: 100%;
  height: 65px;
  background-color: #312E38;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;     
`;

export const VideoDescription = styled.View`
  margin-top: 5px;
  flex-direction: row;
  width: 90%; 
  margin-left: 10px;
`;

export const ContentText = styled.View`
  align-items: flex-start;
  justify-content: center;  
  margin-left: 10px;    
`;

export const DetailText = styled(Text).attrs({
  numberOfLines: 2
})`
  font-size: 16px;  
  text-align: left;
  color: #FFFF;  
`;

export const AboutText = styled.Text`
  font-size: 13px;
  margin-top: 3px;
  color: #FFFF;  
`;

export const Thumbnail = styled.Image`
  width: 100%;  
  height: 220px
`;

export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const IconContent = styled.View`
  align-items: flex-end;
  margin-top: -30px;  
`;

export const DurationContent = styled.View<CustomProps>`
  align-items:center;
  justify-content:center;  
  width: ${props => props.width}px;
  height: 15px;
  background-color: #000;  
  opacity: 0.8;    
  margin-left: ${props => props.marginLeft}px;  
  margin-top: -85px;
`;

export const TextDuration = styled.Text`
  font-size: 14px;
  color: #FFFF;
`;