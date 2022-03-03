import React from "react";
interface Props {
  /** This is my favorite prop background */
  backgroundColor?: string;
  color: string;
}

const style: React.CSSProperties = {
  background: "#7159c1",
  color: "#fff",
};
export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#47328a",
  color,
}) => {
  return <button style={style}>{children}</button>;
};
