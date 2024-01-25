import { DataTable } from "@/app/dashboard/data-table";
import { Icons } from "@/components/icons";
import React from "react";
import ReactChart from "@/app/dashboard/chart-two";

const cardData = [
  {
    lable: "Total Order",
    amount: "350",
    icon: <Icons.totalOrder />,
    graph: <Icons.totalOrderGraph />,
    theme: "green",
  },
  {
    lable: "Total Refund",
    amount: "270",
    icon: <Icons.totalRefund />,
    graph: <Icons.totalRefundGraph />,
    theme: "red",
  },
  {
    lable: "Average Sales",
    amount: "1576",
    icon: <Icons.averageSales />,
    graph: <Icons.totalRefundGraph />,
    theme: "red",
  },
  {
    lable: "Total Income",
    amount: "$350.000",
    icon: <Icons.totalIncome />,
    graph: <Icons.totalOrderGraph />,
    theme: "green",
  },
];

const topPlatform = [
  {
    label: "Book Bazaar",
    theme: "bg-purple-500",
    amount: " $2,500,000",
    cent: "35%",
  },
  {
    label: "Artisan Aisle",
    theme: "bg-blue-500",
    amount: "$1,800,000",
    cent: "40%",
  },
  {
    label: "Toy Troop",
    theme: "bg-orange-500",
    amount: "$1,200,000",
    cent: "10%",
  },
  {
    label: "XStore",
    theme: "bg-red-500",
    amount: " $2,500,000",
    cent: "75%",
  },
];

const Dashboard = () => {
  return (
    <main className="bg-background p-5 w-full h-auto min-h-[100vh]  dark:bg-neutral-950">
      <div className="grid  md:grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5 ">
        <div className="md:col-span-7 order-2 md:order-1 md:h-[384px] bg-white space-y-5 border border-[#EDF2F7] px-5 p-4 rounded-[14px] dark:bg-neutral-900 dark:border-neutral-600">
          <div className="w-full flex items-center justify-between">
            <p className="text-lg font-semibold">Sales Trends</p>

            <div className="w-auto flex items-center">
              <p className="text-sm font-medium">Short by :</p>

              <div className="border border-[#E1DFDF] rounded-full px-3 p-[6px] space-x-2 w-24 flex items-center ml-[10px] dark:border-neutral-600">
                <p className="text-xs text-[#3A3F51] capitalize dark:text-neutral-400">weekly</p>

                <svg className="fill-black dark:fill-neutral-600" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"
                    fill="inherit"
                  />
                </svg>
              </div>
            </div>
          </div>

          <ReactChart />
        </div>

        <div className="md:col-span-5 md:h-[374px] grid gap-4 grid-cols-2 order-1 md:order-2">
          {cardData.map((item, index) => (
            <div key={index} className="w-full rounded-[14px] p-4 bg-white space-y-[10px] border border-[#EDF2F7] relative dark:bg-neutral-900 dark:border-neutral-600">
              <div className="w-full flex items-center justify-between">
                <div className="w-10 h-10 rounded-full border centered dark:border-neutral-600">{item.icon}</div>

                <span className="hidden md:flex">
                  {item.graph}
                </span>
              </div>

              <div className="w-auto space-y-[5px]">
                <p className="text-lg text-[#898989]">{item.lable}</p>

                <p className="text-2xl">{item.amount}</p>
              </div>

              <div className="w-full items-center md:flex md:justify-between">
                {item.theme === "green" ? (
                  <div className="bg-[#34CAA51F] px-2 p-1 w-[70px] flex rounded-full gap-1 items-center">
                    <Icons.greenArrowUp />

                    <p className="font-medium text-xs text-[#34CAA5]">23,5%</p>
                  </div>
                ) : (
                  <div className="bg-[#ED544E1F] px-2 p-1 w-[70px] flex rounded-full gap-1 items-center">
                    <Icons.redArrowDown />

                    <p className="font-medium text-xs text-[#ED544E]">23,5%</p>
                  </div>
                )}

                <p className="text-sm text-[#606060] font-inter">vs. previous month</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5 mt-5 ">
        <div className="md:col-span-7 md:h-[460px] overflow-x-auto md:overflow-x-hidden bg-white  border border-[#EDF2F7] px-5 p-4 rounded-[14px] dark:bg-neutral-900 dark:border-neutral-600">
          <div className="w-full flex items-center justify-between">
            <p className="text-lg font-semibold">Last Orders</p>
            <p className="text-lg font-medium text-[#34CAA5]">See All</p>
          </div>

          <DataTable />
        </div>

        <div className="md:col-span-5 h-auto bg-white px-5 p-4 rounded-[8px] dark:bg-neutral-900 dark:border-neutral-600">
          <div className="w-full flex items-center justify-between">
            <p className="text-lg font-semibold">Top Platform</p>
            <p className="text-lg font-medium text-[#34CAA5]">See All</p>
          </div>

          <div className="w-full space-y-5 mt-5 ">
            {topPlatform.map((item, index) => (
              <div key={index} className="w-full space-y-4">
                <p className="text-lg font-semibold text-[#22242C]">{item.label}</p>

                <div className="w-full h-3 rounded-xl relative bg-gray-200">
                  <div
                    style={{ width: item.cent }}
                    className={`absolute left-0 top-0 h-3 ${item.theme} rounded-xl`}
                  ></div>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="text-lg text-[#525252]">{item.amount}</p>
                  <p className="text-lg text-[#525252]">+{item.cent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
