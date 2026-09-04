import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

const TIPS = [
  {
    title: "1. Nouns are always capitalized",
    text: "Every German noun starts with a capital letter.",
    example: "Das Haus ist groß.",
    translation: "The house is big.",
  },
  {
    title: "2. The three genders",
    text: "German nouns have three grammatical genders:",
    example: "der = masculine\n die = feminine\n das = neuter",
    translation: "Example: der Mann, die Frau, das Kind",
  },
  {
    title: "3. Learn the article with the noun",
    text: "Don't memorize just the noun. Learn its article too.",
    example: "der Tisch ❌ Tisch\n die Lampe ❌ Lampe\n das Buch ❌ Buch",
    translation: "Learning the article makes cases much easier later.",
  },
  {
    title: "4. Verb in second position",
    text: "In a normal German statement, the conjugated verb usually comes in position 2.",
    example: "Ich lerne Deutsch.",
    translation: "I am learning German.",
  },
  {
    title: "5. The verb can move",
    text: "If another element comes first, the verb still stays in position 2.",
    example: "Heute lerne ich Deutsch.",
    translation: "Today I am learning German.",
  },
  {
    title: "6. Questions",
    text: "Yes/no questions usually put the verb first.",
    example: "Lernst du Deutsch?",
    translation: "Are you learning German?",
  },
  {
    title: "7. W-questions",
    text: "Question words come first, followed by the conjugated verb.",
    example: "Wo wohnst du?",
    translation: "Where do you live?",
  },
  {
    title: "8. Remember 'sein'",
    text: "sein means 'to be' and is one of the most important irregular verbs.",
    example:
      "ich bin\n du bist\n er/sie/es ist\n wir sind\n ihr seid\n sie/Sie sind",
    translation: "I am, you are, he/she/it is, we are, you are, they/you are",
  },
  {
    title: "9. Remember 'haben'",
    text: "haben means 'to have'.",
    example:
      "ich habe\n du hast\n er/sie/es hat\n wir haben\n ihr habt\n sie/Sie haben",
    translation: "I have, you have, he/she/it has...",
  },
  {
    title: "10. Accusative: direct objects",
    text: "The accusative is often used for the direct object of a sentence.",
    example: "Ich sehe den Mann.",
    translation: "I see the man.",
  },
  {
    title: "11. Masculine accusative",
    text: "The masculine article changes from der → den and ein → einen.",
    example: "der Mann → Ich sehe den Mann.\nein Mann → Ich sehe einen Mann.",
    translation: "The other genders usually don't change in the same way.",
  },
  {
    title: "12. Dative",
    text: "The dative is commonly used for the indirect object.",
    example: "Ich gebe dem Mann das Buch.",
    translation: "I give the man the book.",
  },
  {
    title: "13. The four cases",
    text: "German has four grammatical cases:",
    example:
      "Nominative → subject\nAccusative → direct object\nDative → indirect object\nGenitive → possession",
    translation:
      "Learn the cases gradually. They become much easier with practice.",
  },
  {
    title: "14. Separable verbs",
    text: "Some verbs split apart in normal sentences.",
    example: "Ich stehe um 7 Uhr auf.",
    translation: "I get up at 7 o'clock.",
  },
  {
    title: "15. Modal verbs",
    text: "With modal verbs, the second verb usually goes to the end in its infinitive form.",
    example: "Ich kann Deutsch sprechen.",
    translation: "I can speak German.",
  },
  {
    title: "16. Common modal verbs",
    text: "Important modal verbs include können, müssen, wollen, sollen, dürfen and mögen.",
    example: "Ich muss lernen.\nIch kann schwimmen.\nIch will schlafen.",
    translation: "I have to study.\nI can swim.\nI want to sleep.",
  },
  {
    title: "17. Negation with 'nicht'",
    text: "nicht is used to negate verbs, adjectives, adverbs and sometimes entire statements.",
    example: "Ich verstehe das nicht.",
    translation: "I don't understand that.",
  },
  {
    title: "18. Negation with 'kein'",
    text: "kein is used to negate nouns that would normally use ein/eine or have no article.",
    example: "Ich habe kein Auto.",
    translation: "I don't have a car.",
  },
  {
    title: "19. Adjectives after 'sein'",
    text: "After sein, adjectives generally don't receive an ending.",
    example: "Das Haus ist groß.",
    translation: "The house is big.",
  },
  {
    title: "20. Adjective before a noun",
    text: "When an adjective comes before a noun, it usually gets an ending.",
    example: "ein großes Haus\neine schöne Stadt\nder kleine Hund",
    translation: "a big house\na beautiful city\nthe small dog",
  },
  {
    title: "21. Plurals are unpredictable",
    text: "German plurals can use different endings. It's best to learn the plural together with the noun.",
    example: "das Buch → die Bücher\nder Tisch → die Tische\ndie Frau → die Frauen",
    translation: "Learn both singular and plural.",
  },
  {
    title: "22. 'Du' vs 'Sie'",
    text: "du is informal singular. Sie is formal and is always capitalized.",
    example: "Wie heißt du?\nWie heißen Sie?",
    translation: "What's your name? (informal/formal)",
  },
  {
    title: "23. 'ihr' and 'euch'",
    text: "ihr means 'you' when talking to multiple people. euch is the accusative/dative form.",
    example: "Ihr seid nett.\nIch sehe euch.",
    translation: "You are nice.\nI see you.",
  },
  {
    title: "24. Possessive words",
    text: "mein = my, dein = your, sein = his/its, ihr = her/their, unser = our, euer = your.",
    example: "Das ist mein Buch.",
    translation: "This is my book.",
  },
  {
    title: "25. Perfect tense",
    text: "The spoken past is often formed with haben/sein + a past participle.",
    example: "Ich habe Deutsch gelernt.",
    translation: "I learned / have learned German.",
  },
  {
    title: "26. Some verbs use 'sein' in the perfect",
    text: "Movement and changes of state often use sein.",
    example: "Ich bin nach Hause gegangen.",
    translation: "I went home.",
  },
  {
    title: "27. Past participles often start with 'ge-'",
    text: "Many regular verbs form their participle with ge- + stem + -t.",
    example: "machen → gemacht\nlernen → gelernt\nspielen → gespielt",
    translation: "made, learned, played",
  },
  {
    title: "28. Subordinate clauses",
    text: "After words like weil, dass and wenn, the conjugated verb usually moves to the end.",
    example: "Ich lerne Deutsch, weil es interessant ist.",
    translation: "I am learning German because it is interesting.",
  },
  {
    title: "29. 'weil' = because",
    text: "Remember: weil sends the conjugated verb to the end.",
    example: "Ich bleibe zu Hause, weil ich krank bin.",
    translation: "I stay at home because I am sick.",
  },
  {
    title: "30. German word order",
    text: "German word order can seem strange at first. Focus on the position of the conjugated verb.",
    example: "Heute gehe ich zur Schule.",
    translation: "Today I go to school.",
  },
  {
    title: "31. Learn phrases, not only words",
    text: "Instead of memorizing isolated words, learn complete sentences.",
    example: "Ich habe keine Ahnung.",
    translation: "I have no idea.",
  },
  {
    title: "32. Don't translate word-for-word",
    text: "German and English organize sentences differently. Try to understand the meaning instead of translating every word.",
    example: "Ich bin 17 Jahre alt.",
    translation: "I am 17 years old.",
  },
  {
    title: "33. Practice with real sentences",
    text: "Reading real German sentences helps you naturally recognize word order, cases and vocabulary.",
    example: "Ich möchte heute Deutsch lernen.",
    translation: "I want to learn German today.",
  },
];

