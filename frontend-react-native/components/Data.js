import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, ListItem } from 'react-native';
import axios from 'axios';

export default function DataContainer() {
    let [user, setUser] = React.useState([]);
    const url = 'http://172.20.10.6:8000/';

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${url}show-users`)
            .then((res) => {
                console.warn(res.data)
                setUser(res.data.prenom)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    //if (!user) { return null; }

    const renderUser = ({ item }) => {
        return (
            <ListItem>
                <Text>{item.prenom}</Text>
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList data={user}
                renderItem={renderUser}
            />
        </View>
    );
}