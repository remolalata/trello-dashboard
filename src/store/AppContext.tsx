import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

interface State {
  userData: any;
}

const initialState: State = {
  userData: {},
};

type Action = { type: "SET_USER"; payload: string };

const AppContext = createContext<{ state: State; dispatch: Dispatch<Action> } | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
