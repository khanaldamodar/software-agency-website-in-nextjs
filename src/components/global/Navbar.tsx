"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactButton, { BUTTONTYPE } from "./ContactButton";
import { getSettingData } from "@/src/services/settingData.service";
import { api } from "@/src/services/variables";
import { motion } from "framer-motion";
import HomepageHero from "../homepage-banner/banner";
import { navItems } from "./navItems";
import { ProductType } from "@/src/types/types/product.type";

const Navbar = ({ products }: { products: ProductType[] }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  // const navItems = ["Vps", "Email", "Domain", "Affiliate", "Product"];

  const [settingData, setSettingData] = useState<any>("");

  const pathname = usePathname();
  const [isRoot, setIsRoot] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const getLogo = async () => {
      const data = await getSettingData();
      setSettingData(data);
    };
    getLogo();
  }, []);

  const handleScroll = () => {
    if (window) {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight ?? 0;
      const navbarElement = document.querySelector(
        ".navbar",
      ) as HTMLElement | null;
      if (!isRoot) {
        // if page is not the homepage

        setShowNav(true);

        if (scrollY > viewportHeight) {
          if (scrollY < lastScrollY) {
            setShowNav(true);
          } else {
            setShowNav(false);
          }
        } else {
          setShowNav(true);
        }
      } else {
        // animation if page is home page
        setShowNav(false);
        if (scrollY > viewportHeight + 500) {
          if (scrollY < lastScrollY) {
            setShowNav(true);
          } else {
            setShowNav(false);
          }
        } else if (scrollY > viewportHeight) {
          setShowNav(true);
        }
      }

      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", (e) => {});
  }, [lastScrollY]);

  useEffect(() => {
    if (pathname === "/") {
      setIsRoot(true);
      setShowNav(false);
    } else {
      setIsRoot(false);
      setShowNav(true);
    }
  }, [pathname]);

  return (
    <div className="h-full w-full bg-cover bg-center bg-no-repeat pb-0 font-poppins">
      <nav className="navbar fixed top-0 z-50 hidden h-[6.5rem] w-full justify-between py-16 transition-transform duration-300 ease-in-out lg:flex">
        <div
          className={`-mt-52 flex w-full items-center justify-between px-[110px] opacity-0 transition-all duration-300 ${
            showNav ? "mt-0 opacity-100" : ""
          }`}>
          {/* Logo  */}
          <Link href={"/"}>
            <Image
              // src={`${api}/${settingData?.image?.path}`}
              src={"/images/logo.svg"}
              width={141}
              height={71}
              alt="logo"
              className="cursor-pointer object-contain"
              priority={true}
            />
          </Link>

          {/* Nav items  */}
          <ul
            className={`hidden items-center gap-6 rounded-full bg-[#23232333] bg-opacity-30 px-14 py-3 font-poppins font-medium text-white transition-all duration-100 lg:flex xl:gap-[45px]`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={
                    pathname === item.path ? "font-semibold text-brand" : ""
                  }
                  href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*Responsive NavBar*/}

          {/* Contact  */}
          <div className="item-center justify-center">
            <Link
              href={"/contact-us"}
              className="cursor-pointer rounded-[50px] bg-brand px-10 py-[0.6rem] text-white transition-all duration-300 hover:bg-opacity-70">
              Contact
            </Link>
            {/* <div className="rounded-[10px] bg-brand px-[2.625rem] py-[0.625rem] text-sm font-bold text-white shadow-2xl">
              Contact
            </div> */}
          </div>
        </div>
      </nav>

      {/* Banner part       */}
      {isRoot && (
        <div className="relative">
          {/* Banner image  */}
          <div className="navbar flex w-full items-center justify-center lg:h-screen">
            <nav className="navbar absolute top-0 z-50 hidden h-[6.5rem] w-full justify-between py-16 transition-transform ease-in-out lg:flex">
              <div
                className={`-mt-0 flex w-full items-center justify-between px-6 opacity-100 transition-all duration-500 lg:px-[110px]`}>
                {/* Logo  */}
                <Link href={"/"}>
                  <Image
                    // src={`${api}/${settingData?.image?.path}`}
                    // src={"/images/logo.svg"}
                    src={isHomePage ? "/images/aerpn.svg" : "/images/logo.png"}
                    width={141}
                    height={71}
                    alt="logo"
                    className="object-contain"
                  />
                </Link>

                {/* Nav items  */}

                {/* Contact  */}
                <div className="item-center justify-center">
                  <Link
                    href={"/contact-us"}
                    className="cursor-pointer rounded-[50px] bg-brand px-10 py-[0.6rem] text-white transition-all duration-300 hover:bg-opacity-70">
                    Contact
                  </Link>
                  {/* <div className="rounded-[10px] bg-brand px-[2.625rem] py-[0.625rem] text-sm font-bold text-white shadow-2xl">
                    Contact
                  </div> */}
                </div>
              </div>
            </nav>

            <HomepageHero
              products={[...products, ...(products.length < 4 ? products : [])]}
            />
            {/* <motion.div initial={{scale: 1.2, filter: 'blur(10px)'}} whileInView={{scale: 1, filter: 'blur(0px)'}} viewport={{once: true}} className="custom-clip-path bg-[url(/hero-foreground.gif)] bg-cover bg-center bg-no-repeat lg:w-[80%] 2xl:w-[70%] w-full h-[239px] lg:h-[32.875rem]"></motion.div> */}
          </div>

          {/* Nav Items */}
          <ul className="absolute bottom-2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform items-center justify-between gap-8 text-white lg:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`${(pathname == "/" ? "home" : pathname) == item.name.toLowerCase() && "font-semibold"}`}
                  href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
