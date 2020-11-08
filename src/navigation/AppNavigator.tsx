import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Card from "../components/Card";
import Header from "../components/Header";
import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList" component={NewsListScreen}
                options={{title: "Recent News"}}
            ></Stack.Screen>
            <Stack.Screen
                name="NewsDetails" component={NewsDetailsScreen}
                options={{title: "Recent News"}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}
const FavoriteNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorites" component={FavoriteScreen}
                options={{title: "Favorites"}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => {
                const icon = route.name === 'Home' ? 'home' : 'favorite';
                return {tabBarIcon: () => <MaterialIcons name={icon} size={24}/>}
            }}>
                <Tab.Screen name="Home" component={HomeNavigator}></Tab.Screen>
                <Tab.Screen name="Favorites" component={FavoriteNavigator}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;