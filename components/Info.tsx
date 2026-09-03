import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  sentence: {
    fontSize: 24,
    fontFamily: "times-new-roman",
    padding: 20,
  },

  translation: {
    fontSize: 18,
    padding: 10,
  },

  info_container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Info({ sentence }:any) {
  return (
    <View style={style.info_container}>
      <Text style={style.sentence}>{sentence.german}</Text>
      <Text style={style.translation}>{sentence.english}</Text>
    </View>
  );
}
