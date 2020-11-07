import { AppLoading } from "expo";
import * as Font from "expo-font"
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from "./src/components/Card";
import Header from "./src/components/Header";

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
        <View>
            <Header/>
            <Card/>
        </View>
    );
}

const styles = StyleSheet.create({});
