import { FlatList, Text, View } from "react-native";
import { useState } from "react";

import Button from "@/shared/Button";
import Card from "@/shared/Card";
import Input from "@/shared/Input";
import { IServiceItem } from "@/interfaces/serviceItem";
import ServiceItem from "@/shared/ServiceItem";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { style } from "./style";

export default function Orcamento({ navigation }: StackRoutesProps<'orcamento'>) {
    const [servicos, setServicos] = useState<IServiceItem[]>([]);

    function handleCancel() {
        navigation.goBack()
    }
    function handleSave() {

    }

    function handleOpenService(service?: IServiceItem) {
        if(!service) {
            navigation.navigate('servico');
            return;
        }
        navigation.navigate('servico', { id: service.id });
    }

    return (
        <View style={style.container}>
            <Card title="Informações gerais" iconName="store">
                <Input
                style={style.defaultInput}
                placeholder="Titulo" />
                <Input
                style={style.defaultInput}
                placeholder="Cliente" />
            </Card>

            <Card title="Status" iconName="discount">
                <Input placeholder="Titulo" />
                <Input placeholder="Cliente" />
            </Card>

            <Card title="Serviços inclusos" iconName="discount">
                <FlatList
                    data={servicos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>

                            <ServiceItem data={item}/>
                            <Button 
                                type="secondary" 
                                label="" 
                                onPress={() =>handleOpenService(item)} />
                        </View>
                    )}
                    ListEmptyComponent={() => <Text>Nenhum serviço encontrado</Text>}
                />
                <Button iconName="add" label="Adicionar serviço" type="secondary" onPress={() => handleOpenService()}  />
            </Card>

            <Card title="Investimento" iconName="credit-card">
                <View></View>
                <View></View>
                <View>
                    <Text>
                        Valor Total
                    </Text>
                    <View></View>
                </View>
            </Card>

            <View style={style.actions}>
                <Button label="Cancelar" type="secondary" onPress={handleCancel} />
                <Button label="Salvar" iconName="check" type="primary" onPress={handleSave} />
            </View>
        </View>
    )
};
