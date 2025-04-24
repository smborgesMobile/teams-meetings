import { Header } from "@/src/components/header";
import { HightLight } from "@/src/components/hightlight";
import { GroupCard } from "@/src/components/groupcard";
import { Container } from "./styles"
import { useState } from "react";
import { FlatList } from "react-native";
import { EmptyState } from "@/src/components/emptystate";
import { Button } from "@/src/components/button";

export function Groups() {
    const [groups, setGroups] = useState<string[]>([
    ]);

    return (
        <Container>
            <Header showBackButton={false} />
            <HightLight
                title="Turmas"
                subtitle="Jogue com sua turma" />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                ListEmptyComponent={<EmptyState title="Ainda não existem turmas cadastradas. Que tal criar sua primeira turma?" />}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => { console.log(item) }} />
                )}
            />
            <Button
                title="Criar nova turma"
                buttonType="PRIMARY"
                onPress={() => { console.log("Criar nova turma") }}
            />
        </Container>
    );
}