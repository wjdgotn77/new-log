import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Hackney's Blog`,
  description: "Hackney's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-8 pt-10 ">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
