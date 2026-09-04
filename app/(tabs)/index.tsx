import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Info from "@/components/Info";
import Button from "@/components/Button";

export default function HomePage() {
  const [sentence, setSentence] = useState<{
    german: string;
    english?: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();

  async function getSentence() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.tatoeba.org/v1/sentences?lang=deu&trans:lang=${language}&showtrans=all&sort=random`
      );

      const data = await response.json();

      const german = data.data[0].text;

      const translation = data.data[0].translations.find(
        (item: any) => item.lang === language
      )?.text;

      setSentence({
        german,
        english: translation,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>🇩🇪 DeutschCards</Text>

      <Text style={style.subtitle}>
        Short sentences to learn german.
      </Text>

      <View style={style.card}>
        {sentence ? (
          <Info sentence={sentence} />
        ) : (
          <View style={style.placeholder}>
            <Text style={style.placeholderTitle}>
              Your next sentence
            </Text>

            <Text style={style.placeholderText}>
              Press the button below to get a random German sentence.
            </Text>
          </View>
        )}
      </View>

      <Button onPress={getSentence}>
        <View style={style.button}>
          <Text style={style.buttonText}>
            {loading ? "Loading..." : "Get Sentence"}
          </Text>
        </View>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111111",
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 16,
    color: "#555555",
    marginTop: 6,
    marginBottom: 35,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,

    borderWidth: 1,
    borderColor: "#DDDDDD",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 3,

    justifyContent: "center",
  },

  placeholder: {
    alignItems: "center",
    paddingHorizontal: 15,
  },

  placeholderTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#222222",
    marginBottom: 10,
    textAlign: "center",
  },

  placeholderText: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#111111",
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});