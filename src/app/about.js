import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ── TODO (UI) ─────────────────────────────────────────────────────────
          Build a simple About screen: a title and a sentence or two about the
          five daily prayers. Just practice <View>, <Text>, and StyleSheet —
          no logic needed here. */}
      <View style={styles.container}>
        <Text style={styles.title}>The five daily prayers</Text>
        <Text style={styles.description}>
          The five daily prayers are the second pillar of Islam. They consist of
          Fajr, Dhuhr, Asr, Maghrib, and Isha, performed throughout the day and
          night.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1a16" },
  // add your styles here (title, body, etc.)
  container: {
    flex: 1,
    backgroundColor: "#0b1a16",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 24,
  },
});
