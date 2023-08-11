import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

import React from "react";

export const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
