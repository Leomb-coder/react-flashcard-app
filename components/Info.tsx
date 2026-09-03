import { View, Text, StyleSheet } from "react-native";

export default function Info({ sentence }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.german}>
        {sentence.german}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.translation}>
        {sentence.english}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  german: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
    textAlign: "center",
    lineHeight: 38,
    fontFamily: 'times-new-roman'
  },

  divider: {
    width: 50,
    height: 3,
    backgroundColor: "#555555",
    borderRadius: 5,
    marginVertical: 22,
  },

  translation: {
    fontSize: 19,
    color: "#555555",
    textAlign: "center",
    lineHeight: 28,
  },
});