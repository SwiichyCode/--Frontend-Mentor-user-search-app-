import React from "react";
import iconSearch from "../../assets/icon-search.svg";
import * as S from "./styles";

export const SearchBar = ({ handleSubmit, inputRef }) => {
  return (
    <S.Container>
      <div className="wrapper">
        <img src={iconSearch} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search GitHub username…"
        />
      </div>

      <button onClick={handleSubmit}>search</button>
    </S.Container>
  );
};
