import Link from "next/link";
import React from "react";

export enum BUTTONTYPE {
  PRIMARY = "bg-brand text-white hover:bg-opacity-70",
  SECONDARY = "bg-white text-brand hover:bg-slate-200 ",
  BLACK = "bg-black text-white hover:bg-opacity-70",
}
export default function ContactButton({
  className,
  type,
  children = <>Contact now</>,
}: {
  className?: string;
  type: BUTTONTYPE;
  children?: React.ReactNode;
}) {
  return (
    <Link href={"/contact-us"} >
      <button
        className={`mt-0 rounded-[10px] ${type} ${className} px-10 py-[0.6rem] transition-all duration-300`}
      >
        <span  className="font-poppins font-semibold">{children}</span>
      </button>
    </Link>
  );
}
