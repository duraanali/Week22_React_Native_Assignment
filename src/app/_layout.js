import { Tabs } from "expo-router";
import { Text } from "react-native";

// Two bottom tabs: the prayers list and an about screen.
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e6c46e",
        tabBarInactiveTintColor: "#7f9a8f",
        tabBarStyle: { backgroundColor: "#0b1a16", borderTopColor: "#16302a" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Prayers",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18, color }}>🕌</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18, color }}>ℹ️</Text>
          ),
        }}
      />
    </Tabs>
  );
}
