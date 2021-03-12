import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';

interface CustomProps {
    paddingTop?: number;
}

export const Container = styled.View`
    background-color: #312E38;
    padding: 0 10px;
    flex-direction: row;
    width: 100%;
    height: 60px;
    margin-top: 33px;    
    border-bottom-width: 1px;
    border-bottom-color: #404040;
    elevation: 1;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBack = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content: space-between;    
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`;

export const IconsOptions = styled.View`
    flex-direction: row;
    align-items: center;    
`;

export const ButtonBack = styled.TouchableOpacity``;