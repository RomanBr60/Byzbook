import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../utils/content/content";

export const AuthContext = createContext({
  generalContent: {},
});

export const AuthProvider = ({ children }) => {
  const [generalContent, setgeneralContent] = useState({});
  useEffect(() => {
    const foundGeneralContent = content.find((item) => item.name === `general`);
    setgeneralContent(foundGeneralContent);
  }, []);
  const contextValues = {
    generalContent,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
