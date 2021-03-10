import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from '../pages/Feed';
import Explore from '../pages/Explore';
import Subscription from '../pages/Subscription';
import Library from '../pages/Library';

import {IconTab} from './styles';

const Tab = createMaterialBottomTabNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            barStyle={{
                backgroundColor: '#312E38'
              }}
            >
            <Tab.Screen name="Feed" options={{
                tabBarIcon: ({ color, focused }) => (
                    <Icon name="home" solid={focused} size={25} color={color} />
                ),
            }} 
            component={Feed} />  
            <Tab.Screen name="Explore"
            options={{
                tabBarIcon: ({ color, focused }) => (
                    <Icon name="explore" solid={focused} size={25} color={color} />
                ),
              }}
            component={Explore} />
            <Tab.Screen name="Subscription"
            options={{
                tabBarIcon: ({ color, focused }) => (
                    <Icon name="subscriptions" solid={focused} size={25} color={color} />
                ),
              }}
            component={Subscription} />  
            <Tab.Screen name="Library"
            options={{
                tabBarIcon: ({ color, focused }) => (
                    <Icon name="video-library" solid={focused} size={25} color={color} />
                ),
              }}
            component={Library} />              
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;