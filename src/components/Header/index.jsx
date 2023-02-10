import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <h1>devfinder</h1>
      <ThemeSwitcher />
    </S.Container>
  );
};
