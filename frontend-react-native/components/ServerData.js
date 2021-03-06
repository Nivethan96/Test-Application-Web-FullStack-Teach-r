// Modules internes
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
// Modules externes
import axios from 'axios';

// Fonction à exporter
export default DataContainer = () => {
    let [user, setUser] = useState([]);
    const userArray = []
    const url = 'http://192.168.1.56:8000/';

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