import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The Connected Workspace Where Better, Faster Work Happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logoDark.svg",
        href: "/logoDark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logoDark.svg",
        href: "/logoDark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="jotion-theme-2" 
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
