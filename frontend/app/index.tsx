import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View, StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DashboardIllustration from "../components/graphsvg";
import BookBashLogo from "../components/BookBashLogo";
import MetricBox from "../components/MetricBox";

export default function HomeScreen() {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);
  return (

    <ScrollView contentContainerStyle={styles.divDefault}>
      {signedIn ? <Text>Welcome back!</Text> : (
        <View style={styles.divDefault}>
          <BookBashLogo width={250} height={60} colour1={"#3b82f6"} colour2={"#2C3E50"} />
          <View style={{ gap: 20, alignItems: "center", width: "100%" }}>
            <Text style={styles.grayTextLarger}>Track and analyze your reading habits with detailed insights.</Text>
            {/* THIS VIEW HERE CAUSES THE ERROR */}<Pressable style={[styles.textBubble, { pointerEvents: "none" }]}>
              <Text style={{ textAlign: "center" }}>
                Get recommendations on your next book with our new recommendation algorithm!
              </Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => router.replace("/account")}
            >
              <Text style={styles.buttonText}>Get started today!</Text>
            </Pressable>
          </View>
          <DashboardIllustration />

          <View style={styles.metricsBoxParent}>
            <Text style={[styles.grayTextLarger, { textAlign: "auto" }]}>Key metrics</Text>
            <MetricBox Icon={<Ionicons name="book" size={35} color={"#2563eb"} />} Title={"Books read today"} Description={"The total amount of books our users have read today"} Value={"56"} />
            <MetricBox Icon={<Ionicons name="star" size={35} color={"#e8eb25ff"} />} Title={"Metric 2"} Description={"This is the second metric"} Value={"67"} />
            <MetricBox Icon={<Ionicons name="time" size={35} color={"#2563eb"} />} Title={"Metric 3"} Description={"This is the third metric"} Value={"45"} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "40%",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#2563eb",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  divDefault: {
    marginTop: 25,
    gap: 15,
    alignItems: "center",
    width: "100%"
  },
  textBubble: {
    backgroundColor: "#cad0d460",
    padding: 10,
    borderRadius: 8,
    width: "80%",
  },
  grayTextLarger: {
    color: "#6b7280",
    fontSize: 18,
    textAlign: "center",
    maxWidth: "80%",
  },
  metricsBoxParent: {
    width: "90%",
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#cad0d460",
    gap: 10,


  }
});
