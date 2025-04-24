import { Header } from "@/src/components/header";
import { HightLight } from "@/src/components/hightlight";
import { GroupCard } from "@/src/components/groupcard";
import { Container } from "./styles"

export function Groups() {
    return (
        <Container>
            <Header showBackButton={false} />
            <HightLight
                title="Turmas"
                subtitle="Jogue com sua turma" />
            <GroupCard
                onPress={() => { console.log("Grupo 1") }}
                title="Galera do Ignite" />
        </Container>
    );
}