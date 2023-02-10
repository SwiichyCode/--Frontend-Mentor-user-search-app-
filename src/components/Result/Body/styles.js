import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 2.3rem;

  @media screen and (min-width: 768px) {
    gap: 3.2rem;
  }
`;
