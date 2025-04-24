import React from "react";
import { Container, Logo, BackButton, LogoCenter, LogoRight } from "./styles";
import logoImg from "@assets/logo.png";
import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

interface HeaderProps {
    onBackPress?: () => void;
    showBackButton?: boolean;
}

export function Header({ onBackPress, showBackButton = true }: HeaderProps) {
    return (
        <Container>
            {showBackButton && (
                <BackButton>
                    <TouchableOpacity onPress={onBackPress}>
                        <CaretLeft color="#fff" />
                    </TouchableOpacity>
                </BackButton>
            )}

            {
                showBackButton ? (
                    <LogoRight>
                        <Logo source={logoImg} />
                    </LogoRight>
                ) : (
                    <LogoCenter>
                        <Logo source={logoImg} />
                    </LogoCenter>
                )
            }
        </Container>
    );
}