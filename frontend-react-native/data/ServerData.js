// In-built modules
import React, { useState, useEffect } from 'react';
// REST Api
import axios from 'axios';

// Function which recovers users by connecting with the backend
export default useData = () => {
    let [user, setUser] = useState([]);
    const userArray = []
    const url = 'http://192.168.1.56:8000/';

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`${url}show-users`)
            .then((res) => {
                for (i in res.data) {
                    userArray.push(res.data[i].prenom)
                }
                setUser(userArray)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return [user];
}