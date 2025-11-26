import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/fontawesome';
import { HomeScreen } from '../screens/HomeScreen';
import { WishlistScreen } from '../screens/WishlistScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen
                name="Explore"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="film" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

