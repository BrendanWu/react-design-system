import * as React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// import * as OswaldVariable from "./assets/Oswald_VariableFont_wght.ttf";
// import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'OswaldVariable';
  src: url("./assets/Oswald_VariableFont_wght.ttf") format('ttf');
      
}
`;

export default FontStyles;
const StyledText = styled.p`
  font-family: "CentraNo2-Thin";
  font-size: 12px;
  font-weight: 400;

  color: #1c1c1c;
`;

interface Props {
  text?: string;
}

export const Text: React.FC<Props> = (props) => {
  return (
    <>
      <FontStyles />
      <StyledText>{props.text}</StyledText>
    </>
  );
};
