import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux";
import { Favourite } from "../interfaces/Favourite";
import * as newsAction from '../redux/actions/newsAction';

const Card = (props: any) => {
    const dispatch = useDispatch();
    const isFav = useSelector(
        (state: { news: { favourites: Favourite[]; }; }) =>
            state.news.favourites.some(article => article.url === props.url)
    );

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('NewsDetails', {
                articleUrl: props.url
            })
        }}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: props.image ? props.image : 'https://user-images.githubusercontent.com/16916934/27370350-c82d1c44-5679-11e7-9147-2e8adeb4c515.png'}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {props.title && props.title.length > 22 ? props.title.slice(0, 22) + '...' : props.title}
                    </Text>
                    <MaterialIcons
                        name={isFav ? 'favorite' : 'favorite-border'}
                        color="#72bcd4" size={24}
                        onPress={() => {
                            dispatch(newsAction.toggleFavorites(props.url))
                        }}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        {props.description && props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
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
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
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