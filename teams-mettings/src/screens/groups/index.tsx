import { Header } from "@/src/components/header";
import { HightLight } from "@/src/components/hightlight";
import { GroupCard } from "@/src/components/groupcard";
import { Container } from "./styles"
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
    const [groups, setGroups] = useState<string[]>([
        "Rocket Seat",
        "Galera do Ignite",
        "Turma do React Native"]);

    return (
        <Container>
            <Header showBackButton={false} />
            <HightLight
                title="Turmas"
                subtitle="Jogue com sua turma" />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => { console.log(item) }} />
                )}
            />
        </Container>
    );
}