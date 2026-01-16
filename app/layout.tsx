import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Shinde - The Engineer",
  description:
    "The Engineer - Full Stack Developer & problem solver. Building interactive web experiences through thoughtful UI design and careful attention to detail.",

  openGraph: {
    title: "Shubham Shinde - The Engineer",
    description:
      "The Engineer - Full Stack Developer & problem solver. Building interactive web experiences through thoughtful UI design and careful attention to detail.",
    images: [
      {
        url: "https://shubhamshinde.engineer/preview.png",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Shinde - The Engineer",
    description:
      "The Engineer - Full Stack Developer & problem solver. Building interactive web experiences through thoughtful UI design and careful attention to detail.",
    images: ["https://shubhamshinde.engineer/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
