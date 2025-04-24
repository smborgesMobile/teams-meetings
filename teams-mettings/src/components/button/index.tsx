import { Container, Title } from './styles'
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    buttonType: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, buttonType, ...rest }: Props) {
    return (
        <Container type={buttonType} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}