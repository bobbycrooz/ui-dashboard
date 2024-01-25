"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function Sidebar () {
  const { setTheme } = useTheme();

  return (
    <>
      <section className="hidden md:flex w-20 h-full bg-sidebar-bg py-5 border-r border-sidebar-border flex-col justify-between dark:border-neutral-600">
        <div className="">
          <Icons.Logo className="mx-auto" />

          <nav className="w-full space-y-4 mt-5">
            {
              navs.map((item, index) => (
                <div key={index} className="w-full h-10 centered relative">
                  <div className={cn("hidden absolute bg-[#0D062D] h-6 w-[3px] rounded-l-xl right-0 top-1/2 -translate-y-1/2", index === 0 && "block")}/>
                  <div className="w-10 h-10 centered">
                    {item.icon}
                  </div>
                </div>
              ))
            }

            <div className="toggle-trigger w-[46px] h-[92px] mx-auto  p-2 bg-background rounded-[100px] flex flex-col items-center justify-between dark:bg-neutral-950">
              <Icons.light onClick={() => setTheme("light")} />
              <Icons.dark  onClick={() => setTheme("dark")}/>
            </div>
          </nav>
        </div>

        <nav className="w-full space-y-4 mt-5">
          {
            bottom_navs.map((item, index) => (
              <div key={index} className="w-full h-10 centered">
                <div className="w-10 h-10 centered">
                  {item.icon}
                </div>
              </div>
            ))
          }
        </nav>
      </section>

      <div className="fixed bottom-0 w-full left-0 p-5 md:hidden z-10 bg-sidebar-bg">
        <nav className="w-full space-x-4 flex items-center">
          {
            navs.map((item, index) => (
              <div key={index} className="w-full h-10 centered relative">
                <div className={cn("hidden absolute bg-[#0D062D] w-6 h-[3px] rounded-t-xl -bottom-4 left-1/2 -translate-x-1/2", index === 0 && "block")}/>

                <div className="w-10 h-10 centered">
                  {item.icon}
                </div>
              </div>
            ))
          }
        </nav>
      </div>

    </>

  );
}

const navs = [
  {
    icon: <Icons.dashboard  className="fill-red-400"/>,
    link: "/playground"
  },

  {
    icon: <Icons.arrows/>,
    link: "/"
  },

  {
    icon: <Icons.users/>,
    link: "/auth/login"
  },

  {
    icon: <Icons.percel/>,
    link: "/auth/login"
  },

  {
    icon: <Icons.code/>,
    link: "/auth/login"
  },
  {
    icon: <Icons.caution/>,
    link: "/auth/login"
  },
];

const bottom_navs = [
  {
    icon: <Icons.circleArrow/>,
    link: "/playground"
  },

  {
    icon: <Icons.settings/>,
    link: "/"
  },

  {
    icon: <Icons.logout/>,
    link: "/auth/login"
  }
];
