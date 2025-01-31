"use client";

import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  Lock,
  AppWindowMac,
  Code,
  SquareTerminal,
  SquareDashedBottomCode,
  GitBranch,
  Upload,
  Triangle,
} from "lucide-react";
import { useEffect, useState } from "react";
import PreviewTab from "../(components)/PreviewTab";
import CodeTab from "../(components)/CodeTab";
import ConsoleTab from "../(components)/ConsoleTab";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import ChatBox from "../(components)/ChatBox";

export default function ResizablePanels() {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "console">(
    "preview"
  );
  const [rightPanelWidth, setRightPanelWidth] = useState<number>(50);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  useEffect(() => {}, [isRightPanelOpen]);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen  w-full"
    >
      <ResizablePanel
        defaultSize={isRightPanelOpen ? 50 : 95}
        minSize={isRightPanelOpen ? 37 : 95}
        className="h-screen relative  overflow-auto"
      >
        <div className="h-12 flex items-center justify-between p-1.5 absolute w-full top-0 left-0 border-b border-gray-200/20">
          <div className="flex items-center justify-start gap-2">
            <h2 className="hover:underline text-white font-medium text-sm transition-all">
              Standard Thread Name
            </h2>
            <button className="px-1 py-[2px] flex items-center justify-center border gap-1 rounded-full border-gray-200/25 bg-black">
              <Lock size={10} />
              <span className="text-xs">Private</span>
            </button>
          </div>
          <div className="space-x-1.5">
            <Button
              size={"sm"}
              className="border-none hover:bg-gray-200/10 h-7 w-7"
              variant={"outline"}
            >
              <Ellipsis size={18} />
            </Button>
            {!isRightPanelOpen && (
              <Button
                onClick={() => setIsRightPanelOpen(true)}
                size={"sm"}
                className="border-none hover:bg-gray-200/10 h-7 w-7"
                variant={"outline"}
              >
                <ChevronsLeft size={18} />
              </Button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 min-h-[150px]  w-full">
          <div className={`${isRightPanelOpen ? "px-8" : "px-36"}`}>
            <ChatBox />
          </div>
          <div className=" w-full text-center text-xs pt-1 text-gray-200/50">
            v0 may make mistakes. Please use with discretion.{" "}
          </div>
        </div>
      </ResizablePanel>

      {isRightPanelOpen && (
        <>
          <ResizableHandle className="bg-gray-400/30 transition-all text-black hover:w-[2.5px] w-[1px] min-h-screen" />

          <ResizablePanel
            defaultSize={50}
            minSize={37}
            className={`${
              isRightPanelOpen ? " opacity-100" : " opacity-0"
            }h-screen w-full   relative overflow-auto transition-all duration-300 ease-in-out`}
            onResize={(size) => setRightPanelWidth(size)}
          >
            <div className="p-1.5 h-12 flex items-center justify-between sticky w-full top-0 left-0 border-b border-gray-200/20 bg-background z-10">
              <div className="flex-shrink-0 flex items-center space-x-1">
                <Button
                  onClick={() => setIsRightPanelOpen(false)}
                  size={"sm"}
                  className="border-none hover:bg-gray-200/10 h-7 w-7"
                  variant={"outline"}
                >
                  <ChevronsRight size={18} />
                </Button>
                <Button
                  onClick={() => setActiveTab("preview")}
                  size={"sm"}
                  className={`${
                    activeTab === "preview" ? "bg-gray-200/10" : ""
                  } border-none hover:bg-gray-200/10 h-7 px-2 py-[3px] transition-all duration-200`}
                  variant={"outline"}
                >
                  <AppWindowMac size={18} />
                  {rightPanelWidth > 40 && (
                    <span className="ml-1">Preview</span>
                  )}
                </Button>
                <Button
                  onClick={() => setActiveTab("code")}
                  size={"sm"}
                  className={`${
                    activeTab === "code" ? "bg-gray-200/10" : ""
                  } border-none hover:bg-gray-200/10 h-7 px-2 py-[3px] transition-all duration-200`}
                  variant={"outline"}
                >
                  <Code size={18} />
                  {rightPanelWidth > 40 && <span className="ml-1">Code</span>}
                </Button>
                <Button
                  onClick={() => setActiveTab("console")}
                  size={"sm"}
                  className={`${
                    activeTab === "console" ? "bg-gray-200/10" : ""
                  } border-none hover:bg-gray-200/10 h-7 px-2 py-[3px] transition-all duration-200`}
                  variant={"outline"}
                >
                  <SquareTerminal size={18} />
                  {rightPanelWidth > 40 && (
                    <span className="ml-1">Console</span>
                  )}
                </Button>
              </div>

              <div className="flex-shrink-0 flex items-center gap-1">
                {rightPanelWidth > 47 && (
                  <>
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="border-none hover:bg-gray-200/10 h-7 px-2 py-[3px]"
                    >
                      <SquareDashedBottomCode size={18} />
                    </Button>
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="border-none hover:bg-gray-200/10 h-7 px-2 py-[3px]"
                    >
                      <GitBranch size={18} />
                    </Button>
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="border-none hover:bg-gray-200/10 h-7 px-2 py-[3px]"
                    >
                      <Upload size={18} />
                    </Button>
                  </>
                )}
                {rightPanelWidth < 47 && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="border-none hover:bg-gray-200/10 h-7 w-7"
                      >
                        <Ellipsis size={18} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-[#141415] rounded-xl w-[200px] border border-gray-200/20 p-1">
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="border-none hover:bg-gray-200/10 flex gap-2 items-center justify-start w-full h-7 px-2 py-[3px]"
                      >
                        <SquareDashedBottomCode size={18} />
                        <span>Add to codebase</span>
                      </Button>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="border-none hover:bg-gray-200/10 flex gap-2 items-center justify-start w-full h-7 px-2 py-[3px]"
                      >
                        <GitBranch size={18} />
                        <span>Fork</span>
                      </Button>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="border-none hover:bg-gray-200/10 flex gap-2 items-center justify-start w-full h-7 px-2 py-[3px]"
                      >
                        <Upload size={18} />
                        <span>Share</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                )}
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="border-none bg-white hover:bg-[#f5f5f5] transition-all h-7 px-2 py-[3px]"
                >
                  <Triangle fill="#000" size={18} />
                  <span className="text-neutral-950 font-medium text-sm ml-1">
                    Deploy
                  </span>
                </Button>
              </div>
            </div>

            <div className="">
              {activeTab === "preview" && <PreviewTab />}
              {activeTab === "code" && <CodeTab />}
              {activeTab === "console" && <ConsoleTab />}
            </div>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
}
