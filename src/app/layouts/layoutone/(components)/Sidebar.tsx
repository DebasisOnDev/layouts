"use client";

import React, { useContext } from "react";
import { SidebarContext } from "../layout";
import Link from "next/link";

import {
  PanelLeft,
  Dices,
  Plus,
  BookOpen,
  FolderClosed,
  CircleHelp,
  Ellipsis,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

import AccountPopover from "./AccountPopover";

const Sidebar = () => {
  const context = useContext(SidebarContext);
  const { open, setOpen } = context!;

  return (
    <div
      className={`${
        open ? "w-[220px]" : "w-[45px]"
      } transition-all duration-350 h-screen text-sm fixed left-0 top-0 bg-neutral-950 z-50 border-r border-gray-200/20 flex flex-col`}
    >
      <div className="flex-none">
        <div className="flex items-center justify-between p-2 w-full">
          <Link prefetch={false} href={"#"}>
            <Dices size={29} className="text-white" />
          </Link>
          <button
            className={`${
              open ? "block" : "hidden"
            } p-[4px] rounded-lg hover:bg-gray-100/15 transition-all`}
            onClick={() => setOpen(!open)}
          >
            <PanelLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-2 mb-2 border-b border-gray-100/20 items-center p-2 w-full">
          <Link
            href={"/layouts/layoutone"}
            className="w-full px-1 py-1 font-normal text-center ring-[0.25px] ring-gray-400/95 rounded-lg text-white hover:bg-gray-100/15"
          >
            <span className="text-center flex items-center justify-center">
              {open ? "New Chat" : <Plus size={22} />}
            </span>
          </Link>
          <Link
            className="w-full px-1 py-1 font-normal text-left rounded-lg text-white hover:bg-gray-100/15"
            href={"#"}
          >
            <span
              className={`${
                open ? " justify-start" : "justify-center"
              } flex items-center `}
            >
              <BookOpen size={18} />
              <span
                className={`${
                  open
                    ? "opacity-100 translate-x-0 ml-1.5"
                    : "opacity-0 -translate-x-4 w-0"
                } transform transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                Library
              </span>
            </span>
          </Link>

          <Link
            className="w-full px-1 py-1 font-normal text-left rounded-lg text-white hover:bg-gray-100/15"
            href={"#"}
          >
            <span
              className={`${
                open ? " justify-start" : " justify-center"
              } flex items-center`}
            >
              <FolderClosed size={18} />
              <span
                className={`${
                  open
                    ? "opacity-100 translate-x-0 ml-1.5"
                    : "opacity-0 -translate-x-4 w-0"
                } transform transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                Projects
              </span>
            </span>
          </Link>

          <Link
            className="w-full px-1 py-1 font-normal text-left rounded-lg text-white hover:bg-gray-100/15"
            href={"#"}
          >
            <span
              className={`${
                open ? " justify-start" : " justify-center"
              } flex items-center`}
            >
              <CircleHelp size={18} />
              <span
                className={`${
                  open
                    ? "opacity-100 translate-x-0 ml-1.5"
                    : "opacity-0 -translate-x-4 w-0"
                } transform transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                Feedback
              </span>
            </span>
          </Link>
        </div>
      </div>
      <ScrollArea
        className={` ${
          open ? "opacity-100 " : "opacity-0"
        } transition-all ease-in-out flex-grow overflow-y-auto`}
      >
        {open && (
          <div className="flex flex-col gap-2 p-2  w-full">
            <h3 className="text-sm text-gray-100/50 px-2 py-1 text-left w-full">
              Favorite Chats
            </h3>
            <div className="flex flex-col gap-1">
              <Link
                className="w-full px-1.5 py-[3px] flex mx-auto items-center justify-between gap-2 text-white group hover:bg-gray-100/15 rounded-lg"
                href="#"
              >
                <span className="text-ellipsis line-clamp-1 w-full font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  porro.
                </span>
                <button className="p-[4px] rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100/15 transition-opacity duration-200">
                  <Ellipsis size={18} />
                </button>
              </Link>
              <Link
                className="w-full px-1.5 py-[3px] flex mx-auto items-center justify-between gap-2 text-white group hover:bg-gray-100/15 rounded-lg"
                href="#"
              >
                <span className="text-ellipsis line-clamp-1 w-full font-normal">
                  Lorem ipsum dolor sit amet.
                </span>
                <button className="p-[4px] rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100/15 transition-opacity duration-200">
                  <Ellipsis size={18} />
                </button>
              </Link>
            </div>
            <h3 className="text-sm text-gray-100/50 pt-3 px-2 py-1 text-left w-full">
              Recent Chats
            </h3>
            <div className="flex flex-col gap-1">
              {[...Array(12)].map((_, i) => (
                <Link
                  key={i}
                  className="w-full px-1.5 py-[3px] flex mx-auto items-center justify-between gap-2 text-white group hover:bg-gray-100/15 rounded-lg"
                  href="#"
                >
                  <span className="text-ellipsis line-clamp-1 w-full font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, porro.
                  </span>
                  <button className="p-[4px] rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100/15 transition-opacity duration-200">
                    <Ellipsis size={18} />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
      <div className=" w-full ">
        <div className=" fixed flex flex-col gap-2 overflow-hidden bottom-0 mx-auto text-center right-0.5 p-2 w-full">
          <button
            onClick={() => setOpen(!open)}
            className={`${
              open ? "hidden" : "block"
            } p-[4px] w-fit flex items-center justify-center text-center rounded-lg  hover:bg-gray-100/15 transition-all`}
          >
            <PanelLeft size={24} className="text-white" />
          </button>
          <div
            className={`${
              open ? " w-[205px] h-8" : "h-8 w-8 "
            } flex items-center justify-center    `}
          >
            <AccountPopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
