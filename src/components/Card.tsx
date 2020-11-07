import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg'}} style={styles.image}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Title</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Description</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        elevation: 5
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        height: '10%',
        paddingHorizontal: 15
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        marginTop: 10
    },
    descriptionContainer: {
        paddingHorizontal: 15
    },
    description: {
        fontFamily: 'OpenSans',
        fontSize: 15,
        marginTop: 10
    },
    image: {
        height: '100%',
        width: '100%'
    }
});

export default Card;