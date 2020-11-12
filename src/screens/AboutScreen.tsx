import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AboutScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Developed by Piotr Tobiasz</Text>
            <Text style={styles.info}>Main goal was to get familiar with React Native.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'OpenSans'
    },
    info: {
        textAlign: 'center'
    }
})
export default AboutScreen;