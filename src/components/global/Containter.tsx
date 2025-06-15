import React from "react";

export default function Container({
  children,
  paddingOff,
}: {
  children: React.ReactNode;
  paddingOff?: "RIGHT" | "LEFT";
}) {
  const className = {
    RIGHT: "pr-0 w-full pl-6 lg:pl-28",
    LEFT: "w-full pr-6 lg:pr-28",
  };
  return (
    <div>
      <div
        className={
          (paddingOff && className[paddingOff]) || "w-full px-6 lg:px-28"
        }>
        {children}
      </div>
    </div>
  );
}
