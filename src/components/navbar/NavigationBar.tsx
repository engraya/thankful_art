"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import { navigationConfig } from '@/config/navigation';
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
function NavigationBar() {


  return (
    <header className="sticky top-0 shadow w-full md:w-auto px-5 py-0.5 z-40 flex justify-between md:rounded-lg bg-secondary/20 backdrop-blur-md border-gradient border-gradient-primary only-bottom">
      <div className="container flex sm:flex-row justify-between items-center mx-auto py-2 px-4">
        <div className="hidden md:flex items-center text-2xl">
          <Link href="/" className="flex justify-center items-center">
            <Icons.logo />
            <h1 className="text-xl ml-2 font-bold underline transition-colors hover:text-foreground/80 sm:text-sm">
              {siteConfig.name}
            </h1>
          </Link>
        </div>
        <div className="flex sm:mt-0 middleDiv">
          <DefaultNavbar mainNav={navigationConfig.mainNav} showProfileAndPrompts={true} />
        </div>
        <div className="md:block hidden">
          <Link href="/create">
          <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Create
          </button>
          </Link>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
