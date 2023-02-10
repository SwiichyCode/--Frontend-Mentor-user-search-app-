import React, { createContext } from "react";
import { Body } from "../Body";
import { Header } from "../Header";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";
import * as S from "./styles";

export const DataContext = createContext();

export const Result = ({ data, loading }) => {
  return loading ? (
    <S.SpinnerContainer>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
      />
    </S.SpinnerContainer>
  ) : (
    <DataContext.Provider value={data}>
      <S.Container
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Body />
      </S.Container>
    </DataContext.Provider>
  );
};
