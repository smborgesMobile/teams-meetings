import React from "react";
import { Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity, StyleSheet, View } from "react-native";

interface HeaderProps {
    onBackPress?: () => void;
    showBackButton?: boolean;
}

export function Header({ onBackPress, showBackButton = true }: HeaderProps) {
    return (
        <Container>
            {showBackButton && (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <CaretLeft color="#fff" />
                </TouchableOpacity>
            )}
            <View style={[styles.logoContainer, showBackButton ? styles.logoRight : styles.logoCenter]}>
                <Logo source={logoImg} />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 0,
        marginStart: 16,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logoCenter: {
        alignItems: 'center',
    },
    logoRight: {
        alignItems: 'flex-end',
        marginEnd: 16,
    },
});
