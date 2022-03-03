import React from "react";
import { Container } from "./styled";
interface Props {
  /** This is my favorite prop background */
  backgroundColor?: string;
  color: string;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#47328a",
  color,
}) => {
  return <Container>{children}</Container>;
};
