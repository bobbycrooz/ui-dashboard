// import { Icons } from "@/components/icons";

import { DashboardNav } from "@/components/dashboard-nav";
import { Sidebar } from "@/components/sidebar";

export default function RootLayout ({ children }: { children: React.ReactNode })
{
  return (
    <main className="w-screen h-screen flex overflow-hidden">

      <Sidebar/>

      <section className="w-full bg-red-200 h-screen overflow-y-auto relative">
        <DashboardNav/>
        <main className="h-[cal(100vh - 88px)] overflow-y-auto">
          {children}
        </main>
      </section>

    </main>
  );
}
