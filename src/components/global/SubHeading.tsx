import React from "react";

export default function SubHeading({
  children,
  extraClass,
  centerText = true,
  uppercase = false,
}: {
  children: React.ReactNode;
  extraClass?: string;
  centerText?: boolean;
  uppercase?: boolean;
}) {
  return (
    <p
      className={
        `font-satoshi ${uppercase ? "uppercase" : ""} text-[14px] font-normal text-[#2B2B2B] md:text-[16px] lg:text-[20px] ` +
        extraClass +
        (centerText ? " text-center" : " text-left")
      }>
      {children}
    </p>
  );
}
