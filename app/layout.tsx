import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "TOP User Client Management",
  description: "Sistem manajemen User dan Client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <AppSidebar />
        <div className="flex-1 flex flex-col  m-4 ">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
