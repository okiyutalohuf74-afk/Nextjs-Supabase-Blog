"use client";

import MainBrandLogo from "@/components/main/header/main-brand-logo";
import { LoginMenu } from "@/components/login";
import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";
import { MainMobileMenuButton, MainMobileNavigationMenu } from "./menu";

const MainMobileNavigation = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 bg-gray-50 px-4 py-4 md:hidden">
            <div className="min-w-0 flex-1 pl-1">
              <MainBrandLogo compact />
            </div>
            <div className="flex shrink-0 items-center gap-2 pr-1">
              <LoginMenu />
              <MainMobileMenuButton open={open} />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <MainMobileNavigationMenu fragment={Fragment} />
        </>
      )}
    </Disclosure>
  );
};

export default MainMobileNavigation;
