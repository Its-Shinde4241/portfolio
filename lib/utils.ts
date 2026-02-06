import { clsx, type ClassValue } from "clsx"
import { Instrument_Serif } from "next/font/google";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",      // Instrument Serif only has 400
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});