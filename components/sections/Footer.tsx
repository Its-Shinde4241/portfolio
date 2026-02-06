import React, { useEffect, useState } from 'react';
import { Mail, Paperclip } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import { SiX } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { format } from 'date-fns';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className=" text-sm text-(--graytext) w-full">
      <hr className="pb-4" />

      <h1 className="text-2xl font-[Instrument_Serif] tracking-wide text-center">
        Let&apos;s Connect
      </h1>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-5 text-sm py-6">
        <Link
          href="https://github.com/Its-Shinde4241"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <BsGithub size={16} />
          <span>GitHub</span>
        </Link>

        <Link
          href="https://x.com/Shubhs42"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <SiX size={14} />
          <span>Twitter</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/shubham-shinde-3a36b528a"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <GrLinkedin size={16} />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="mailto:shubhamshinde4241@gmail.com"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Mail size={16} />
          <span>Mail</span>
        </Link>

        <a
          href="https://drive.google.com/file/d/1_UC8_HMbvUXVwpAlfbs9eBdKl_cs9fyn/view?usp=drive_link"

          download="Shubham_Shinde_Resume.pdf"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Paperclip size={16} />
          <span>Resume</span>
        </a>
      </div>

      <hr className="pb-4" />

      {/* Meta */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Top meta */}
        <div
          className="
      flex items-start justify-between
      gap-4
      text-xs sm:text-sm
    "
        >
          {/* Left */}
          <div className="space-y-1 text-left">
            <p>
              crafted by{" "}
              <span className="font-medium text-foreground">
                Shubham Shinde
              </span>
            </p>
            <p>
              <span className="font-medium text-foreground">
                Pune, India
              </span>
            </p>
          </div>

          {/* Right */}
          <div className="space-y-1 text-right">
            <p suppressHydrationWarning>
              <span className="hidden sm:inline">
                {format(currentTime, "hh:mm:ss a")}
              </span>
              <span className="sm:hidden">
                {format(currentTime, "hh:mm a")}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-1 text-center text-xs ">
          © 2026 Shubham Shinde.
        </div>
      </div>
    </footer>
  );
};