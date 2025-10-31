import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View, StyleSheet, Text, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./AuthStyles.jsx";
import BookBashLogo from "@/components/BookBashLogo.jsx";

export default function Signinscreen({ setSignInView }) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const [visible, setVisible] = useState(false);


    return (
        <KeyboardAvoidingView
            style={{ flex: 1, width: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%' }}>
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
                    <Text style={styles.mainText}>Welcome Back!</Text>
                    <View style={styles.inputBox}>
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
                            onPress={console.log("works")}
                        >
                            <Text style={styles.signUpButtonText}>Log in</Text>
                        </Pressable>
                    </View>
                    <View style={styles.orContainer}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.line} />
                    </View>
                    <Pressable style={{ marginBottom: 40 }} onPress={() => setSignInView(true)}>
                        <Text style={styles.bottomTextButton}>Need an account? Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}


