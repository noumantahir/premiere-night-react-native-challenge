import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/fontawesome';
import { HomeScreen } from '../screens/HomeScreen';
import { WishlistScreen } from '../screens/WishlistScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.gray600,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                    borderTopWidth: 1,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
            }}>
            <Tab.Screen
                name="Premiere Night"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="play" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

