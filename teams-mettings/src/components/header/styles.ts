import Styled from "styled-components/native";

export const Container = Styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

export const Logo = Styled.Image`
  width: 46px;
  height: 55px;
  `;

export const BackButton = Styled.TouchableOpacity`
    position: absolute;
    left: 0;
    margin-start: 16px;
`;

export const LogoContainer = Styled.View`
    flex: 1;
    justify-content: center;
`;

export const LogoCenter = Styled(LogoContainer)`
    align-items: center;
`;

export const LogoRight = Styled(LogoContainer)`
    align-items: flex-end;
    margin-end: 16px;
`;
