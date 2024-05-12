"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/utils/types";

type UserContextProps = {
  user: User;
  avatarUrl: string;
  hasPostedDailyBibe: boolean;
  setHasPostedDailyBibe: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserContextValue = UserContextProps | null;

const UserContext = createContext<UserContextValue | null>(null);

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
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLNCSXiCklryaqk7ILVUACkuIrKmdqsaJMWoWO42nx77VitnWg=s96-c",
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
