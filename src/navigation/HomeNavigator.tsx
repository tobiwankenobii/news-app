import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import HeaderLeft from "./DrawerBurger";

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList" component={NewsListScreen}
                options={{title: "Recent News", headerLeft: () => <HeaderLeft/>}}
            ></Stack.Screen>
            <Stack.Screen
                name="NewsDetails" component={NewsDetailsScreen}
                options={{title: "Recent News"}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeNavigator;