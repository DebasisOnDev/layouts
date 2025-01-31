"use client";
import type React from "react";
import { createContext, useState } from "react";
import Sidebar from "./(components)/Sidebar";

interface SidebarContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

const FirstLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className="w-full h-full flex bg-neutral-950">
        <Sidebar />
        <div
          className={`flex-1 min-h-screen transition-all duration-300 ${
            open ? "ml-[220px]" : "ml-[45px]"
          }`}
        >
          <div className="w-full min-h-screen bg-[#0f0f10] ">{children}</div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default FirstLayout;
