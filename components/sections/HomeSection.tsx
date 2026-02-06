import React, { useEffect, useState } from 'react';
import profile from "../../assets/profile.jpg";
import { TextHoverEffect } from '../ui/text-hover-effect';
import { GitHubContributionGraph } from '../githubContributionGraph';
import { instrumentSerif } from '@/lib/utils';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from 'next-themes';
import { BlurFade } from '../ui/blur-fade';
function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 134 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='size-6'
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z"
          fill="#4285F4"
        />
        <path
          d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848"
          fill="#34A853"
        />
        <path
          d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727"
          fill="#FBBC04"
        />
        <path
          d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576"
          fill="#EA4335"
        />
        <path
          d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="133.333" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LeetcodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 94 110.92"
      className='size-6'
    >
      <defs />
      <g id="LeetCode’s-new-logo" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <g transform="translate(-812.000000, -3714.000000)" id="logo_english_dark">
          <g transform="translate(812.000000, 3714.000000)">
            <g id="Logo_English">
              <g id="Group-10">
                <path d="M67.5068339,83.0664138 C70.0005384,80.5763786 74.0371402,80.5828822 76.5228362,83.0809398 C79.0085322,85.5789975 79.00204,89.6226456 76.5083355,92.1126808 L65.4351451,103.169577 C55.2192332,113.370744 38.5604663,113.518673 28.1722578,103.513204 C28.112217,103.455678 23.486583,98.9201326 8.22702585,83.9570195 C-1.92478479,74.0028895 -2.93614945,58.0748736 6.61697549,47.8463644 L24.4286944,28.7745461 C33.9100043,18.6218594 51.3874487,17.5122246 62.2279907,26.2789232 L78.4052912,39.3620235 C81.1448956,41.5776292 81.5728103,45.5984975 79.3610655,48.3428842 C77.1493207,51.0872709 73.1354592,51.5159327 70.3958548,49.300327 L54.2186634,36.2173149 C48.5492813,31.6325105 38.631911,32.2621597 33.7398535,37.5006265 L15.9279056,56.5726899 C11.2772073,61.552182 11.7865613,69.5740156 17.1461283,74.8292186 C28.3515339,85.8169393 36.9874071,94.2846214 36.9973988,94.294225 C42.3981571,99.4959838 51.130862,99.418438 56.43358,94.1233737 L67.5068339,83.0664138 Z" id="Combined-Shape" fill="#FFA116" fillRule="nonzero" />
                <path d="M40.6069914,72.0014117 C37.086019,72.0014117 34.2317068,69.142117 34.2317068,65.6149982 C34.2317068,62.0878794 37.086019,59.2285847 40.6069914,59.2285847 L87.6247154,59.2285847 C91.1456879,59.2285847 94,62.0878794 94,65.6149982 C94,69.142117 91.1456879,72.0014117 87.6247154,72.0014117 L40.6069914,72.0014117 Z" id="Path-2" fill="#B3B3B3" />
                <path d="M49.4124315,2.02335002 C51.8178981,-0.552320454 55.852269,-0.686893945 58.4234511,1.72277172 C60.9946333,4.13243738 61.1289722,8.17385083 58.7235056,10.7495213 L15.9282277,56.5728697 C11.2773659,61.551984 11.7867168,69.5737689 17.1459309,74.8291832 L36.9094236,94.2091099 C39.4255514,96.6764051 39.4686234,100.719828 37.0056277,103.240348 C34.5426319,105.760868 30.5062548,105.804016 27.990127,103.33672 L8.22654289,83.9567041 C-1.92467414,74.0021005 -2.93603527,58.0741402 6.61751533,47.846311 L49.4124315,2.02335002 Z" id="Stroke-3" fill="#000000" />
              </g>

            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
