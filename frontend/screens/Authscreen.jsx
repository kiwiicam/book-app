import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View, StyleSheet, Text, ScrollView, TextInput, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./AuthStyles.jsx";

import SignupScreen from "./Signup.jsx";
import Signinscreen from "./Signin.jsx"


const { height: screenHeight } = Dimensions.get("window");

export default function Authscreen() {



    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [signUp, setSignUp] = useState(true);

    const [visible, setVisible] = useState(false);


    return (
        <View style={styles.container}>
            {signUp ?
                <SignupScreen setSignInView={setSignUp} />
                :
                <Signinscreen setSignInView={setSignUp} />
            }
        </View>
    );
}
