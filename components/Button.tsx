import { Pressable, StyleSheet } from "react-native";

const style = StyleSheet.create({
    button: {
        marginTop: 10,
    },
})

export default function Button({children, onPress}:any) {
    return (
        <Pressable style={style.button} onPress={onPress}>{children}</Pressable>
    );
}