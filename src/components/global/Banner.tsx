"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../animations/animations";
import Container from "./Container";

export default function Banner({
  imageSrc,
  content,
  imageAlt,
  classN = "",
}: {
  imageSrc:
    | {
        large: string;
        medium: string;
        small: string;
      }
    | string;
  content: string;
  imageAlt: string;
  classN?: string;
}) {
  return (
    <Container>
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="relative h-[25.75rem] rounded-[2.5rem] 2xl:h-[35rem]">
        {/* For large Screen  */}
        {typeof imageSrc === "object" && "large" in imageSrc ? (
          <>
            <div className="mx-auto h-auto max-w-7xl">
              <Image
                src={imageSrc.large}
                alt={imageAlt || "Blog Image"}
                width={1262}
                height={419}
                className="hidden h-full w-full rounded-[2.5rem] object-cover lg:block"
                quality={100}
              />
            </div>

            <Image
              src={imageSrc.medium}
              alt={imageAlt || "Blog Image"}
              fill
              className="hidden h-full w-full rounded-[2.5rem] object-fill md:block lg:hidden"
              quality={100}
            />

            <Image
              src={imageSrc.small}
              alt={imageAlt || "Blog Image"}
              fill
              className="block h-full w-full rounded-[2.5rem] object-contain md:hidden"
              quality={100}
            />
          </>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt || "Blog Image"}
            fill
            className="h-full w-full rounded-[2.5rem] object-fill"
            quality={100}
          />
        )}
      </motion.div>
    </Container>
  );
}
