import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import FavouriteNavigator from './FavouriteNavigator'
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => {
            const icon = route.name === 'Home' ? 'home' : 'favorite';
            return {tabBarIcon: () => <MaterialIcons name={icon} size={24}/>}
        }}>
            <Tab.Screen name="Home" component={HomeNavigator}></Tab.Screen>
            <Tab.Screen name="Favorites" component={FavouriteNavigator}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default TabsNavigator;