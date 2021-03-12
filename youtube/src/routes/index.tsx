import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from '../pages/Feed';
import Explore from '../pages/Explore';
import Subscription from '../pages/Subscription';
import Library from '../pages/Library';
import SubscriptionsList from '../pages/SubscriptionsList';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function SubscriptionStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                headerShown: false,
                cardStyle: { backgroundColor: '#312E38' },
            }} 
            name="Subscriptions" component={Subscription} />
            <Stack.Screen 
            options={{
                headerShown: false,
                headerStyle: { backgroundColor: '#312E38',  }                
                }} 
            name="Channel list" component={SubscriptionsList} />
        </Stack.Navigator>
    )
}

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            barStyle={{
                backgroundColor: '#312E38',
                borderTopWidth: 1,
                borderTopColor: '#FFF3'
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
            component={SubscriptionStack} />  
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