import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Feed from '../pages/Feed';
import Explore from '../pages/Explore';

const Tab = createMaterialBottomTabNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Feed" options={{tabBarIcon: "home", tabBarLabel: "Home", tabBarColor: "#312E38" }} component={Feed} />  
            <Tab.Screen name="Explore" options={{tabBarIcon: "compass", tabBarLabel: "Explore", tabBarColor: "#312E38"}} component={Explore} />            
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;