import React from "react";
import { View, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";

const NewsListScreen = (props: any) => {
    return (
        <Card navigation={props.navigation}/>
    );
}

export default NewsListScreen;