import { DEFAULT_THEME } from "@/config/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: "flex-start"
    },
    page: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    filterContainer: {
        flexDirection: "row",
        gap: 8,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        gap: 8,
        borderRadius: 48,
        paddingHorizontal: 16,
    },
    listContent: {
        paddingTop: 24,
        paddingBottom: 62,
    },
    separator: {
        marginVertical: 8
    }

})