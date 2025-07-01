"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import MobileView from "./MobileViewNavbar";

const iconWrapperVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const navItems = [
  {
    id: "home",
    label: "home",
    delay: 1,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <path
          fill="currentColor"
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"
        />
      </svg>
    ),
  },
  {
    id: "about",
    label: "about",
    delay: 1.2,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <path
          fill="currentColor"
          d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1-128 0zm256-32h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "projects",
    delay: 1.4,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <path
          fill="currentColor"
          d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1.1-32.1s-16.2-16-27.7-16H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16h117.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48v-32c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320z"
        />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "skills",
    delay: 1.6,
    svg: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="currentColor"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <style type="text/css"> </style>{" "}
          <g>
            {" "}
            <path
              className="st0"
              d="M475.619,295.498l-41.406-87.766c0.109-2.625,0.203-5.266,0.203-7.906 c0-110.359-89.469-199.828-199.828-199.828S34.744,89.467,34.744,199.826c0,62.063,28.297,117.5,72.672,154.156v70.641 c0,6.891,4.125,13.125,10.453,15.797l165.516,70.219c5.281,2.25,11.359,1.688,16.172-1.484c4.797-3.188,7.688-8.563,7.688-14.313 v-59.844c0-9.484,7.688-17.172,17.172-17.172h84.75c9.484,0,17.156-7.703,17.156-17.172v-51.609c0-6.563,3.766-12.563,9.672-15.438 l31.594-15.344C476.041,314.154,479.619,303.998,475.619,295.498z M234.588,335.717c-75.047,0-135.891-60.828-135.891-135.891 c0-75.047,60.844-135.875,135.891-135.875s135.875,60.828,135.875,135.875C370.463,274.889,309.635,335.717,234.588,335.717z"
            ></path>{" "}
            <path
              className="st0"
              d="M330.432,216.623c3.672-0.281,6.484-3.328,6.484-7.016v-16.766c0-3.688-2.813-6.734-6.484-7.031l-22.234-1.734 c-1.391-0.094-2.625-0.984-3.156-2.297l-7.328-17.656c-0.531-1.297-0.297-2.797,0.609-3.875l14.5-16.953 c2.391-2.781,2.234-6.938-0.375-9.531l-11.859-11.875c-2.609-2.594-6.766-2.75-9.547-0.375l-16.953,14.5 c-1.063,0.906-2.578,1.156-3.859,0.625l-17.656-7.328c-1.313-0.531-2.203-1.766-2.313-3.172l-1.719-22.219 c-0.297-3.688-3.359-6.5-7.031-6.5h-16.781c-3.672,0-6.734,2.813-7.016,6.5l-1.719,22.219c-0.109,1.406-1.016,2.641-2.328,3.172 l-17.641,7.328c-1.313,0.531-2.797,0.281-3.875-0.625l-16.953-14.5c-2.797-2.375-6.953-2.219-9.547,0.375l-11.859,11.875 c-2.594,2.594-2.766,6.75-0.375,9.531l14.5,16.953c0.906,1.078,1.156,2.578,0.609,3.875l-7.313,17.656 c-0.531,1.313-1.781,2.203-3.188,2.297l-22.234,1.734c-3.656,0.297-6.469,3.344-6.469,7.031v16.766 c0,3.688,2.813,6.734,6.469,7.016l22.234,1.734c1.406,0.109,2.656,1,3.188,2.313l7.313,17.656c0.547,1.281,0.297,2.797-0.609,3.859 l-14.5,16.969c-2.391,2.781-2.219,6.938,0.375,9.531l11.859,11.859c2.594,2.609,6.75,2.766,9.547,0.391l16.953-14.516 c1.078-0.891,2.563-1.141,3.875-0.594l17.641,7.313c1.313,0.531,2.219,1.766,2.328,3.156l1.719,22.25 c0.281,3.656,3.344,6.484,7.016,6.484h16.781c3.672,0,6.734-2.828,7.031-6.484l1.719-22.25c0.109-1.391,1-2.625,2.313-3.156 l17.656-7.313c1.281-0.547,2.797-0.297,3.859,0.594l16.953,14.516c2.781,2.375,6.938,2.219,9.547-0.391l11.859-11.859 c2.609-2.594,2.766-6.75,0.375-9.531l-14.5-16.969c-0.906-1.063-1.141-2.578-0.609-3.859l7.328-17.656 c0.531-1.313,1.766-2.203,3.156-2.313L330.432,216.623z M233.119,236.311c-9.375,0-18.188-3.656-24.813-10.281 s-10.266-15.438-10.266-24.797c0-9.375,3.641-18.188,10.266-24.813c6.625-6.641,15.438-10.281,24.813-10.281 s18.188,3.641,24.813,10.281c6.625,6.625,10.266,15.438,10.266,24.813c0,9.359-3.641,18.172-10.266,24.797 S242.494,236.311,233.119,236.311z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: "timeline",
    label: "Timeline",
    delay: 1.6,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <path
          fill="currentColor"
          d="m243.4 2.6-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224h-64v192h-40V224h-64v192h-48V224h-64v192h-40V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
      </svg>
    ),
  },
  {
    id: "resume",
    label: "resume",
    delay: 1.6,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 491.52 491.52"
        className="group-hover:scale-110 transition-all duration-300 ease-in-out size-7 dark:text-foreground/90 scale-90 sm:scale-100"
      >
        <path d="M334.879 7.93v86.377h86.377zM224.046 71.948l-14.926-5.241a4.706 4.706 0 0 0-3.206.046c-3.228 1.223-7.51 2.818-10.204 3.677-2.028.65-4.126.976-6.255.976H175.93a8.928 8.928 0 0 0-3.369 1.668c-.128.102-.244.286-.372.401-.528.468-1.061.965-1.534 1.662-.591.872-1.113 1.936-1.483 3.244V105.168s.643 17.783 11.451 24.937c.123.084.212.151.331.232.01.006.022.009.032.016.079.053.153.114.231.168a61.773 61.773 0 0 1 3.121 2.278c6.744 5.295 11.876 7.208 13.123 7.169a7.2 7.2 0 0 1 1.316.078c.433.034 5.272.422 11.006-3.567a25.526 25.526 0 0 0 2.511-1.999 56.993 56.993 0 0 1 5.775-4.545c.061-.038.634-.441.697-.48 2.789-1.879 9.641-8.257 11.234-25.382V78.351c-.233-1-1.371-4.715-5.954-6.403zM182.486 161.503l-6.779-4.529 8.018 14.582 1.618-2.214.031-.039.909-1.235 1.984-2.7zM231.121 52.818a7.94 7.94 0 0 1-5.295-4.274 7.935 7.935 0 0 1-.031-6.805c.023-.061.055-.24.085-.418-.17-.015-.488-.116-.983-.24h-42.496c-11.342 0-20.593 9.143-20.764 20.446.176-.155.363-.256.541-.404a24.645 24.645 0 0 1 1.871-1.395c.428-.293.843-.604 1.273-.861a24.41 24.41 0 0 1 2.04-1.08c.376-.182.749-.393 1.118-.55.753-.32 1.468-.561 2.181-.786.273-.086.559-.207.824-.281.956-.263 1.86-.454 2.67-.559a8.98 8.98 0 0 1 1.015-.062h14.284a4.73 4.73 0 0 0 1.432-.224c2.469-.79 6.41-2.261 9.399-3.398a20.469 20.469 0 0 1 3.547-.985c.304-.056.613-.051.918-.093.907-.126 1.814-.24 2.726-.244.035 0 .067-.009.101-.009.643 0 1.279.101 1.919.161.485.045.972.041 1.454.121 1.156.192 2.299.478 3.417.872l15.035 5.28a26.92 26.92 0 0 1 4.289 2.034c.488.285.896.612 1.349.915.762.515 1.519 1.026 2.187 1.587.123.104.284.189.405.294v-2.044c-.286-1.308-1.625-5.829-6.511-6.998z" />
        <path d="M279.741 183.091a11.096 11.096 0 0 0-7.169-8.609l-33.933-12.28-15.329 27.881a7.909 7.909 0 0 1-6.426 4.095c-.177.008-.348.016-.518.016a7.912 7.912 0 0 1-6.388-3.236l-10.413-14.18-1.037 1.405c-.006.012-.017.025-.025.037l.002.002-.373.502.002.001-8.973 12.233a7.932 7.932 0 0 1-6.395 3.236c-.17 0-.341-.008-.518-.016a7.922 7.922 0 0 1-6.426-4.095l-15.335-27.881-33.935 12.28a11.115 11.115 0 0 0-7.169 8.609l-4.166 25.161.643.751h167.412l.635-.751-4.166-25.161z" />
        <path d="M326.95 110.162a7.923 7.923 0 0 1-7.928-7.927V0H62.335v491.52h366.849V110.162H326.95zM99.577 205.659l4.166-25.154a26.966 26.966 0 0 1 17.419-20.934l40.305-14.586s.009 0 .014-.002l.009-.005 7.131-2.553v-1.603c-14.614-12.649-15.284-34.489-15.306-35.483v-5.013c-.166-2.562-.913-4.707-2.245-6.36-3.415-4.251-5.288-9.616-5.288-15.113V61.837c0-20.191 16.428-36.612 36.619-36.612h43.347a7.6 7.6 0 0 1 1.509.147c7.758 1.502 11.288 5.574 12.891 8.718a15.048 15.048 0 0 1 1.602 6.116c7.858 4.715 11.04 12.968 11.675 17.937.038.333.062.666.062.999V82.29c0 3.569-1.007 7.076-2.919 10.142-3.615 5.791-4.792 13.2-4.8 13.277-.02.134-.099.239-.126.369-2.046 19.233-9.383 29.254-15.133 34.253v2.094l7.123 2.551.008.005c.005.002.009 0 .015.002l40.305 14.586a26.944 26.944 0 0 1 17.419 20.934l4.165 25.161a16.458 16.458 0 0 1-3.685 13.362 16.459 16.459 0 0 1-12.588 5.83H115.859a16.502 16.502 0 0 1-12.596-5.83 16.471 16.471 0 0 1-3.686-13.367zm233.799 241.819H107.281a7.924 7.924 0 0 1-7.928-7.928 7.923 7.923 0 0 1 7.928-7.927h226.095a7.922 7.922 0 0 1 7.927 7.927 7.921 7.921 0 0 1-7.927 7.928zm50.865-42.294h-276.96a7.923 7.923 0 0 1-7.928-7.927 7.924 7.924 0 0 1 7.928-7.928h276.96a7.923 7.923 0 0 1 7.927 7.928 7.923 7.923 0 0 1-7.927 7.927zm0-42.302h-276.96a7.924 7.924 0 0 1-7.928-7.928 7.923 7.923 0 0 1 7.928-7.927h276.96a7.923 7.923 0 0 1 7.927 7.927 7.923 7.923 0 0 1-7.927 7.928zm0-42.294h-276.96a7.923 7.923 0 0 1-7.928-7.927 7.924 7.924 0 0 1 7.928-7.928h276.96a7.923 7.923 0 0 1 7.927 7.928 7.923 7.923 0 0 1-7.927 7.927zm0-42.294h-276.96c-4.382 0-7.928-3.546-7.928-7.928s3.546-7.928 7.928-7.928h276.96c4.381 0 7.927 3.546 7.927 7.928s-3.546 7.928-7.927 7.928z" />
        <path d="m210.861 165.37 4.544 6.194 8.013-14.586z" />
      </svg>
    ),
  },
];

