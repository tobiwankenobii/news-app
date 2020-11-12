import { AppLoading } from "expo";
import * as Font from "expo-font"
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from 'react-redux';
import store from './src/redux/store';

const loadFonts = () => {
    return Font.loadAsync({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setFontLoaded(true)}
            />
        )
    }

    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}

