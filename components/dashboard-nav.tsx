"use client";

import { AvatarBtn } from "@/components/user-dropdown";
import { Icons } from "@/components/icons";

export function DashboardNav () {
  return (
    <nav className="w-screen md:w-full bg-background min-h-[88px] sticky top-0 left-0 px-5 py-[18px] flex items-center justify-between border-b border-sidebar-border z-10 dark:bg-neutral-900 dark:border-neutral-600">

      <div className="flex items-center justify-between md:min-w-[810px]">
        <p className="font-semibold text-xl">
           Dashboard
        </p>

        <div className="seach-box h-12 relative w-[349px] hidden md:flex">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
            </svg>
          </div>

          <input type="text" name="" id="" className="bg-wite border border-[#DADDDD] rounded-3xl text-neutral-400 h-full pl-11 placeholder:text-neutral-400 w-full dark:bg-neutral-800 dark:border-neutral-600" placeholder="Search..."/>
        </div>
      </div>

      <div className="flex items-center  justify-between md:w-[500px]">
        <div className="date space-x-3 md:flex items-center hidden">
          <div className="px-4 py-3 flex items-center">
            <Icons.calender  className="dark:stroke-neutral-500"/>

            <p className="text-foreground ml-2 font-medium font-inter text-sm">
            November 15, 2023
            </p>
          </div>

          <div className="w-10 h-10 centered border rounded-full dark:border-neutral-600">
            <Icons.bell className="dark:stroke-neutral-500"/>
          </div>
        </div>

        <AvatarBtn/>
      </div>
    </nav>

  );
}
