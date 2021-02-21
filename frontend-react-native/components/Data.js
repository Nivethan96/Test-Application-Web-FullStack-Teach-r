import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from 'react-native';
import Axios from 'axios';
import axios from 'axios';

export default function DataContainer() {
    let [user, getUser] = React.useState('');
    const url = 'http://172.20.10.6:8000/';

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${url}show-users`)
            .then((res) => {
                console.warn(res)
                // const allUsers = res.data.prenom;
                // getUser(allUsers);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <View>
            <Text> mock data</Text>
        </View>
    )

}