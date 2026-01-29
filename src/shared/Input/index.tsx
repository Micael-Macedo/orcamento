import { TextInput, TextInputProps, View } from "react-native";


export interface InputProps extends TextInputProps {
    placeholder: string
}

export default function Input({ placeholder ,...rest} : InputProps) {
    return(
        <TextInput placeholder={placeholder} {...rest} />
    )
};
 