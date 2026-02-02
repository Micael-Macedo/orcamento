import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        borderRadius: 12
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12, 
        borderBottomColor: DEFAULT_THEME.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    title: {
        color: DEFAULT_THEME.TEXT_SECONDARY_COLOR,
        fontSize: 12
    },
    children: {
        padding: 16
    },
})