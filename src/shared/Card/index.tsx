import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { style } from "./style";
import { DEFAULT_THEME } from "@/config/theme";


export type Props = {
    title: string;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    children?: ReactNode;
}

export default function Card({ title, iconName, children }: Props) {
    return (
        <View>
            <View style={style.titleContainer}>
                <MaterialIcons size={24} name={iconName} color={DEFAULT_THEME.PRIMARY_COLOR} />
                <Text style={style.title}>{title}</Text>
            </View>
            <View style={style.children}>
                {children}
            </View>
        </View>
    )
};
