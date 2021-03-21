import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100px;
    background-color: #212121;    
    flex-direction: row;
    align-items: center;
    
    padding: 0 15px;    
`;

export const IconContent = styled.View`
    width: 80px;
    height: 80px;
    background-color: #FFF3;    
    border-radius: 50px;  
    align-items: center;
    justify-content:center;
`;

export const DataContent = styled.View`
    margin-left: 15px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
`;

export const SubscribeContent = styled.View`
    width: 100px;
    flex-direction: row;
    align-items: center;  
    margin-top: 8px;  
`;

export const SubscribeButton = styled.TouchableOpacity`
    width: 100%;    
`;

export const Description = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FF0000;
`;

export const Quantity = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF3;
`;