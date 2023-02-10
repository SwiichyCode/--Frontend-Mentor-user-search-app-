import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  margin-bottom: 3.6rem;

  h1 {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 3.9rem;
    color: var(--logo);
  }
`;
