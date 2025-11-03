import { View, Text, Button, Platform } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import axios from "axios";
import { useState, useEffect } from "react";
import Authscreen from '../screens/AuthScreens/Authscreen.jsx';
import MainAccountScreen from '../screens/AccountScreens/MainAccount.jsx'

export default function Account() {

    const backend_url = process.env.BACKEND_URL || "http://192.168.56.1:5000/api"

    const [data, setData] = useState("Not received yet");

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`${backend_url}/database/users`);
                setData(response.data.msg);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        //fetchData();

    }, []);



    return (
        <View style={{ flex: 1 }}>
            {loggedIn ?
                <MainAccountScreen />
                :
                <Authscreen />}

        </View>
    );
}