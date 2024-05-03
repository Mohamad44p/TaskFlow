import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavItems() {
  return (
    <div className="flex gap-4 h-full">
      <div className="flex">
        <div className="relative flex gap-4 items-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "dark:text-white text-black text-[16px]"
            )}
          >
            Home
          </Link>
          <Link
            href="/mykanban"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "dark:text-white text-black text-[16px]"
            )}
          >
            Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}
