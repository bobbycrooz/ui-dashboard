"use client";

import { Icons } from "@/components/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import * as React from "react";

export interface IInvoiceItems
{
  item_description: string;
  unit: string;
  quantity: number;
  discount_name: string;
  tax: string;
  amount: string;
  item_name: string;
}

const tabeData = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    id: "/table/01.png"
  },

  {
    name: "Corey Schleifer",
    date: "Nov 15, 2023",
    amount: "$87,000",
    status: "Refund",
    id: "/table/02.png"

  },

  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$180,000",
    status: "Paid",
    id: "/table/03.png"

  },
  {
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$180,000",
    status: "Refund",
    id: "/table/04.png"

  },

  {
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$180,000",
    status: "Paid",
    id: "/table/05.png"

  },
];

export function DataTable ()
{
  return (
    <div className="mt-5">
      <div>
        <Table>
          <TableHeader className="">
            <TableRow className="border-b border-sidebar-border">
              <TableHead className="text-[#9CA4AB] font-medium">Name</TableHead>
              <TableHead className="text-[#9CA4AB] font-medium">Date</TableHead>
              <TableHead className="text-[#9CA4AB] font-medium">Amount</TableHead>
              <TableHead className="text-[#9CA4AB] font-medium">Status</TableHead>
              <TableHead className="text-[#9CA4AB] font-medium">Invoice</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tabeData.map(({ name, date, amount, status, id }, index) => (
              <TableRow key={index} className="border-b border-sidebar-border">
                <TableCell className="">
                  <div className="w-full space-x-5 flex items-center">
                    <Image src={id} alt="dp" width={32} height={32}/>
                    <p className="font-medium text-[#3A3F51]">{name}</p>
                  </div>
                </TableCell>
                <TableCell className="text-neutral-500">
                  {date}
                </TableCell>
                <TableCell className="font-medium text-[#0D062D]" >
                  {amount}
                </TableCell>
                <TableCell className={cn(status === "Refund" ? "text-[#ED544E]" : "text-[#34CAA5]")}>
                  {status}
                </TableCell>
                <TableCell className="font-medium text-[#0D062D]" >
                  <div className="w-auto flex items-center">
                    <Icons.tableView/>

                    <p className="text-sm text-[#0D062D] ml-[6px]">
                              View
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export const units = [
  {
    value: "box",
    label: "box",
  },

  {
    value: "cm",
    label: "cm",
  },
  {
    value: "ft",
    label: "ft",
  },
  {
    value: "kg",
    label: "kg",
  },
];
