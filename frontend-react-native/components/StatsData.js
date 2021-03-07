// In-built modules
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// REST Api
import axios from 'axios';

// StatData compoent to be exported into App
export default DataContainer = () => {
    let [stats, setStats] = useState([]);
    let compteur = 0;
    const url = 'http://192.168.1.56:8000/';

    useEffect(() => {
        getStats();
    }, []);

    const getStats = () => {
        axios.get(`${url}show-stats`)
            .then((res) => {
                for (i in res.data) {
                    compteur += 1
                }
                setStats(compteur)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.text]}>Nombre de personnes inscrites</Text>
            <Text style={[styles.text]}>{stats} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 50,
        marginRight:50,
        borderWidth: 4,
        borderColor: "black",
        backgroundColor:"lightblue",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center'
    },

    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize:17
    }
})