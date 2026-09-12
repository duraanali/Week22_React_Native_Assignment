import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRAYERS, getCurrentPrayerIndex } from "../data/prayers";

export default function Prayers() {
  // GIVEN: a live clock that ticks every 30 seconds, so the highlight can move
  // on its own as time passes. You don't need to change this part.
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30 * 1000);
    return () => clearInterval(timer);
  }, []);

  // ── TODO 1 (a little logic) ────────────────────────────────────────────────
  // Which prayer is happening right now? Use the helper you were given:
  //   const currentIndex = getCurrentPrayerIndex(now);
  // (It returns a number 0–4 — the index of the current prayer in PRAYERS.)
  const currentIndex = getCurrentPrayerIndex(now);
  
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* ── TODO 2 (UI) ──────────────────────────────────────────────────────
            Add a header that shows the CURRENT prayer's name — e.g.
            PRAYERS[currentIndex].name — in a styled <View> with <Text>. */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            current prayer : {PRAYERS[currentIndex].name}
          </Text>
        </View>
        {/* ── TODO 3 (UI + the highlight) ─────────────────────────────────────
            List all five prayers. Map over PRAYERS, and for each one show its
            .name and .time (and .arabic if you like) inside a styled row.
            HIGHLIGHT the current one: when its index === currentIndex, give the
            row a different style, e.g.:
              const isCurrent = index === currentIndex;
              <View style={[styles.row, isCurrent && styles.rowCurrent]}> … </View>
        */}
        {PRAYERS.map((Prayer, index) => {
          const isCurrent = index === currentIndex;

          return (
            <View
              style={[styles.row, isCurrent && styles.rowCurrent]}
              key={Prayer.name || index}
            >
              <Text style={[styles.name, isCurrent && styles.textCurrent]}>
                {Prayer.name} {Prayer.arabic ? `(${Prayer.arabic})` : ""}
              </Text>

              <Text style={[styles.time, isCurrent && styles.textCurrent]}>
                {Prayer.time}
              </Text>
            </View>
          );
        }
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

// ── TODO 4 (styling) ─────────────────────────────────────────────────────────
// Fill in the styles to make it look nice. `screen` is done so the app has a
// background; add styles for your header, rows, text, and the current-row
// highlight. (Numbers are pixels; names are camelCase, like backgroundColor.)
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1a16" },
  content: { padding: 20, gap: 12 },

  header: {
    backgroundColor: "#162e27",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  headerText: {
    color: "#e6c46e",
    fontSize: 18,
    fontWeight: "bold",
  },
  // row: { ... },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#12251f",
    padding: 16,
    borderRadius: 8,
  },
  // rowCurrent: { ... },
  rowCurrent: {
    backgroundColor: "#1f4d3e",
    borderWidth: 1,
    borderColor: "#e6c46e",
  },
  // name: { ... },
  name: {
    color: "#a0b3ad",
    fontSize: 16,
  },
  // time: { ... },
  time: {
    color: "#a0b3ad",
    fontSize: 16,
  },
  textCurrent: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});