import {FlatList, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';

import { Channel } from '../../types/FeedReponse';

export const Container = styled.View`
    flex: 1;
    background-color: #312E38;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 1;
    background-color: #312E38;
`;


export const HorizontalContent = styled.View`
    width: 100%;
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #FFF3;
`;


export const SubscribedChannels = styled(
    FlatList as new () => FlatList<Channel>,
  ).attrs({
    numColumns: 1
  })`
  padding: 0 10px;
  `;

export const ChannelContent = styled.View`
    justify-content:center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
`;

export const ChannelName = styled.Text`
    font-size: 14px;
    color: #FFFF;
`;

export const NavigationContent = styled.View`
    align-items: center;
    justify-content: center;
    width: 15%;
`;

export const NavigationButton = styled.TouchableOpacity`
    width: 40px;
    height: 20px;
`

export const NavigationText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #008cff;
`;