import { Title, Container } from "./styles"


type Props = {
    title: string;
}

export function EmptyState({ title }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}