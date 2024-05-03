"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./Theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { UserAuthNav } from "./UserAuthNav";

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".g_buttons",
      {
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        opacity: 1,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.3,
        duration: 1,
      }
    );
  }, []);
  return (
    <div className=" sticky z-50 top-0 inset-0 h-16">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 dark:border-opacity-[0.3]">
            <div className="flex h-16 items-center">
              <div className="flex ml-4 lg:ml-0 g_buttons">
                <Link href="/">
                  <Icons.logo className="w-10 h-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch g_buttons">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 g_buttons">
                  <UserAuthNav />
                </div>
              </div>

              <div className="ml-4 g_buttons">
                <ModeToggle />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
