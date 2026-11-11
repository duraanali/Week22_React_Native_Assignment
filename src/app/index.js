import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRAYERS, getCurrentPrayerIndex } from "../data/prayers";

// Work from Step 1 down to Step 5. Save after each step and check the app.
export default function Prayers() {
  // The clock is already done. It updates every 30 seconds. Leave it as it is.
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30 * 1000);
    return () => clearInterval(timer);
  }, []);

  // The five prayers are already in state. Each one has name, arabic, and time.
  // Use `prayers` in the steps below. Do not call setPrayers.
  const [prayers, setPrayers] = useState(PRAYERS);

  // STEP 2 — Which prayer is happening now?
  // Add this line. It gives you 0, 1, 2, 3, or 4.
  const currentIndex = getCurrentPrayerIndex(now);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      
      <View style={styles.content}>
        
      </View>
      <View>
        <Text style={styles.title}>Prayer Times</Text>
        <Text style={styles.hint}>
          Some text is missing a style. The list stays empty until you add the prayers.
        </Text>

       
        <Text style={styles.hint}>Current prayer: {prayers[currentIndex].name}</Text>

        {/* STEP 3 — Add data to the FlatList below. */}
        <FlatList
          data={prayers}
          renderItem={({ item, index }) => {
            // item is one prayer. index is its position, from 0 to 4.
            

            // STEP 1 — Add style={styles.hint} to the Text below.
            // STEP 4 — Replace that Text with the prayer name and time.
            // Use styles.name and styles.time.
            // When index matches currentIndex, also use styles.rowCurrent.
            return (
              <View style={[styles.row, index === currentIndex && styles.rowCurrent]}>
                
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

// Text colors are started so words show on the dark background.
// Change rowCurrent so the current prayer stands out.
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1a16" },
  content: { flex: 1, padding: 20, gap: 12 },
  list: { gap: 12, paddingBottom: 24 },
  title: { color: "#f4f1e8", fontSize: 28, fontWeight: "700" },
  hint: { color: "#d5e4dc", fontSize: 16, lineHeight: 22 },
  row: {
    backgroundColor: "#132820",
    borderRadius: 12,
    padding: 14,
  },
  rowCurrent: {
    backgroundColor: "#1f4d3a",
    borderColor: "#e6c46e",
    borderWidth: 1,
  },
  name: { color: "#f4f1e8", fontSize: 18, fontWeight: "600" },
  time: { color: "#e6c46e", fontSize: 16 },
});
