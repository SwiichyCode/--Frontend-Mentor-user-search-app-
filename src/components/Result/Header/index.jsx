import React, { useContext } from "react";
import { DataContext } from "../Result";
import userLogo from "../../../assets/Octocat-github.png";
import * as S from "./styles";

export const Header = () => {
  const data = useContext(DataContext);

  return (
    <S.Container>
      <img src={data ? data?.avatar_url : userLogo} alt="user logo" />
      <div>
        <h2>{data ? data?.login : "the octocat"}</h2>
        <span>{data ? data?.login : "@octocat"}</span>
        <p>Joined 25 Jan 2011</p>
      </div>
    </S.Container>
  );
};
