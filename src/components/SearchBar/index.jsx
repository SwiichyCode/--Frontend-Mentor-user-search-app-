import React from "react";
import iconSearch from "../../assets/icon-search.svg";
import * as S from "./styles";

export const SearchBar = ({ handleSubmit, inputRef, error }) => {
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
      <div className="wrapper">
        {error && <S.ErrorMessage>no results</S.ErrorMessage>}
        <button onClick={handleSubmit}>search</button>
      </div>
    </S.Container>
  );
};
