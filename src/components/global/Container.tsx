import React from "react";

export default function Container({
  children,
  paddingOff,
}: {
  children: React.ReactNode;
  paddingOff?: "RIGHT" | "LEFT";
}) {
  const className = {
    RIGHT: "pr-0 w-full pl-5 lg:pl-28 md:pl-10",
    LEFT: "w-full pr-5 lg:pr-28 md:pr-10",
  };
  return (
    <div>
      <div
        className={
          (paddingOff && className[paddingOff]) || "w-full px-5 md:px-10 lg:px-28"
        }>
        {children}
      </div>
    </div>
  );
}
