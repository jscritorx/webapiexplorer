import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProviderDetails } from "../services";
import styled from "styled-components";

const ApiDetails: React.FC = () => {
  const { api } = useParams();

  const [apiDetails, setApiDetails] = useState<any>({});

  const navigate = useNavigate();

  useEffect(() => {
    const loadApiDetails = async () => {
      if (api) {
        const data = await fetchProviderDetails(api);
        const keys = Object.keys(data.apis)[0];
        const keysArr = keys.split(":");
        const obKeys = keysArr.length > 1 ? api + ":" + keysArr[1] : api;
        setApiDetails(data.apis[obKeys]);
      }
    };
    loadApiDetails();
  }, [api]);

  if (!apiDetails) return <div>Loading...</div>;

  return (
    <DetailsContainer>
      {apiDetails.info ? (
        <>
          <H1Container>
            <h1>{apiDetails.info.title}</h1>
          </H1Container>
          <InnerContainer>
            <h2>Description</h2>
            <p>{apiDetails.info.description}</p>
            <h2>Swagger</h2>
            <a
              href={apiDetails.info.swaggerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              API Documentation
            </a>
            {apiDetails.info.contact ? (
              <>
                <h2>Contact</h2>
                <p>Email : {apiDetails?.info?.contact?.email}</p>
                <p>Name : {apiDetails?.info?.contact?.name}</p>
                <p>URL : {apiDetails?.info?.contact?.url}</p>
              </>
            ) : (
              ""
            )}
          </InnerContainer>
          <CenteredButton onClick={() => navigate("/")}>
            Explore more APIs
          </CenteredButton>
        </>
      ) : (
        "Not Found"
      )}
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  background-color: #798174;
  padding: 20px;
  text-align: center;
`;

const H1Container = styled.div`
  text-align: center;
`;

const InnerContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  text-align: left;
`;

const CenteredButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

export default ApiDetails;
