"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  User,
  Settings,
  LogOut,
  PanelRightOpen,
  PanelRightClose,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Daftar Klien", icon: BookOpen, href: "/client" },
  { name: "Module", icon: User, href: "/role" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Register", icon: UserPlus, href: "/register" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-gradient-to-tl from-[#145defe8] to-[#ffffffc6] shadow-lg border-r border-gray-200 transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <span className="font-bold text-lg text-gray-800 whitespace-nowrap">
            <Link href="/">TOP User Management</Link>
          </span>
        )}
        {collapsed ? (
          <PanelRightOpen
            size={22}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300 ml-2"
            onClick={() => setCollapsed(false)}
          />
        ) : (
          <PanelRightClose
            size={22}
            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300 ml-2"
            onClick={() => setCollapsed(true)}
          />
        )}
      </div>

      {/* Content */}
      <SidebarContent collapsed={collapsed} />
    </div>
  );
}

function SidebarContent({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex-1 flex flex-col gap-1 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ease-in-out",
                active
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-gray-300">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg hover:bg-gray-50 hover:text-black text-white transition-colors duration-200 ease-in-out">
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </>
  );
}
