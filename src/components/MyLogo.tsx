import React from "react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useState } from "react";

export default function Mylogo({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex items-center justify-center ${className} cursor-default group pointer-events-auto z-50`}
    >
      <div
        className="rounded-full backdrop-blur-xl ring-1 ring-foreground/10 dark:bg-foreground/15 bg-white/10 hover:shadow-xl hover:shadow-foreground/20 duration-300"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="size-13 flex items-center justify-center container">
          <a
            href="/"
            className="flex items-center justify-center w-full h-full"
          >
            <svg
              className="scale-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500 fill-current text-foreground dark:hover:text-[#00bfbf] bg-transparent"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="53"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M19.512 52.872c-1.707 0-3.456-.299-5.248-.896-1.707.427-3.2.64-4.48.64-2.987 0-5.29-.683-6.912-2.048-1.707-1.45-2.56-2.987-2.56-4.608 0-1.963.81-2.944 2.432-2.944.939 0 2.475.853 4.608 2.56 1.365 1.11 2.517 2.048 3.456 2.816 1.024.683 1.877 1.195 2.56 1.536 1.877-1.11 3.413-2.859 4.608-5.248 1.621-3.243 2.432-6.87 2.432-10.88 0-1.45-.128-2.944-.384-4.48A62.419 62.419 0 0 0 19 24.456c-.512-1.707-1.237-3.499-2.176-5.376a155.053 155.053 0 0 0-2.816-5.376c-.853-1.792-1.408-3.285-1.664-4.48-1.28 2.987-2.304 6.357-3.072 10.112-.768 3.755-1.579 7.637-2.432 11.648-.17.683-.512 1.024-1.024 1.024-.427 0-.597-.341-.512-1.024.256-1.28.597-3.03 1.024-5.248.427-2.219.896-4.565 1.408-7.04.512-2.475 1.067-4.608 1.664-6.4 1.11-3.499 2.432-6.4 3.968-8.704 1.621-2.39 3.243-3.584 4.864-3.584h.384c1.877 0 2.816.81 2.816 2.432 0 1.28-.725 2.048-2.176 2.304-2.39.341-3.584 1.579-3.584 3.712 0 1.45.683 3.37 2.048 5.76 1.365 2.304 2.73 4.48 4.096 6.528 1.45 2.133 2.517 4.267 3.2 6.4a18.078 18.078 0 0 1 1.152 6.4c0 8.96-3.243 14.763-9.728 17.408 1.024.256 2.005.384 2.944.384 3.499 0 6.315-.896 8.448-2.688 2.219-1.877 3.968-4.352 5.248-7.424 1.365-3.072 2.432-6.485 3.2-10.24.17-.597.47-.896.896-.896.427 0 .64.299.64.896-1.11 6.827-3.2 12.203-6.272 16.128-2.987 3.84-6.997 5.76-12.032 5.76ZM9.4 51.08c.939 0 1.707-.17 2.304-.512a30.182 30.182 0 0 1-2.688-1.536c-.853-.683-1.835-1.45-2.944-2.304-1.45-1.11-2.56-1.664-3.328-1.664-.341 0-.512.256-.512.768 0 .341.17.81.512 1.408.256.512.725 1.11 1.408 1.792C5.517 50.397 7.267 51.08 9.4 51.08Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <Badge
        className={`ml-2 transition-all ease-in-out duration-500 origin-center  bg-foreground/25 ${
          isHovered ? " scale-100 origin-center" : "scale-0 origin-left "
        }`}
        variant={"secondary"}
      >
        <strong>Shubham Shinde</strong>
      </Badge>
    </div>
  );
}
