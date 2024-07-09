import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-neutral-950 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-white-200">
          <Link href="/" className="flex z-40 font-semibold text-white">
            <span>TodoList.</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
