import React from "react";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

const HeaderLeft = () => {
    const navigation: any = useNavigation();
    return (<MaterialIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>)
}

export default HeaderLeft;