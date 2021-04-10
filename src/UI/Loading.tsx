import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => {
    return (
        <View style={{ marginTop: "15%" }}>
            <ActivityIndicator size="large" color="lightgrey" />
        </View>
    );
};

export default Loading;
