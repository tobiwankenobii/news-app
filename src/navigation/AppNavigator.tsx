import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabsNavigator from "./TabsNavigation";
import AboutNavigator from "./AboutNavigator";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="News" component={TabsNavigator}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutNavigator}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;