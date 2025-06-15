import React from "react";

export default function Heading1({
  children,
  extraClass,
  centerText = true,
  uppercase = true,
}: {
  children: React.ReactNode;
  extraClass?: string;
  centerText?: boolean;
  uppercase?: boolean;
}) {
  return (
    <p
      className={
        `font-poppins text-2xl text-[20px] font-bold ${uppercase ? "uppercase" : ""} leading-normal md:text-[32px] lg:text-[40px] ` +
        extraClass +
        (centerText ? " text-center" : " text-left")
      }>
      {children}
    </p>
  );
}
