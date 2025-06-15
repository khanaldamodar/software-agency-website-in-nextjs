import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactButton, { BUTTONTYPE } from "./global/ContactButton";
export default async function Footer() {
 
  return (
    <div className="max:w-screen flex flex-col justify-center space-y-[1rem] py-0 font-poppins md:px-14">
      <div className="relative flex w-full md:px-8">
        <div className="grid-rows absolute right-[4.4%] hidden h-[10rem] w-[2rem] gap-2 md:grid">
          <div className="flex h-[39px] w-[39px] items-center justify-center bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand md:rounded-full">
            <Link href={'/'}>
              <Image
                src="/images/Footer/whatsapp-symbol-logo-svgrepo-com.svg"
                alt="whatsapp"
                className="hover:grayscale-[1]"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
            <Link href={"/"}>
              <Image
                src="/images/Footer/facebook-svgrepo-com.svg"
                alt="facebook"
                className="hover:grayscale-[1]"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
            <Link href="https://instagram.com/aideascent">
              <Image
                src="/images/Footer/instagram-1-svgrepo-com.svg"
                alt="instagram"
                className="hover:grayscale-[1]"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
            <Link href={"/"}>
              <Image
                src="/images/Footer/linked.svg"
                alt="linkedin"
                className="hover:grayscale-[1]"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="footerClipPath h-auto w-full rounded-t-[10px] bg-black px-8 pb-8 pt-[59px] text-white sm:px-16 sm:pb-16 sm:pt-[59px] md:h-[22rem] md:rounded-[10px] xl:rounded-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-4 md:gap-2 lg:gap-8">
            <div className="flex w-[16rem] flex-col items-start gap-2 sm:w-full lg:gap-10">
              <p className="text-xl font-semibold md:text-3xl">
                Do you need a better website?
              </p>
              <div className="pt-4">
                <ContactButton
                  className="rounded-full"
                  type={BUTTONTYPE.PRIMARY}>
                  CONTACT
                </ContactButton>
              </div>
            </div>

            <ul className="flex list-none flex-col gap-[10px]">
              <p className="my-2 text-xl font-bold">Explore</p>
              <Link href="/">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Home
                </li>
              </Link>
              <Link href="/domain">
                {" "}
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Domain
                </li>
              </Link>
              <Link href="/vps">
                {" "}
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Hosting
                </li>
              </Link>
              <Link href="/email">
                {" "}
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Email
                </li>
              </Link>
              <Link href="/product">
                {" "}
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Website
                </li>
              </Link>
              {/* <Link href="/about">
                {" "}
                <li>About</li>
              </Link> */}
            </ul>

            <ul className="flex list-none flex-col gap-[10px]">
              <p className="my-2 text-xl font-bold">More</p>
              <Link href="/blog">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Blog
                </li>
              </Link>
              {/* <li>Testimonial</li> */}
              <Link href="/faq">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  FAQ
                </li>
              </Link>
              <Link href="/affiliate">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Join Partner Program
                </li>
              </Link>
              <Link href="/privacy">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Privacy Policy
                </li>
              </Link>
              <Link href="/terms">
                <li className="transition-all duration-75 ease-linear hover:text-brand">
                  Terms of Services
                </li>
              </Link>
            </ul>

            <ul className="flex list-none flex-col gap-[10px]">
              <p className="my-2 text-xl font-bold">Get in touch</p>

              <li className="flex items-center">
                <Image
                  src="/images/Footer/mail.png"
                  alt="email"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                <Link href={`mailto:shaktatechnology95@gmail.com`}>
                  <span className="transition-all duration-75 ease-linear hover:text-brand">
                    shaktatechnology95@gmail.com
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <Image
                  src="/images/Footer/phone.png"
                  alt="call"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                <Link href={`tel:9866437014`}>
                  <span className="transition-all duration-75 ease-linear hover:text-brand">
                    9866437014
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <Image
                  src="/images/Footer/location.png"
                  alt="location"
                  width={15}
                  height={15}
                  className="mr-2"
                />
                <Link
                  href={"https://maps.app.goo.gl/jnFyRDWgpJRg3HA59"}
                  target="_blank">
                  <span className="transition-all duration-75 ease-linear hover:text-brand">
                    Kathmandu Nepal
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-center md:hidden">
              <div>
                <h1 className="text-xl font-bold">Follow Us</h1>
              </div>
              <div className="flex gap-6">
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
                  <Link href={'/'}>
                    <Image
                      src="/images/Footer/whatsapp-symbol-logo-svgrepo-com.svg"
                      alt="whatsapp"
                      className="hover:grayscale-[1]"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
                  <Link href={'/'}>
                    <Image
                      src="/images/Footer/facebook-svgrepo-com.svg"
                      alt="facebook"
                      className="hover:grayscale-[1]"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
                  <Link href="https://instagram.com/aideascent">
                    <Image
                      src="/images/Footer/instagram-1-svgrepo-com.svg"
                      alt="instagram"
                      className="hover:grayscale-[1]"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full bg-black p-2 transition-all duration-100 ease-linear hover:bg-brand">
                  <Link href={'/'}>
                    <Image
                      src="/images/Footer/linked.svg"
                      alt="linkedin"
                      className="hover:grayscale-[1]"
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden self-center pb-2 text-center text-[0.9rem] font-semibold md:flex">
        Venture Owned & Run By @
        <Link href={"https://www.aideascent.com/"} target="_blank">
          <span className="text-brand">Aide Ascent Pvt. Ltd.</span>
        </Link>
      </div>
      {/* Social Icons */}
    </div>
  );
}
