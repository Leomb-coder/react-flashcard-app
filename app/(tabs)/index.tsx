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
      {sentence && <Info sentence={sentence} />}

      <Button onPress={getSentence}>
        <Text>Get Sentence</Text>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});