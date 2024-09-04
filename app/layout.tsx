import type { Metadata } from "next";
import { nostromo } from "@/app/fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alleycat Agency",
  description: "Alleycat Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nostromo.className} max-w-5xl m-auto bg-black text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
