import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function MetricBox({ Icon, Title, Description, Value }) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.outlineIcon} >
                {Icon}
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.titleText}>{Title}</Text>
                <Text style={styles.descText}>{Description}</Text>
            </View>
            <Text style={styles.valueText}>{Value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        width: '100%',
        backgroundColor: '#f6f6f6ff',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#6b7280",
    },
    outlineIcon: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#cad0d460",
    },

    valueText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    descText: {
        maxWidth: 150,
    },
});
