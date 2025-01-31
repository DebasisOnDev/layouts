import { Button } from "@/components/ui/button";

import { Trash } from "lucide-react";
import React from "react";

const ConsoleTab = () => {
  return (
    <div className=" h-full w-full">
      <div className=" h-9 p-1 flex text-gray-200/50 items-center justify-between absolute w-full top-0 mt-12 left-0 border-b border-gray-200/20">
        <div className=" text-sm font-[530] text-left ">Console</div>
        <div className=" flex items-center justify-between gap-1">
          <span className=" text-sm font-medium pr-0.5">0 events</span>
          <span className=" w-[1.5px] opacity-75 h-4 bg-gray-200/50"></span>
          <Button
            size={"sm"}
            className=" border-none text-gray-200/50 h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <Trash size={16} />
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ConsoleTab;