const Navbar = ({
  scrollref,
}: {
  scrollref: React.RefObject<HTMLDivElement | null>;
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [targetHeight, setTargetHeight] = useState("12rem");
  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight <= 500) {
        setTargetHeight("1.5rem"); 
      } else if (window.innerHeight <= 600) {
        setTargetHeight("5rem");
      } else {
        setTargetHeight("12rem");
      }
    };

    checkHeight(); 
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToElementSlow = (target: string) => {
    if (!scrollref.current) return;
    const id = target.startsWith("#") ? target.slice(1) : target;
    const element = document.getElementById(id);
    if (!element) return;

    const container = scrollref.current;
    // Calculate offsetTop relative to the container
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const targetPosition =
      elementRect.top - containerRect.top + container.scrollTop;
    const startPosition = container.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      container.scrollTop = startPosition + distance * ease;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <div className="sm:hidden">
        <MobileView scrollref={scrollref} />
      </div>
      <div className=" hidden fixed bottom-0 left-4 sm:left-9 z-30 sm:flex flex-col items-center gap-4">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            initial="initial"
            animate="animate"
            variants={iconWrapperVariants}
            transition={{ type: "spring", duration: 1, delay: item.delay }}
            className="  cursor-pointer"
          >
            <div className="group relative flex items-center justify-center">
              <button
                onClick={() => {
                  scrollToElementSlow(`#${item.id}`);
                  setActiveSection(item.id);
                }}
                className={`transition-transform duration-300 cursor-pointer ${
                  activeSection === item.id ? "scale-125 text-primary" : ""
                }`}
              >
                {item.svg}
              </button>
              <Badge
                className={` ml-2.5 absolute bg-foreground/70 text-background scale-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 translate-x-7 group-hover:translate-x-12 transition-all duration-300 origin-left ease-in-out ${
                  activeSection === item.id
                    ? "!scale-100 !opacity-100 !translate-x-12"
                    : ""
                }`}
                variant={"outline"}
              >
                {item.label}
              </Badge>
            </div>
          </motion.div>
        ))}

        <motion.span
          className=" w-[2px] sm:w-[4px] rounded-full"
          style={{ backgroundColor: "var(--primary)" }}
          initial={{ height: 0 }}
          animate={{ height: targetHeight }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
        />
      </div>
    </>
  );
};

export default Navbar;
