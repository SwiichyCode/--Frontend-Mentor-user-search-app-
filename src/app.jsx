import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Result } from "./components/Result/Result";
import { SearchBar } from "./components/SearchBar";
import { AppLayout } from "./layouts/AppLayout";
import { ThemeLayout } from "./layouts/ThemeLayout";

export const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef();

  const fetchGithub = async () => {
    const response = await fetch(
      `https://api.github.com/users/${inputRef.current.value}`
    );
    const data = await response.json();
    setData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      fetchGithub();
      setLoading(false);
    }, 2000);
  };

  return (
    <ThemeLayout>
      <Container>
        <AppLayout>
          <Header />
          <SearchBar
            handleSubmit={handleSubmit}
            inputRef={inputRef}
            error={error}
          />
          <Result data={data} loading={loading} error={error} />
        </AppLayout>
      </Container>
    </ThemeLayout>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  height: 100vh;
  background: var(--bg);
`;
