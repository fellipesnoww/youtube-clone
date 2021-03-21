import {ScrollView, FlatList} from 'react-native';
import styled from 'styled-components/native';
import Playlist from '../../types/PlaylistResponse';
import {FeedReponse} from '../../types/FeedReponse';

export const Container = styled.View`
    flex: 1;
    background-color: #312E38;
    align-items: center;
    justify-content: center;
`;

export const WatchedVideos = styled(
    FlatList as new () => FlatList<FeedReponse>,
  ).attrs({
    numColumns: 1
  })`  
`;

export const VideoContent = styled.View`    
    margin-right: 15px;    
    margin-top: 10px;
    flex-shrink: 1;
    flex-wrap: wrap;
`;

export const VideoName = styled.Text`
    font-size: 14px;
    color: #FFFF;
`;

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background-color: #312E38;
`;

export const OptionsContainer = styled.View`
    width: 100%;
    height: 250px;
    border-top-width: 1px;
    border-top-color: #FFF3;
    border-bottom-width: 1px;
    border-bottom-color: #FFF3;
    align-items: center;
    justify-content: center;
`;

export const OptionItem = styled.View`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
`;

export const OptionDescription = styled.Text`
    font-size: 20px;
    color: #FFF;
    margin-left: 15px;
`;

export const PlaylistContainer = styled.View`
    width: 100%;
    padding: 0 15px;
`;

export const TitleContent = styled.View`        
    width: 100%;
    margin: 15px 0 15px 20px;  
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #FFFF;
`;

export const NewItem = styled.View`
    flex-direction: row; 
    align-items: center; 
    justify-content:flex-start;  
    width: 100%;
`;

export const Description = styled.Text`
    font-size: 18px;
    color: #0066ff;
    margin-left: 20px;
`;

export const Playlists = styled(
    FlatList as new () => FlatList<Playlist>,
  ).attrs({
    numColumns: 1
  })`  
  `;

export const PlaylistContent = styled.View`
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #FFFF;    
`;

export const InfoContent = styled.View`    
    margin-left: 10px;
`;

export const Quantity = styled.Text`
    font-size: 16px;
    color: #FFF3;
`;

export const InfoContentFirstItem = styled.View`    
    margin-left: 15px;
`;

export const WatchedContent = styled.View`
    width: 100%;
    height: 180px;
    padding: 10px 0 10px 10px;
`;