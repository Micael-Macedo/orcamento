import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { style } from "./style";

export interface InputProps extends TextInputProps {
    placeholder: string
}

export default function QtdInput() {
    const [qtd, setQtd] = useState(1);

    function handlePlus(){
        setQtd(old => old + 1);
    }

    function handleMinus(){
        setQtd(old => old > 1 ? old -1 : 1);
    }

    return (
        <View style={style.container}>
            <TouchableOpacity>
                <MaterialIcons
                    size={24}
                    name="arrow-left"
                    onPress={handleMinus}
                />

            </TouchableOpacity>
            <TextInput 
            value={qtd.toString()} />
            <TouchableOpacity>
                <MaterialIcons
                    size={24}
                    name="arrow-right"
                    onPress={handlePlus}
                />
            </TouchableOpacity>
        </View>
    )
};
