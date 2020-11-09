import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import HeaderLeft from "./DrawerBurger";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator()

const AboutNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About" component={AboutScreen}
                options={{title: "About", headerLeft: () => <HeaderLeft/>}}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AboutNavigator;