import {
  Pirata_One,
  Kumar_One_Outline,
  Zen_Dots,
  Oswald,
  Rubik_80s_Fade,
  Ubuntu_Mono,
  Tilt_Prism,
  Orbitron,
  Audiowide,
} from "next/font/google";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
});
const kumarOneOutline = Kumar_One_Outline({
  weight: "400",
  subsets: ["latin"],
});
const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin-ext"],
});
const oswaldfont = Oswald({
  weight: "400",
  subsets: ["latin"],
});
const rubik80sFade = Rubik_80s_Fade({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-80s-fade",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

const tiltprism = Tilt_Prism({
  weight: "400",
  subsets: ["latin"],
});
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});
export {
  audiowide,
  pirataOne,
  kumarOneOutline,
  zenDots,
  oswaldfont,
  rubik80sFade,
  ubuntuMono,
  tiltprism,
  orbitron,
};
