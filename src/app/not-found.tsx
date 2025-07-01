"use client";

import { TextDecrypt } from "@/components/TextDecrypt";
import { orbitron } from "@/lib/googleFonts";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-tl dark:from-black from-gray-500 via-zinc-100 to-gray-400 dark:via-zinc-900 dark:to-black">
      <div
        className={`relative w-2/3 comet font-bold transform -rotate-50 sm:-rotate-45 md:-rotate-35 lg:-rotate-25  select-none ${orbitron.className} text-zinc-800 dark:text-white`}
      >
        <h3 className="text-center w-full animate-vibrate sm:text-3xl lg:text-5xl">
          <TextDecrypt
            text="COORDINATES UNKNOWN"
            className={` w-full ${orbitron.className}`}
          />
        </h3>
        <h5 className="text-center w-full animate-vibrate text-base md:text-xl lg:text-2xl">
          YOU LOST......
        </h5>
      </div>
    </div>
  );
}
