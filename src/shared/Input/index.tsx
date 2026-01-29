import { TextInput, TextInputProps, View } from "react-native";
import { style } from "./style";


export interface InputProps extends TextInputProps {
    placeholder: string
}

export default function Input({ placeholder ,...rest} : InputProps) {
    return(
        <TextInput style={style.container} placeholder={placeholder} {...rest} />
    )
};
 