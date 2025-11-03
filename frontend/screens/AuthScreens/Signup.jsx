import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Pressable, View, StyleSheet, Text, TextInput, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./AuthStyles.jsx";
import BookBashLogo from "@/components/BookBashLogo.jsx";
import axios from "axios";

export default function Signupscreen({ setSignInView }) {

    const backend_url = process.env.BACKEND_URL || "http://10.0.0.11:5000/api"

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("mastercamnz@gmail.com");
    const [username, setUsername] = useState("");

    const [verify, setVerify] = useState(false)



    const [visible, setVisible] = useState(false);



    const SignUp = async () => {
        try {
            const response = await axios.post(`${backend_url}/authentication/signup`,
                {
                    password,
                    username,
                    email
                }
            )
            setVerify(response.data.verify)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const numInputs = 6;
    const [code, setCode] = useState(Array(numInputs).fill(""));
    const inputsRef = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < numInputs - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };


    return (
        <KeyboardAvoidingView
            style={{ flex: 1, width: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {verify ?
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={styles.topScreen}>
                            <View style={styles.topScreenBox}>
                                <View style={styles.iconBox}>
                                    <Ionicons name="mail-unread" size={40} color={"rgba(255, 255, 255, 1)"} />
                                </View>
                                <View style={styles.titleBox}>
                                    <BookBashLogo width={250} height={60} colour1={"rgba(255, 255, 255, 1)"} colour2={"rgba(252, 165, 165, 0.8)"} />
                                    <Text style={styles.slogoText}>
                                        Track your reads. Conquer your list.
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.bottomScreen, { gap: 40 }]}>
                            <Text style={styles.mainText}>Verify Your Account</Text>
                            <Text style={styles.codeText}>We sent a 6-digit code to: <Text style={[styles.codeText, { color: '#3b82f6' }]}>{email}</Text></Text>
                            <View style={styles.verifyOuter}>
                                {Array(numInputs)
                                    .fill("")
                                    .map((blank, i) => (
                                        <TextInput
                                            key={i}
                                            ref={(ref) => (inputsRef.current[i] = ref)}
                                            style={styles.verifyBox}
                                            keyboardType="numeric"
                                            maxLength={1}
                                            value={code[i]}
                                            onChangeText={(text) => handleChange(text, i)}
                                            onKeyPress={(e) => handleKeyPress(e, i)}
                                        />
                                    ))}
                            </View>
                            <Pressable
                                style={styles.signUpButton}
                                onPress={() => console.log("verifying code", code)}
                            >
                                <Text style={styles.signUpButtonText}>Verify & Continue</Text>
                            </Pressable>
                            <Pressable onPress={() => console.log("resending code")}>
                                <Text style={[styles.bottomTextButton, { fontSize: 22, fontWeight: 700 }]}>Resend Code</Text>
                            </Pressable>
                            <Text style={styles.codeText}>Check your spam folder if you don't see it.</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                : <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%' }}>

                    <View style={styles.topScreen}>
                        <View style={styles.topScreenBox}>
                            <View style={styles.iconBox}>
                                <Ionicons name="enter" size={40} color={"rgba(255, 255, 255, 1)"} />
                            </View>
                            <View style={styles.titleBox}>
                                <BookBashLogo width={250} height={60} colour1={"rgba(255, 255, 255, 1)"} colour2={"rgba(252, 165, 165, 0.8)"} />
                                <Text style={styles.slogoText}>
                                    Track your reads. Conquer your list.
                                </Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.bottomScreen}>
                        <Text style={styles.mainText}>Create Account</Text>
                        <View style={styles.inputBox}>
                            <View style={styles.iconOuter}>
                                <Ionicons name="person-outline" size={20} color={"#3b82f6"} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Username"
                                    placeholderTextColor="#bfcde2ff"
                                    value={username}
                                    onChangeText={setUsername}
                                />

                            </View>

                            <View style={styles.iconOuter}>
                                <Ionicons name="mail" size={20} color={"#3b82f6"} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"
                                    placeholderTextColor="#bfcde2ff"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                            <View style={styles.iconOuter}>
                                <Ionicons name="lock-closed" size={20} color={"#3b82f6"} style={styles.inputIcon} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Password"
                                    placeholderTextColor="#bfcde2ff"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={true}
                                />
                            </View>
                            <Pressable
                                style={styles.signUpButton}
                                onPress={() => SignUp()}
                            >
                                <Text style={styles.signUpButtonText}>Sign Up Now</Text>
                            </Pressable>
                        </View>
                        <View style={styles.orContainer}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>
                        <Pressable style={{ marginBottom: 40 }} onPress={() => setSignInView(false)}>
                            <Text style={styles.bottomTextButton}>Already have an account? Log In</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            }
        </KeyboardAvoidingView>

    );
}


