import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  MousePointerClick,
  RefreshCcw,
  Scan,
} from "lucide-react";
import React from "react";

const PreviewTab = () => {
  return (
    <div className=" h-full mt-10 w-full">
      <div className=" h-9 flex items-center justify-between gap-2 p-1 absolute w-full top-0 mt-12 left-0 border-b border-gray-200/20">
        <div className=" flex w-fit items-center justify-between gap-1">
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <ChevronRight size={16} />
          </Button>
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <RefreshCcw size={16} />
          </Button>
        </div>
        <div className=" w-full">
          <Input className=" border-none focus:outline-hidden outline-hidden ring-0 ring-transparent bg-gray-200/15 hover:bg-gray-200/20 rounded-xl h-6 w-full" />
        </div>
        <div className=" flex w-fit items-center justify-between gap-1">
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <MousePointerClick size={16} />
          </Button>
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <Grid2X2 size={16} />
          </Button>
          <Button
            size={"sm"}
            className=" border-none h-6 w-6 rounded-lg mx-auto hover:bg-gray-200/15"
            variant={"outline"}
          >
            <Scan size={16} />
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PreviewTab;
