import React, { createContext, useContext, useReducer } from "react";

// Intitalize Data layer
export const StateContext = createContext();

// State Provider
export const StateProvider = ({ reducer, intialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
      {children}
    </StateContext.Provider>
  );
};

// To Make things Preety and not have a consumer tag
// everytime we need the provider we can use useContext
// Put it into our own hook so we dont need to impoert state context and use context every time
export const useStateValue = () => useContext(StateContext);
