import { DEFAULT_THEME } from "@/config/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        padding: 20,
        gap: 20,
    },
    actions:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    defaultInput: {
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        borderRadius: 48,
        padding: 16,
    }
})