import React from "react";
import styled from "styled-components";

export const AppLayout = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

const AppContainer = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  justify-content: space-between;
  width: 100%;
  max-width: 730px;
  padding: 0 2.4rem;
  user-select: none;
`;
