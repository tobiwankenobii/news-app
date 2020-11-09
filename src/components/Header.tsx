import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>News App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: '#118ab2',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff'
    }
});

export default Header;