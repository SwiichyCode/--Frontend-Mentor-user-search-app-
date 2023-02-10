import React, { useContext } from "react";
import { DataContext } from "../Result";
import * as S from "./styles";

export const Description = () => {
  const data = useContext(DataContext);

  return (
    <S.Container>
      {data
        ? data?.bio
        : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
    </S.Container>
  );
};
