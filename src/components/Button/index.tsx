import React from "react";
import { Container } from "./styled";
export interface Props {
  /** This is my favorite prop background */
  backgroundColor?: string;
  color: string;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#47328a",
  color,
}) => {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {children}
    </Container>
  );
};
