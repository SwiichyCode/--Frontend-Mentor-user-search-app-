import React, { useContext } from "react";
import { DataContext } from "../Result";
import { generateItem } from "./data";
import * as S from "./styles";

export const Link = () => {
  const data = useContext(DataContext);

  return (
    <S.Container>
      {generateItem(data).map(({ icon, text, available }) => (
        <S.Item available={available}>
          <div>
            <img src={icon} />
          </div>

          <span>{text}</span>
        </S.Item>
      ))}
    </S.Container>
  );
};
