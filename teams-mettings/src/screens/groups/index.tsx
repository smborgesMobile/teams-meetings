import { Header } from "@/src/components/header";
import { HightLight } from "@/src/components/hightlight";
import { Container } from "./styles"

export function Groups() {
    return (
        <Container>
            <Header />
            <HightLight
                title="Turmas"
                subtitle="Jogue com sua turma" />
        </Container>
    );
}