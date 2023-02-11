import React, { useContext } from "react";
import { DataContext } from "../Result";
import * as S from "./styles";

export const Statistical = () => {
  const data = useContext(DataContext);
  return (
    <S.Container>
      <div className="wrapper">
        <ul>
          <li>
            <h3>Repos</h3>
            <span>{data ? data?.public_repos : "8"}</span>
          </li>
          <li>
            <h3>Followers</h3>
            <span>{data ? data?.followers : "3938"}</span>
          </li>
          <li>
            <h3>Following</h3>
            <span>{data ? data?.following : "9"}</span>
          </li>
        </ul>
      </div>
    </S.Container>
  );
};
