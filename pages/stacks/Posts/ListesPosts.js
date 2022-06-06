import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import moment from "moment";
// temporary data until we pull from Firebase
posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: 1569109273726,
        avatar: require("../../../assets/img/tempAvatar.jpg"),
        image: require("../../../assets/img/tempImage1.jpg")
    },
    {
        id: "2",
        name: "Karyn Kim",
        text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: 1569109273726,
        avatar: require("../../../assets/img/tempAvatar.jpg"),
        image: require("../../../assets/img/tempImage1.jpg")
    },
    {
        id: "3",
        name: "Emerson Parsons",
        text:
            "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
        timestamp: 1569109273726,
        avatar: require("../../../assets/img/tempAvatar.jpg"),
        image: require("../../../assets/img/tempImage1.jpg")
    },
    {
        id: "4",
        name: "Kathie Malone",
        text:
            "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
        timestamp: 1569109273726,
        avatar: require("../../../assets/img/tempAvatar.jpg"),
        image: require("../../../assets/img/tempImage1.jpg")
    }
];

export default class ListesPost extends React.Component {
    renderPost = post => {
        return (
            <View style={stylees.feedItem}>
                <Image source={post.avatar} style={stylees.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={stylees.name}>{post.name}</Text>
                            <Text style={stylees.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ellipsis-horizontal-outline" size={24} color="#73788B" />
                    </View>
                    <Text style={stylees.post}>{post.text}</Text>
                    <Image source={post.image} style={stylees.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }}/>
                        <Ionicons name="chatbox-ellipses" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={stylees.container}>
                <FlatList
                    style={stylees.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}

const stylees = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFEDC",
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#1E3D59",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8,
        borderRadius : 10
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
      fontSize: 15,
      color: "#FFFEDC",
      fontWeight: "bold",
      marginTop: 4
    },
    timestamp: {
        fontSize: 11,
        color: "#FFFEDC",
        fontWeight: "bold",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});