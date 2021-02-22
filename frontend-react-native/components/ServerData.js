import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, ListItem } from 'react-native';
// Module externes
import axios from 'axios';
import CarouselCards from './CarouselCards'

// Fonction à exporter
export default DataContainer = () => {
    let [user, setUser] = useState([]);
    const userArray = []
    const url = 'http://172.20.10.6:8000/';

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`${url}show-users`)
            .then((res) => {
                // console.warn(res.data)
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