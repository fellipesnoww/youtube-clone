import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
export const Container = styled.View`
    flex: 1;
    background-color: #312E38;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background-color: #312E38;
`;