function LeetcodeIconDark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 94 110.92"
      className='size-6'
    >
      <defs />
      <g id="LeetCode’s-new-logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-812.000000, -3714.000000)" id="logo_english_dark">
          <g transform="translate(812.000000, 3714.000000)">
            <g id="Logo_English">
              <g id="Group-10">
                <path d="M67.5068339,83.0664138 C70.0005384,80.5763786 74.0371402,80.5828822 76.5228362,83.0809398 C79.0085322,85.5789975 79.00204,89.6226456 76.5083355,92.1126808 L65.4351451,103.169577 C55.2192332,113.370744 38.5604663,113.518673 28.1722578,103.513204 C28.112217,103.455678 23.486583,98.9201326 8.22702585,83.9570195 C-1.92478479,74.0028895 -2.93614945,58.0748736 6.61697549,47.8463644 L24.4286944,28.7745461 C33.9100043,18.6218594 51.3874487,17.5122246 62.2279907,26.2789232 L78.4052912,39.3620235 C81.1448956,41.5776292 81.5728103,45.5984975 79.3610655,48.3428842 C77.1493207,51.0872709 73.1354592,51.5159327 70.3958548,49.300327 L54.2186634,36.2173149 C48.5492813,31.6325105 38.631911,32.2621597 33.7398535,37.5006265 L15.9279056,56.5726899 C11.2772073,61.552182 11.7865613,69.5740156 17.1461283,74.8292186 C28.3515339,85.8169393 36.9874071,94.2846214 36.9973988,94.294225 C42.3981571,99.4959838 51.130862,99.418438 56.43358,94.1233737 L67.5068339,83.0664138 Z" id="Combined-Shape" fill="#FFA116" fillRule="nonzero" />
                <path d="M40.6069914,72.0014117 C37.086019,72.0014117 34.2317068,69.142117 34.2317068,65.6149982 C34.2317068,62.0878794 37.086019,59.2285847 40.6069914,59.2285847 L87.6247154,59.2285847 C91.1456879,59.2285847 94,62.0878794 94,65.6149982 C94,69.142117 91.1456879,72.0014117 87.6247154,72.0014117 L40.6069914,72.0014117 Z" id="Path-2" fill="#B3B3B3" />
                <path d="M49.4124315,2.02335002 C51.8178981,-0.552320454 55.852269,-0.686893945 58.4234511,1.72277172 C60.9946333,4.13243738 61.1289722,8.17385083 58.7235056,10.7495213 L15.9282277,56.5728697 C11.2773659,61.551984 11.7867168,69.5737689 17.1459309,74.8291832 L36.9094236,94.2091099 C39.4255514,96.6764051 39.4686234,100.719828 37.0056277,103.240348 C34.5426319,105.760868 30.5062548,105.804016 27.990127,103.33672 L8.22654289,83.9567041 C-1.92467414,74.0021005 -2.93603527,58.0741402 6.61751533,47.846311 L49.4124315,2.02335002 Z" id="Stroke-3" fill="#fff" />
              </g>

            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
export const HomeSection: React.FC = () => {
  const [graphSize, setGraphSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');
  const { theme } = useTheme();
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 735) {
        setGraphSize('lg');       // Mobile
      } else if (width < 890) {
        setGraphSize('sm');       // Small tablet
      } else if (width < 1024) {
        setGraphSize('md');       // Tablet
      } else if (width < 1280) {
        setGraphSize('lg');       // Small desktop
      } else if (width < 1536) {
        setGraphSize('xl');       // Desktop
      } else {
        setGraphSize('2xl');      // Large desktop
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <>
      {/* GitHub Contribution Graph - Fixed behind everything with fade effect */}
      <div className=" absolute top-0 left-0 w-full overflow-hidden pointer-events-none flex items-start justify-center pt-1 z-20 bg-white/40 dark:bg-black/40">
        <div
          className="w-full  "
          style={{
            // Stronger visibility, slower fade
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        >
          {/* Higher opacity - more visible */}
          <div className="opacity-70 dark:opacity-70">
            <GitHubContributionGraph username="Its-Shinde4241" size={graphSize} minimal />
          </div>
        </div>
      </div>

      <div className={`select-none w-full h-50 absolute md:top-10 lg:top-25 left-0 z-40`}>
        <TextHoverEffect text="TECHNOPHILE" automatic />
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center pointer-events-none select-none  z-50 ">

        <BlurFade delay={0.1} className="w-full">
          <div className='w-full flex items-center justify-center sm:justify-start'>
            <img src={profile.src} alt="Profile" className="w-30 h-30  object-top contrast-105 overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_rgba(14,165,233,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-2 relative group pointer-events-none rounded-full" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h1 className={`text-3xl ${instrumentSerif.className} font-instrument-serif text-center sm:text-left`}>
              Shubham Namdev Shinde
            </h1>
            <div className="flex items-center justify-center sm:justify-end gap-4 z-50 pointer-events-auto">
              <Link href="https://github.com/Its-Shinde4241" target="_blank">
                <IoLogoGithub
                  size={24}
                  className="text-[#333] dark:text-white hover:scale-110 transition"
                />
              </Link>
              <Link href="https://leetcode.com/u/its_Shinde4241" target="_blank" className='hover:scale-110 transition'>
                {/* <LeetcodeIcon /> */}
                {
                  theme === 'dark' ? <LeetcodeIconDark /> : <LeetcodeIcon />
                }
              </Link>

              <Link href="https://x.com/Shubhs42" target="_blank">
                <FaXTwitter
                  size={24}
                  className="text-black dark:text-white hover:scale-110 transition"
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shubham-shinde-3a36b528a"
                target="_blank"
              >
                <FaLinkedin
                  size={24}
                  className="text-[#0A66C2] hover:scale-110 transition"
                />
              </Link>

              <Link href="mailto:shubhamshinde4241@gmail.com" className='hover:scale-110 transition'>
                <MailIcon />
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-gray-600 text-center sm:text-left">
              Full Stack Developer | Software Engineer
            </p>
          </div>
        </BlurFade>


      </div>
    </>
  );
};