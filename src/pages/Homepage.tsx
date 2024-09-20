import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string>("open");

  const toggleSidebar = () => {
    const newState = isOpen === "open" ? "close" : "open";
    setIsOpen(newState);
  };

  return (
    <>
      <CenterContainer>
        <CenteredButton onClick={() => toggleSidebar()}>
          Explore web APIs
        </CenteredButton>
      </CenterContainer>
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={isOpen} />
      </div>
    </>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center; // Horizontally centers the button
  align-items: center; // Vertically centers the button
  height: 100vh; // Full height of the viewport
  background-color: #3F5E7A;
`;

// Simple button
const CenteredButton = styled.button`
  padding: 10px 20px;
  background-color: #049DD2;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

export default HomePage;
