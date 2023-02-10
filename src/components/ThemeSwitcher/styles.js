import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  gap: 1.6rem;
  color: var(--color-blue-600);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #222731;
  }

  span {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.9rem;
    letter-spacing: 2.5px;

    text-transform: uppercase;
  }
`;
