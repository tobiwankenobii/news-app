import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import FavouriteScreen from "../screens/FavouriteScreen";
import HeaderLeft from "./DrawerBurger";

const Stack = createStackNavigator()

const FavouriteNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favourites" component={FavouriteScreen}
                options={{title: "Favourites", headerLeft: () => <HeaderLeft/>}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default FavouriteNavigator;