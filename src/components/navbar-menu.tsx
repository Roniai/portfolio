"use client";
import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import ThemeToggle from "./theme-toggle";
import { NAVBAR_MENU } from "@/constants/menu";
import { MenuIcon, XIcon } from "lucide-react";

export const NavBarMenu = ({ menu }: { menu: any[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex fixed top-0 left-0 w-full bg-white dark:bg-black shadow px-2 sm:px-8 py-4 z-50 justify-between">
        <div className="flex gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          className="flex items-center sm:hidden text-gray-800 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon className="h-10 w-10" />
        </button>
        <ul className="hidden sm:flex gap-6 items-center">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={`#${NAVBAR_MENU[index]}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-20 right-4 text-gray-800 dark:text-white"
              onClick={() => setOpen(false)}
            >
              <XIcon className="h-8 w-8" />
            </button>
            <ul className="flex flex-col gap-6 items-center pt-24">
              {menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${NAVBAR_MENU[index]}`}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
