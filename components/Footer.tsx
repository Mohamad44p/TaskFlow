import React from "react";
import { footerLinks } from "@/config/index";

export default function Footer() {
  return (
    <footer className="px-5 py-5 mt-24 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-400 text-xs">
            More Ways to Shope{" "}
            <span className="underline text-blue-600">Find Us</span> or{" "}
          </p>
          <p className="font-semibold text-gray-400 text-xs">
            Or Send an email to{" "}
            <span className="underline text-blue-600">
              mohamad44p@yahoo.com
            </span>
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-400 text-xs">
            CopyRight © 2024 Cars Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray-400 text-xs">
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
