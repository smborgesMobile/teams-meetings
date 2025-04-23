import { Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { ArrowArcLeft } from 'phosphor-react-native';

export function Header() {
    return (
        <Container>
            <ArrowArcLeft />
            <Logo source={logoImg} />
        </Container>
    )
}