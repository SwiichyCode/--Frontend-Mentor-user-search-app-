import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
  ${({ theme }) => theme.mixins.flexBetween};
  gap: 0.7rem;
  background: var(--color-white);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding-left: 1.6rem;
  padding-right: 0.7rem;
  margin-bottom: 1.6rem;

  .wrapper {
    width: 100%;
    ${({ theme }) => theme.mixins.flexAlignCenter};
    justify-content: flex-end;
    gap: 0.9rem;

    @media screen and (min-width: 768px) {
      gap: 2.3rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;

    @media screen and (min-width: 768px) {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  input {
    width: 100%;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.5rem;
    color: var(--color-blue-600);
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  button {
    width: fit-content;
    height: 4.6rem;
    ${({ theme }) => theme.mixins.flexCenter};
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: capitalize;
    color: var(--color-white);
    background: var(--color-blue);
    border-radius: 10px;
    border: none;

    padding: 0 1.4rem 0 1.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #60abff;
    }

    @media screen and (min-width: 768px) {
      padding: 0 2.4rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #f74646;
  text-transform: capitalize;
`;
