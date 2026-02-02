import { StackRoutesProps } from "@/routes/StackRoutes";
import Input from "@/shared/Input";
import { Text, View } from "react-native";
import { style } from "./style";
import { useState } from "react";
import Button from "@/shared/Button";
import QtdInput from "@/shared/QtdInput";

export default function Servico({ navigation }: StackRoutesProps<'servico'>) {
    const [qtd, setQtd] = useState(1);
    
    function handleDeleteAction(){

    }

    function handleSaveAction(){

    }

    function handleUpdateQtd(){

    }

    return(
        <View>
            <Text>Serviço</Text>
            <Input style={style.defaultInput} placeholder="Título" value="" />
            <Input style={style.defaultInput} placeholder="Descrição" value="" />
            <QtdInput />
            <View>
                <Button type="secondary" iconName="delete" label="" onPress={handleDeleteAction} />
                <Button type="primary" label="Salvar" onPress={handleSaveAction} />
            </View>
        </View>
    )
};
