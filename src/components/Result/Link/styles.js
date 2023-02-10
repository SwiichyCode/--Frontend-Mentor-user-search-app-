import styled from "styled-components";

export const Container = styled.ul`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: flex-start;
  gap: 1.6rem;

  @media screen and (min-width: 768px) {
    max-width: 42.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    width: 100%;
    max-width: 20rem;
    ${({ theme }) => theme.mixins.flexCenter};
    justify-content: flex-start;
    gap: 1.92rem;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.9rem;
    color: #4b6a9b;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    div {
      ${({ theme }) => theme.mixins.flexCenter};
      width: 2rem;
      height: 2rem;
    }

    a {
      text-decoration: none;
      color: #4b6a9b;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
