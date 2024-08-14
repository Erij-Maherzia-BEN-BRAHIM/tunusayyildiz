"use client";
import logo from "@/app/assets/logos/logo.png";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="shadow-lg bg-gray-100 absolute top-0 right-0 left-0"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button*/}
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block h-6 w-6 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden h-6 w-6 group-data-[open]:block"
            />
          </DisclosureButton>
        </div> */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link className="flex flex-shrink-0 items-center" href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="h-16 w-auto object-contain"
              />
              <p>Tunus Ayyıldız Topluluğu</p>
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
