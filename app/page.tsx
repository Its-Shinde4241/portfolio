import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Engineer - Full Stack Developer & problem solver",
  description: "Building interactive web experiences with thoughtful UI and clean engineering.",
  openGraph: {
    title: "Engineer - Full Stack Developer & problem solver",
    description: "Building interactive web experiences with thoughtful UI and clean engineering.",
    url: "https://shubhamshinde.engineer",
    images: [
      {
        url: "https://shubhamshinde.engineer/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineer - Full Stack Developer & problem solver",
    description: "Building interactive web experiences with thoughtful UI and clean engineering.",
    images: ["https://shubhamshinde.engineer/preview.png"],
  },
};

export default function Page() {
  return <Home />;
}
