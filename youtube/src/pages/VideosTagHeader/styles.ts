import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background-color: #312E38;
`;