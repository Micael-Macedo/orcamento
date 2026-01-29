import { FlatList, Text, View } from "react-native";

import { style } from "./style";

import Header from "@/shared/Header";
import { IOrcamento } from "@/interfaces/orcamento";
import OrcamentoItem from "@/shared/OrcamentoItem";
import { StatusEnum } from "@/interfaces/statusEnum";
import Input from "@/shared/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/shared/Button";
import { useEffect, useState } from "react";

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
            id: "2",
            items: [],
            title: "Mocoto",
            status: StatusEnum.RECUSADO,
            discountPct: "10",
            createdAt: "2024-06-01T10:00:00Z",
            updatedAt: "2024-06-05T15:30:00Z",
        },
        {
            client: "Soluções Tecnológicas Beta",
            id: "3",
            items: [],
            title: "Acerola",
            status: StatusEnum.RASCUNHO,
            discountPct: "10",
            createdAt: "2024-06-01T10:00:00Z",
            updatedAt: "2024-06-05T15:30:00Z",
        },
        {
            client: "Soluções Tecnológicas Beta",
            id: "4",
            items: [],
            title: "Cenoura",
            status: StatusEnum.RASCUNHO,
            discountPct: "10",
            createdAt: "2024-06-01T10:00:00Z",
            updatedAt: "2024-06-05T15:30:00Z",
        },
    ]

    const [input, setInput] = useState("");
    const [orcamentos, setOrcamentos] = useState<IOrcamento[]>(data);
    const [totalDrafts, setTotalDrafts] = useState(0);


    function handleInputChange(text: string) {
        if (text.length === 0) { return }

        const result = data

        const filteredData = orcamentos.filter(orcamento => 
            orcamento.title.toLowerCase().includes(text.toLowerCase()) ||
            orcamento.client.toLowerCase().includes(text.toLowerCase())
        );

        setOrcamentos(filteredData);
    }

    function handleNewOrcamento() {
        
    }

    useEffect(() => {
        handleInputChange(input)
    }, [input])

    useEffect(() => {
        const totalDrafts = orcamentos.filter(o => o.status === StatusEnum.RASCUNHO).length
        setTotalDrafts(totalDrafts);
    }, [orcamentos])

    return (
        <View style={style.container}>
            <Header totalDrafts={totalDrafts} />
            <View style={style.page}>
                <View style={style.filterContainer}>
                    <View style={style.searchContainer}>
                        <MaterialIcons name="search" size={24} />
                        <Input placeholder="Título ou cliente" onChangeText={setInput} value={input} />
                    </View>
                    <Button iconName="filter-list" label="" type="secondary" style={{ aspectRatio: 1 }} />
                </View>
                <FlatList
                    data={orcamentos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <OrcamentoItem data={item} />
                    )}
                    ItemSeparatorComponent={() => <View style={style.separator} />}
                    contentContainerStyle={style.listContent}
                    ListEmptyComponent={() => <Text>Nenhum orçamento encontrado</Text>}
                />
            </View>

        </View>
    )
};
