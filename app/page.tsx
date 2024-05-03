"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import ParallaxEffect from "@/components/ParallaxEffect";
const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your tasks organized instantly with our intuitive Kanban board. No waiting time.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every task on our platform is verified by our team to ensure the highest quality standards. Not satisfied? We offer a 30-day refund guarantee.",
  },
  {
    name: "For Efficiency",
    icon: Leaf,
    description:
      "We are committed to improving your workflow efficiency. Our platform helps you achieve more in less time.",
  },
];

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".g_header",
      {
        x: -300,
        opacity: 0,
        delay: 0.5,
      },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".g_button",
      {
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        opacity: 0,
        y: 300,
        delay: 1,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.3,
        duration: 1,
        delay: 1,
      }
    );

    gsap.fromTo(
      ".g_text",
      {
        duration: 0.5,
        ease: "power2.out",
        opacity: 0,
        y: 100,
        delay: 1.5,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        delay: 1.5,
      }
    );
  }, []);
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl opacity-0 g_header">
            TaskFlow: End-to-End Kanban Board Solution{" "}
            <span className="text-primary">for Task Management</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground g_text">
            Welcome to TaskFlow. Organize your tasks efficiently with our
            intuitive Kanban board, verified by our team to ensure the highest
            quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/mykanban"
              className={cn("g_button dark:text-gray-100", buttonVariants())}
            >
              Try TaskFlow Now
            </Link>
            <Button variant="ghost" className="g_button">
              Learn More &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 dark:border-opacity-[0.3]">
        <div className="my-36">
          <ParallaxEffect />
        </div>
      </section>
      <section className="border-t border-gray-200 dark:border-opacity-[0.3]">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary text-secondary">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
