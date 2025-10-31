import { View, Text, Button } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Authscreen from "../screens/Authscreen.jsx"

export default function Account() {

    const backend_url = process.env.BACKEND_URL || "http://192.168.56.1:5000/api"

    const [data, setData] = useState("Not received yet");

    const [loggedIn, setLoggedIn] = useState(false);

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
        fetchData();


    }, []);



    return (
        <View style={{ flex: 1 }}>
            {loggedIn ?
                <Text>Welcome to your account!</Text>
                :
                <Authscreen />}

        </View>
    );
}