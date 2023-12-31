import type { Metadata } from "next";
import { Inter, Geologica } from "next/font/google";
import Providers from "@/providers";
import "./globals.css";

import BackgroundLayout from "@/components/BackgroundLayout";

const inter = Inter({ subsets: ["latin"] });
const geologica = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geologica.className}`}>
        <div className="min-h-screen bg-stone-900 prose-headings:font-mono overflow-hidden prose-headings:text-lime-400 text-white prose-headings:font-medium">
          <BackgroundLayout />
          <div className="relative z-10 selection:bg-lime-300 selection:text-lime-900 ">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
