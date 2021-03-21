import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, IconContent, DataContent, Title, SubscribeContent, SubscribeButton, Description, Quantity  } from './styles';

interface CustomProps{
    icon: string;
    title: string;
    quantity: string;
}

const Cover: React.FC<CustomProps> = ({children, ...props}) => {
  return(
    <>
        <Container>
            <IconContent>
                <Icon name={props.icon} size={50} color="#FFF"/>
            </IconContent>
            <DataContent>
                <Title>{props.title}</Title>
                <SubscribeContent>
                    <SubscribeButton>
                        <Description>SUBSCRIBE</Description>
                    </SubscribeButton>
                    <Quantity>{props.quantity}</Quantity>
                </SubscribeContent>
            </DataContent>
        </Container>
    </>
  );
}

export default Cover;