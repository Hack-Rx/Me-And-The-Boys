import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import io from 'socket.io-client';
import { name, user, baseUrl, flaskUrl } from '../Store/Keys';
import Axios from 'axios';

export default QueueScreen = (props) => {
    const [link, setLink] = useState("i96UO8-GFvw")
    return (
        <View style={{ backgroundColor: "#f4f4f4", flex: 1 }}>
            <View style={{ borderBottomColor: "#f4f4f4", borderBottomWidth: 1, flex: 1, flexDirection: "row" }}>
                <TextInput
                    onChangeText={res => {
                        setLink(res)
                    }}
                    value={link} placeholder={"Video Link"} style={{ flex: 1, backgroundColor: "black" }} />

                <View
                    style={{ padding: 10, backgroundColor: "#4f4f44", borderRadius: 5, elevation: 1, flex: 1 }}
                    onPress={() => {
                        if (link != "") {
                            Axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + link + "&key=AIzaSyCm7cvQdOwCnslbRqECA015md9Pj_n4ZnM").then(yData => {
                                var snippet = yData.data.items[0].snippet
                                var temp = props.route.params.data.videoQueue
                                temp = [
                                    ...temp,
                                    {
                                        videoUrl: link,
                                        title: snippet.title,
                                        image: snippet.thumbnails.default.url,
                                        channelId: snippet.channelTitle
                                    }
                                ]

                                Axios.post(baseUrl + "/api/room/addVideo", {
                                    roomName: props.route.params.data.roomName,
                                    videoQueue: temp
                                }).then(res => {
                                    console.log("done")
                                })

                            })


                        }
                    }}
                ><Text style={{ textAlign: "center", color: "white" }}>Add Video</Text></View>
            </View>
            <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => (<View style={{ padding: 10 }}>
                    <Text>{item}</Text>
                </View>)}
                keyExtractor={(item) => (item + "")}
            />
        </View >
    )
}