import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-grey);
  border-radius: 1rem;
  padding: 1.8rem 1.4rem 1.9rem 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 1.8rem 3.2rem;
  }

  ul {
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 768px) {
      width: 100%;
      max-width: 80%;
      justify-content: space-between;
    }

    li {
      ${({ theme }) => theme.mixins.flexColumn};
      gap: 0.8rem;

      h3 {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.6rem;
        color: var(--color-blue-600);
      }

      span {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-dark);
      }

      @media screen and (min-width: 768px) {
        h3 {
          font-size: 1.3rem;
        }

        span {
          font-size: 2.2rem;
        }
      }
    }
  }
`;
