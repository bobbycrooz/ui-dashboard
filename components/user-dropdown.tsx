"use client";

import { Icons } from "@/components/icons";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

const quickActions = [
  {
    name: "log Out",
    path: "/",
  }
];

export function AvatarBtn () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-auto border border-[#DADDDD] rounded-[28px] p-[6px] flex space-x-3 items-center dark:border-neutral-600">
          <div className="w-auto flex items-center">
            <div className="rounded-full w-[38px] h-[38px] bg-neutral-400 dark:border-neutral-600">
              <Image src={"/dp.png"} width={38} height={38} alt="dp"/>
            </div>

            <div className="names text-right ml-1 font-inter">
              <p className="font-medium">Justin Bergson</p>
              <p className="text-[#787486] text-sm">Justin@gmail.com</p>
            </div>
          </div>

          <span className="add_icon">
            <Icons.carretDown className="fill-[#0D062D] dark:fill-neutral-600"/>
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent data-testid="qa" align="center" className="min-w-[187px] space-y-1 p-2">
        {quickActions.map((i, k) => (
          <DropdownMenuItem key={k} className="focus:bg-nav-active focus:text-black-400 text-sm text-util px-2 p-3">
            {i.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