export default function Tips() {
  // Tracks which card indices are currently expanded
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>German Grammar Tips 🇩🇪</Text>
      <Text style={styles.subtitle}>
        Useful rules to help you understand German sentences. Tap a card to
        expand it.
      </Text>

      {TIPS.map((tip, index) => (
        <Tip
          key={index}
          {...tip}
          isExpanded={expanded.has(index)}
          onToggle={() => toggle(index)}
        />
      ))}

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          💡 Tipp: Wiederholung ist der Schlüssel!
        </Text>
        <Text style={styles.bottomTranslation}>Repetition is the key!</Text>
      </View>
    </ScrollView>
  );
}

function Tip({
  title,
  text,
  example,
  translation,
  isExpanded,
  onToggle,
}: {
  title: string;
  text: string;
  example: string;
  translation: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable
      style={styles.card}
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityState={{ expanded: isExpanded }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.tipTitle}>{title}</Text>
        <Text style={styles.chevron}>{isExpanded ? "−" : "+"}</Text>
      </View>

      {isExpanded && (
        <View style={styles.cardBody}>
          <Text style={styles.description}>{text}</Text>

          <View style={styles.exampleBox}>
            <Text style={styles.example}>{example}</Text>
            <Text style={styles.translation}>{translation}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 25,
  },

  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  chevron: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 12,
  },

  cardBody: {
    marginTop: 10,
  },

  tipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flexShrink: 1,
  },

  description: {
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 12,
  },

  exampleBox: {
    borderRadius: 10,
    padding: 12,
  },

  example: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 25,
  },

  translation: {
    fontSize: 15,
    marginTop: 6,
    lineHeight: 22,
  },

  bottom: {
    marginTop: 15,
    padding: 20,
    alignItems: "center",
  },

  bottomText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  bottomTranslation: {
    fontSize: 15,
    marginTop: 5,
  },
});