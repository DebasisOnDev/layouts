"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import {
  ChevronFirst,
  ChevronLast,
  Copy,
  Download,
  FileDiff,
} from "lucide-react";

const CodeTab = () => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);

  return (
    <div className="h-full w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[calc(100vh-48px)] relative w-full"
      >
        <ResizablePanel
          defaultSize={50}
          minSize={35}
          maxSize={95}
          className={`h-[calc(100vh-48px)] w-full relative overflow-auto transition-all duration-300 ease-in-out ${
            isLeftPanelOpen ? "flex" : "hidden"
          }`}
        ></ResizablePanel>

        {isLeftPanelOpen && (
          <ResizableHandle className="bg-gray-400/30 transition-all text-black hover:w-[2.5px] w-[1px] h-[calc(100vh-48px)]" />
        )}

        <ResizablePanel
          className="h-[calc(100vh-48px)] relative overflow-auto"
          defaultSize={isLeftPanelOpen ? 50 : 100}
          minSize={35}
          maxSize={95}
        >
          <div className="h-9 p-1 flex items-center justify-between absolute w-full top-0 left-0 border-b border-gray-200/20">
            <div className=" text-sm font-[540] text-left">Filename.ext</div>
            <div className=" flex w-fit items-center justify-between gap-1">
              <Button
                size={"sm"}
                className=" border-none text-gray-300/50 h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
                variant={"outline"}
              >
                <FileDiff size={16} />
              </Button>
              <Button
                size={"sm"}
                className=" border-none text-gray-300/50 h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
                variant={"outline"}
              >
                <Copy size={16} />
              </Button>
              <Button
                size={"sm"}
                className=" border-none text-gray-300/50 h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
                variant={"outline"}
              >
                <Download size={16} />
              </Button>
            </div>
          </div>
        </ResizablePanel>
        <Button
          onClick={() => setIsLeftPanelOpen(!isLeftPanelOpen)}
          size="sm"
          variant="outline"
          className="h-7 w-7 absolute bottom-3 left-3 z-50 border border-gray-200/15 hover:border-gray-200/20 rounded-lg transition-all ease-in-out bg-neutral-900 hover:bg-gray-200/10 text-white"
        >
          {isLeftPanelOpen ? (
            <ChevronFirst size={18} />
          ) : (
            <ChevronLast size={18} />
          )}
        </Button>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeTab;
