import React, { useEffect } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import * as newsAction from '../redux/actions/newsAction';
import { useSelector, useDispatch } from 'react-redux';
import { Article } from "../interfaces/Article";

const NewsListScreen = (props: { navigation: any; }) => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(newsAction.fetchArticles())
        },
        [dispatch]
    );

    const {articles} = useSelector((state: { news: { articles: Article[]; }; }) => state.news.articles);

    return (
        <FlatList
            data={articles}
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
export default NewsListScreen;