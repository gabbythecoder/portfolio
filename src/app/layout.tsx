import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabby French - Portfolio",
  description:
    "Personal portfolio showcasing my personal web development projects and technical skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} h-full w-full overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
