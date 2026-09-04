import { Tabs, Stack } from "expo-router";
import { LanguageProvider } from "@/context/LanguageContext";

export default function TabLayout() {
  return (
    <LanguageProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Flashcards",
          }}
        />

        <Tabs.Screen
          name="languages"
          options={{
            title: "Languages",
          }}
        />

        <Tabs.Screen
          name="tips"
          options={{
            title: "Tips",
          }}
        />
      </Tabs>
    </LanguageProvider>
  );
}