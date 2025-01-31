import React from "react";

const page = () => {
  return (
    <div className=" h-screen w-full">
      <div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
      <div className="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
      <div className="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
      <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
      <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
      <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
      <div className=" bg-yellow-500 size-18"></div>
    </div>
  );
};

export default page;
