import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleTypeProps = {
  type: "PRIMARY" | "SECONDARY";
};

export const Container = styled(TouchableOpacity)<ButtonStyleTypeProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  padding: 16px;
`;

export const Title = styled.Text`
  text-align: center;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
