import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "./Result";

export const Statistical = () => {
  const data = useContext(DataContext);
  return (
    <Container>
      <div className="wrapper">
        <ul>
          <li>
            <h3>Repos</h3>
            <span>{data ? data?.public_repos : "8"}</span>
          </li>
          <li>
            <h3>Followers</h3>
            <span>{data ? data?.followers : "3938"}</span>
          </li>
          <li>
            <h3>Following</h3>
            <span>{data ? data?.following : "9"}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: var(--color-grey);
  border-radius: 10px;
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
        color: #4b6a9b;
      }

      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: #2b3442;
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
