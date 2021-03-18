import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #312E38;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(ScrollView).attrs({

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