import { currentUser, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const UserAuthNav = () => {
  const { isSignedIn, user } = useUser();
  return (
    <div>
      {user ? (
        <>
          <div className=" flex items-center">
            <UserButton afterSignOutUrl="/" />
            <div className="flex lg:ml-6">
              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "ghost" })}
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "ghost" })}
          >
            Create account
          </Link>
        </>
      )}
    </div>
  );
};
