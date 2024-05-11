"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/utils/types";

type UserContextProps = {
  user: User;
  hasPostedDailyBibe: boolean;
  setHasPostedDailyBibe: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserContextValue = UserContextProps | null;

const UserContext = createContext<UserContextValue>({
  user: {
    userId: "fake-user-id",
    displayName: "Sean Marinas",
  },
  hasPostedDailyBibe: false,
  setHasPostedDailyBibe: () => {},
});

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [hasPostedDailyBibe, setHasPostedDailyBibe] = useState(false);

  const value = {
    user: {
      userId: "fake-user-id",
      displayName: "Sean Marinas",
    },
    hasPostedDailyBibe: hasPostedDailyBibe,
    setHasPostedDailyBibe: setHasPostedDailyBibe,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext(): UserContextProps {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useUserData must be used within a UserContextProvider");
  }

  return context;
}
