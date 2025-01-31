"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  CreditCard,
  LogOut,
  MonitorSmartphone,
  MoonStar,
  Settings,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SidebarContext } from "../layout";
import Link from "next/link";

function AccountPopover() {
  const context = React.useContext(SidebarContext);
  const { open } = context!;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex w-full items-center gap-3 rounded-lg mx-auto bg-neutral-950 text-left text-sm transition-all duration-300 hover:bg-neutral-800/95 ${
            open ? "p-1" : "p-0"
          }`}
        >
          <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-800 via-blue-400 to-sky-300" />
          <div
            className={`flex flex-1 items-center justify-between transition-all duration-300 ease-in-out ${
              open
                ? "opacity-100 max-w-full"
                : "opacity-0 max-w-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col items-start min-w-0">
              <span className="truncate max-w-[120px] font-medium text-neutral-200">
                demo20937jsdf@gmail.com
              </span>
              <span className="text-xs text-neutral-400">Free</span>
            </div>
            <span className="flex-shrink-0">
              <ChevronsUpDown size={18} />
            </span>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={5}
        className="w-60 ml-1 h-auto bg-[#141415] rounded-xl border border-gray-200/20  p-0 text-neutral-200"
      >
        <div className=" flex flex-col gap-2 p-2">
          <span className="  text-sm text-[#a1a1aa] font-medium">
            {" "}
            demo20937jsdf@gmail.com
          </span>
          <div className=" flex gap-2 p-1 text-sm items-center justify-start ">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-800 via-blue-400 to-sky-300" />
            <div className=" flex flex-col text-sm">
              <span className=" text-white">demo20937jsdf-gmail.com</span>
              <span className="text-[#a1a1aa]">Free</span>
            </div>
          </div>
          <Button
            className=" w-full border hover:bg-gray-200/10 transition-all bg-[#141415] text-sm font-[520] text-white border-gray-200/20"
            size={"sm"}
          >
            Switch Team
          </Button>
        </div>

        <div className=" p-2 flex flex-col items-center border-y border-gray-200/20 justify-start">
          <Link
            href={"#"}
            className=" w-full px-2 py-1 hover:bg-gray-200/10 transition-all rounded-lg flex items-center justify-start gap-2 group"
          >
            {" "}
            <span>
              <CreditCard
                size={18}
                className=" text-[#a1a1aa] group-hover:text-white"
              />
            </span>
            <span className=" font-medium text-white text-sm">Billing</span>{" "}
          </Link>
          <Link
            href={"#"}
            className=" w-full px-2 py-1 hover:bg-gray-200/10 transition-all rounded-lg flex items-center justify-start gap-2 group"
          >
            {" "}
            <span>
              <Settings
                size={18}
                className=" text-[#a1a1aa] group-hover:text-white"
              />
            </span>
            <span className=" font-medium text-white text-sm">Setting</span>{" "}
          </Link>
          <Link
            href={"#"}
            className=" w-full px-2 py-1 hover:bg-gray-200/10 transition-all rounded-lg flex items-center justify-start gap-2 group"
          >
            {" "}
            <span>
              <LogOut
                size={18}
                className=" text-[#a1a1aa] group-hover:text-white"
              />
            </span>
            <span className=" font-medium text-white text-sm">Sign Out</span>{" "}
          </Link>
        </div>

        <div className=" p-4 flex gap-2 flex-col items-start justify-center">
          <span className="text-[#a1a1aa] text-sm font-medium">
            Preferences
          </span>
          <div className=" flex items-center justify-between w-full">
            <span className=" text-white text-sm">Theme</span>
            <div className=" h-5 rounded-full flex overflow-hidden items-center justify-between gap-1 border border-gray-200/15 w-16">
              <MonitorSmartphone
                size={16}
                className=" border h-full w-auto p-[2px] z-10 rounded-full border-gray-200/15"
              />
              <Sun size={16} className="text-[#a1a1aa] " />
              <MoonStar size={16} className="text-[#a1a1aa] " />
            </div>
          </div>
          <div className=" flex items-center justify-between w-full">
            <span className=" text-white text-sm">Language</span>
            <Select defaultValue="en">
              <SelectTrigger className="w-[85px] outline-hidden ring-0 ring-transparent focus:outline-none text-sm px-2 p-1 h-6 border border-gray-200/15 rounded-lg">
                <SelectValue defaultValue={"en"} />
              </SelectTrigger>
              <SelectContent
                defaultValue={"en"}
                side="bottom"
                sideOffset={5}
                className="  border-gray-200/15 border rounded-xl text-sm bg-neutral-950"
              >
                <SelectItem className=" hover:bg-gray-200/20" value="en">
                  English
                </SelectItem>
                <SelectItem className=" hover:bg-gray-200/20" value="fr">
                  French
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" p-1">
          <Button
            size={"sm"}
            className=" bg-white text-neutral-950 hover:bg-[#f1f5f9] transition-all font-[520] text-sm w-full rounded-lg"
          >
            Upgrade Plan
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default AccountPopover;
