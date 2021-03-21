import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

interface CustomProps {
    color: string;
}

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background-color: #312E38;
`;

export const TagContent = styled.View`
    width: 100%;
    height: 240px;
    background-color: #212121;    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 15px;    
`;

export const TagsRigth = styled.View`
    width: 50%;
    height: 100%;    
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const TagsLeft = styled.View`
    width: 50%;
    height: 100%;    
    justify-content: center;
    align-items: center;
`;

export const Tag = styled.View<CustomProps>`
    background-color: red;
    width: 190px;
    height: 45px;
    border-radius: 9px;    
    margin-top: 10px;
    background-color: ${props => props.color};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
    margin-left: 8px;
    color: #FFFF;
`;

export const VideosContent = styled.View`
    border-top-width: 1px;
    border-top-color: #FFF3;
    elevation: 1;   
`;

export const TitleHeader = styled.Text`
    font-size: 20px;
    margin: 10px 0 8px 10px;
    color: #FFFF;    
`;