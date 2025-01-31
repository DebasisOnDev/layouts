/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUp,
  Calculator,
  Camera,
  CloudUpload,
  Droplet,
  Figma,
  PanelsTopLeft,
  Paperclip,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FigmaIcon from "./(components)/FigmaIcon";
import { motion } from "motion/react";
import ProjectPopover from "./(components)/ProjectPopover";
import { useRouter } from "next/navigation";

export default function LayoutOne() {
  const textarearef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    const textarea = textarearef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    textarea.addEventListener("input", adjustHeight);
    adjustHeight();
    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState("");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // ...
  }, []);

  if (!mounted) {
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const deselectFile = () => {
    setSelectedFile(null);
    setFileUrl(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="max-w-7xl w-full px-28">
        <h1 className="text-[56px] leading-tight font-semibold text-white text-center mb-6">
          What can I help you ship?
        </h1>
        <div className="w-full bg-[#121212] rounded-xl border border-gray-300/15  mb-4">
          <div className=" w-full relative  ">
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              type="file"
            />
            {selectedFile && (
              <div className=" w-full rounded-t-xl transition-all duration-300 ease-in-out overflow-hidden h-14 p-2 bg-[#121212]">
                <div className=" w-32 relative h-full rounded-lg py-[4px] px-[2px] hover:bg-[#141416] bg-[#141420]/20 border border-gray-200/20">
                  <Popover open={hovered}>
                    <PopoverTrigger asChild>
                      <motion.div
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        className=" w-full flex items-center justify-start gap-1 h-full"
                      >
                        {selectedFile.type.includes("image") ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="object-cover h-[34px] w-[34px]  border border-gray-200/20 rounded-lg"
                            src={fileUrl! || "/placeholder.svg"}
                            alt="selected file"
                          />
                        ) : (
                          ""
                        )}
                        <div className=" text-gray-400 py-2 gap-0 flex flex-col items-start justify-center ">
                          <span className=" text-xs line-clamp-1 overflow-hidden text-ellipsis">
                            {selectedFile.name}
                          </span>
                          <span className=" text-xs">
                            {(
                              Number(selectedFile.size.toFixed()) / 1024
                            ).toPrecision(2)}
                            kB
                          </span>
                        </div>
                      </motion.div>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 rounded-xl "
                      align="center"
                      side="top"
                      sideOffset={5}
                    >
                      <img
                        src={fileUrl! || "/placeholder.svg"}
                        alt="Image"
                        className={`${
                          selectedFile.type.includes("svg")
                            ? "h-8 w-8  bg-white border-white border-2 "
                            : "h-40 w-52  border-4 border-white "
                        } object-cover rounded-xl`}
                      />
                    </PopoverContent>
                  </Popover>
                  <button
                    onClick={deselectFile}
                    className=" rounded-full p-[2px] border border-gray-200/30 bg-[#141415] absolute -top-1.5 -right-1.5"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center p-4 gap-3">
            <Textarea
              onChange={(e) => setText(e.target.value)}
              ref={textarearef}
              placeholder="Ask v0 a question..."
              className="flex-1 bg-transparent text-gray-300 placeholder:text-gray-500 outline-hidden focus-within:ring-0 focus:ring-0 focus:outline-hidden focus-within:border-none ring-0 border-none focus:border-none focus:outline-none ring-transparent overflow-hidden resize-none min-h-[20px]"
            />
          </div>
          <div className="flex justify-between p-4 items-center ">
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="text-white bg-transparent border-none cursor-pointer"
                    size="sm"
                    variant="outline"
                  >
                    <Paperclip />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex transition-all flex-col rounded-xl p-2 w-56  border border-gray-300/15 bg-[#141415]"
                  sideOffset={5}
                >
                  <div className="p-1 cursor-pointer hover:bg-gray-300/10 text-sm rounded-lg flex items-center justify-between gap-2">
                    <FigmaIcon />
                    <span>Add from Figma</span>
                    <span className="text-[10px] py-[2px] px-1.5 text-[#2dd4bf] bg-[#042f2e] rounded-full">
                      Premium
                    </span>
                  </div>
                  <button
                    onClick={triggerFileInput}
                    className="p-1 hover:bg-gray-300/10 text-sm rounded-lg flex items-start justify-start gap-2"
                  >
                    <CloudUpload size={18} />
                    <span>Upload from computer</span>
                  </button>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center gap-2">
              <ProjectPopover />
              <Button
                onClick={() => router.push("layoutone/chat")}
                variant="outline"
                size={"sm"}
                disabled={text.length === 0}
                className={` ${
                  text.length > 0
                    ? " bg-white text-neutral-950"
                    : " bg-[#141415] text-neutral-300"
                }  border border-gray-200/15 rounded-lg h-8 cursor-pointer w-8 p-1`}
              >
                <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="rounded-full border-gray-800 text-gray-300 hover:bg-gray-200/10 transition-all"
          >
            <Camera size={20} className="  text-gray-300" /> Clone a Screenshot
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-800 text-gray-300 hover:bg-gray-200/10 transition-all"
          >
            <Figma size={20} className="  text-gray-300" /> Import from Figma
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-800 text-gray-300 hover:bg-gray-200/10 transition-all"
          >
            <PanelsTopLeft size={20} className="  text-gray-300" /> Landing Page
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-800 text-gray-300 hover:bg-gray-200/10 transition-all"
          >
            <Droplet size={20} className="  text-gray-300" /> Sign Up Form
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-800 text-gray-300 hover:bg-gray-200/10 transition-all"
          >
            <Calculator size={20} className="  text-gray-300" /> Calculate
            Factorial
          </Button>
        </div>
      </div>
    </div>
  );
}
