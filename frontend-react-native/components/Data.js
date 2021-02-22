import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, ListItem } from 'react-native';
import axios from 'axios';

export default function DataContainer() {
    let [user, setUser] = useState([]);
    const url = 'http://172.20.10.6:8000/';

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`${url}show-users`)
            .then((res) => {
                // console.warn(res.data)
                // //const userArray = (res.data[0].prenom)
                const userArray = []
                for (i in res.data) {
                    userArray.push(res.data[i].prenom)
                }
                setUser(userArray)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    if (!user) { return null; }

    return (
        <View>
            <Text>{user}</Text>
        </View>
    );
}