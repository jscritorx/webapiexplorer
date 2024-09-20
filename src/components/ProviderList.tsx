import React, { useEffect, useState } from "react";
import { fetchProviders } from "../services";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProvidersList: React.FC = () => {
  const [providers, setProviders] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadProviders = async () => {
      const data = await fetchProviders();
      setProviders(data);
    };
    loadProviders();
  }, []);

  return (
    <Container>
      <h1>Select Provider</h1>
      {providers && providers.length > 0 ? (
        <StyledUl>
          {providers.map((api: string) => (
            <StyledLi key={api}>
              <Link style={{ color: "#fff" }} to={`/${api}`}>
                {api}
              </Link>
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        "No Provider Found"
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  background-color: #3f5f7a;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 10px;
  list-style: none;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const StyledLi = styled.li`
  padding: 10px;
  margin: 5px 0;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  align-items: right;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  font-color: #ffffff;

  &:hover {
    background-color: #55768e;
  }
`;

export default ProvidersList;
