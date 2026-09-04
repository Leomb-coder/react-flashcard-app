import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLanguage } from "@/context/LanguageContext";

export default function Languages() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "eng", name: "English", flag: "🇬🇧" },
    { code: "por", name: "Portuguese", flag: "🇧🇷" },
    { code: "spa", name: "Spanish", flag: "🇪🇸" },
    { code: "fra", name: "French", flag: "🇫🇷" },
    { code: "ita", name: "Italian", flag: "🇮🇹" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate to...</Text>

      {languages.map((item) => (
        <Pressable
          key={item.code}
          style={styles.language}
          onPress={() => setLanguage(item.code)}
        >
          <Text style={styles.text}>
            {item.flag} {item.name}
          </Text>

          {language === item.code && <Text>✓</Text>}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  language: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
  },
});