import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  gap: 1.9rem;
  margin-bottom: 3.3rem;

  @media screen and (min-width: 768px) {
    gap: 4.1rem;
  }

  div {
    ${({ theme }) => theme.mixins.flexColumn};
    font-size: 1.3rem;
    line-height: 1.9rem;

    h2 {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--color-dark);
      text-transform: capitalize;
    }

    span {
      color: var(--color-blue);
      margin-bottom: 0.6rem;
    }

    p {
      color: var(--color-grey-700);
    }

    @media screen and (min-width: 768px) {
      font-size: 1.6rem;

      h2 {
        font-size: 2.6rem;
        line-height: 2.6rem;
        margin-bottom: 0.4rem;
      }
    }
  }

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
    border-radius: 50%;
    background: var(--color-grey);

    @media screen and (min-width: 768px) {
      width: 11.7rem;
      height: 11.7rem;
    }
  }
`;
