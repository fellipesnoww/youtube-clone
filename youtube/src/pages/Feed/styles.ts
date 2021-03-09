import styled from 'styled-components/native';

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

export const VideoContent = styled.View`
    width: 100%;
    height: 275px; 
    /* background-color: #312E38;    */
    background-color: red;   
    elevation: 1;
    margin-bottom: 12px;    
`;

export const AboutContent = styled.View`
    width: 100%;
    height: 65px;
    background-color: #312E38;
    flex-direction: row; 
    align-items: center;    
`;

export const ContentText = styled.View`
    align-items: flex-start;
    justify-content: center;
    margin-left: 15px;
`;

export const DetailText = styled.Text`
    font-size: 20px;
    color: #FFFF;
`;

export const AboutText = styled.Text`
    font-size: 13px;
    margin-top: 3px;
    color: #FFFF;
`;