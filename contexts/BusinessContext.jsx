import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../utils/content/content";
import { getPost } from "../api";

export const BusinessContext = createContext({
  generalContent: {},
});

export const BusinessProvider = ({ children }) => {
  const [businessList, setBusinessList] = useState({});
  useEffect(() => {}, []);
  const contextValues = {
    generalContent,
  };
  return (
    <BusinessContext.Provider value={contextValues}>
      {children}
    </BusinessContext.Provider>
  );
};
