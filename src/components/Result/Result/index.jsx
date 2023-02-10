import React, { createContext } from "react";
import { Body } from "../Body";
import { Header } from "../Header";
import * as S from "./styles";

export const DataContext = createContext();

export const Result = ({ data }) => {
  return (
    <DataContext.Provider value={data}>
      <S.Container>
        <Header />
        <Body />
      </S.Container>
    </DataContext.Provider>
  );
};
