import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function About() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is the About screen!</Text>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}
