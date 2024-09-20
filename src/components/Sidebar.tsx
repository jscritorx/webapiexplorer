// SidebarComponent.tsx
import React from "react";
import styled from "styled-components";
import ProvidersList from "./ProviderList";

// Define a sidebar using styled-components
const Sidebar = styled.div<{ isOpen: string }>`
  height: 100vh;
  width: ${(props) => (props.isOpen === "open" ? "450px" : "0")};
  position: fixed;
  top: 0;
  right: 0;
  background-color: #333;
  color: white;
  overflow-x: hidden;
  transition: 0.3s;
  text-align: center;

  & > a {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 1.5em;
    color: white;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #575757;
    }
  }
`;

const SidebarComponent: React.FC<{
  isOpen: string;
}> = ({ isOpen }) => {
  return (
    <Sidebar isOpen={isOpen}>
      <ProvidersList />
    </Sidebar>
  );
};

export default SidebarComponent;
