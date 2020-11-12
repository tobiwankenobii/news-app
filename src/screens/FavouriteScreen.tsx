import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Favourite } from "../interfaces/Favourite";
import Card from '../components/Card';

const FavouritesScreen = (props: { navigation: any; }) => {
    const favourites = useSelector((state: { news: { favourites: Favourite[]; }; }) => state.news.favourites);

    return (
        <FlatList
            data={favourites}
            keyExtractor={item => item.url}
            renderItem={({item}) => (
                <Card
                    navigation={props.navigation}
                    title={item.title}
                    image={item.urlToImage}
                    description={item.description}
                    url={item.url}
                />
            )}
        />
    );
}

export default FavouritesScreen;