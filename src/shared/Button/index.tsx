import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { DEFAULT_THEME } from "@/config/theme";

export interface ButtonProps extends TouchableOpacityProps {
    iconName?: keyof typeof MaterialIcons.glyphMap;
    label: string
    type: "primary" | "secondary"
}

export default function Button({ type, onPress, iconName, label, ...rest }: ButtonProps) {
    const typeButton = type === 'primary' ? style.primary : style.secondary;
    const colorButton = type === 'primary' ? DEFAULT_THEME.BACKGROUND_COLOR : DEFAULT_THEME.PRIMARY_COLOR;
    
    return (
        <TouchableOpacity onPress={onPress} {...rest} style={ [typeButton, style.baseInput] }>
            <MaterialIcons name={iconName} size={24} color={colorButton} />
            {label.length > 0  && (
                <Text style={{ color: colorButton }}>{label}</Text>
            )}
        </TouchableOpacity>
    )
};
