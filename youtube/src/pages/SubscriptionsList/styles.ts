import {FlatList} from 'react-native'
import styled from 'styled-components/native';
import { Channel } from '../../types/FeedReponse';

export const Container = styled.View`
    flex: 1;
    background-color: #312E38;
`;

export const SubscribedChannels = styled(
    FlatList as new () => FlatList<Channel>,
  ).attrs({
    numColumns: 1
  })`
  padding: 0 10px;
  `;

export const ChannelContent = styled.View`
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    margin: 8px;
`;

export const ChannelName = styled.Text`
    font-size: 18px;
    color: #FFFF;
    margin-left: 10px;
`;