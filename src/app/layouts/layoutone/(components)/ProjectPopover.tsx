import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FolderClosed, Plus } from "lucide-react";

const ProjectPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="text-gray-400 flex gap-2 border-dotted  hover:bg-gray-200/15 border-gray-800"
        >
          <span>
            <Plus size={18} />
          </span>
          <span>Project</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className=" border border-gray-200/10 w-[300px] p-2  bg-[#141415] h-[250px] rounded-xl"
        side="bottom"
        sideOffset={5}
      >
        <div className=" rounded-xl flex flex-col items-center justify-around gap-2 bg-black py-8 border border-gray-200/15 h-full w-full">
          <span className=" h-8 w-8 p-1.5 flex items-center justify-center mx-auto text-neutral-200 rounded-lg border-gray-200/20 border text-center">
            <FolderClosed size={18} />
          </span>
          <span className=" font-medium">No Projects</span>
          <span className=" text-center text-gray-200/50 max-w-md text-sm">
            Create a project to start chatting with files and resources.
          </span>
          <Button
            size={"sm"}
            className=" bg-white text-center text-sm rounded-lg hover:bg-[#f1f5f9] text-neutral-950"
          >
            New Project
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectPopover;
