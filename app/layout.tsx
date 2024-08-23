import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/nav-bar";
import { ThemeProvider } from "./theme-provider";
import { Separator } from "@/components/ui/separator";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aditya Vashisht",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col max-w-2xl mx-auto px-8 pt-8 mb-4">
        <ThemeProvider attribute="class" defaultTheme="system">
          <header className="flex justify-between">
            <NavBar />
          </header>
          <main className="pt-12">{children}</main>

          <footer className="my-auto">
            <div className="flex items-center mb-1">
              <Link
                href="https://github.com/adityavsht"
                target="_blank"
                className="hover:bg-accent p-2"
              >
                <GitHubLogoIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adityavashisht"
                target="_blank"
                className="hover:bg-accent p-2"
              >
                <LinkedInLogoIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com/vashishtaditya_"
                target="_blank"
                className="hover:bg-accent p-2"
              >
                <TwitterLogoIcon className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:adityavashisht03@gmail.com"
                className="hover:bg-accent p-2"
              >
                <EnvelopeClosedIcon className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sm">Aditya Vashisht © 2024</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
