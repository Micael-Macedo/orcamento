import { FlatList, View } from "react-native";

import { style } from "./style";

import Header from "@/shared/Header";
import { IOrcamento } from "@/interfaces/orcamento";
import OrcamentoItem from "@/shared/OrcamentoItem";
import { StatusEnum } from "@/interfaces/statusEnum";
import Input from "@/shared/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/shared/Button";

export default function Home() {
    const data: IOrcamento[] = [
        {
            client: "Soluções Tecnológicas Beta",
            id: "1",
            items: [],
            title: "Desenvolvimento de aplicativo de loja online",
            status: StatusEnum.APROVADO,
            discountPct: "10",
            createdAt: "2024-06-01T10:00:00Z",
            updatedAt: "2024-06-05T15:30:00Z",
        },
        {
            client: "Soluções Tecnológicas Beta",
            id: "2 ",
            items: [],
            title: "Desenvolvimento de aplicativo de loja online",
            status: StatusEnum.RECUSADO,
            discountPct: "10",
            createdAt: "2024-06-01T10:00:00Z",
            updatedAt: "2024-06-05T15:30:00Z",
        },
    ]

    return (
        <View style={style.container}>
            <Header totalDrafts={1} />
            <View style={style.page}>
                <View style={style.filterContainer}>
                    <View style={style.searchContainer}>
                        <MaterialIcons name="search" size={24} />
                        <Input placeholder="Título ou cliente" />
                    </View>
                    <Button iconName="filter-list" label="" type="secondary" />
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <OrcamentoItem data={item} />
                    )}
                />
            </View>

        </View>
    )
};
