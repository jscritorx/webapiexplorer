import axios from "axios";

const API_BASE_URL = "https://api.apis.guru/v2";

export const fetchProviders = async () => {
  const response = await axios.get(`${API_BASE_URL}/providers.json`);
  return response.data.data;
};

export const fetchProviderDetails = async (providerName: string) => {
  const response = await axios.get(`${API_BASE_URL}/${providerName}.json`);
  console.log('--response--', response)
  return response.data;
};
