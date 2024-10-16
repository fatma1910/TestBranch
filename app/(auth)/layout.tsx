"use client";
import React, { PropsWithChildren } from "react";


const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="my-[100px]">
    <div
        className="flex  justify-center "
    >
        {children}
      </div>
    </div>
  );
};

export default layout;
