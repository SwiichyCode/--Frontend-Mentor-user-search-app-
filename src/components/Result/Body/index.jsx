import React from "react";
import { Description } from "../Description";
import { Link } from "../Link";
import { Statistical } from "../Statistical";
import * as S from "./styles";

export const Body = () => {
  return (
    <S.Container>
      <Description />
      <Statistical />
      <Link />
    </S.Container>
  );
};
