import {StatusBar} from 'react-native'
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

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
    border: 1px solid #FFF3;
    align-items: center;
    justify-content: space-between;
`;

export const IconsContent = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content: center;
`;

export const IconHeader = styled(Icon)`

`;