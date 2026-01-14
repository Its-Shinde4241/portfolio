import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import profile from "../../assets/profile.jpg"

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center p-6">
      <div className="flex-1 space-y-6">
        <h2 className="font-title text-4xl text-foreground">Who I Am</h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm a Computer Engineering undergrad at the prestigious <span className="text-foreground font-semibold">Pune Institute of Computer Technology (PICT)</span>, maintaining a stellar <span className="text-primary font-bold">CGPA of 9.80</span>. My academic journey is built on a foundation of excellence, demonstrated by securing rank <span className="text-foreground font-semibold">612</span> (99.71 percentile) in MHT-CET among over 2.5 lakh aspirants.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Beyond academics, I'm a passionate problem solver with <span className="text-foreground font-semibold">500+ DSA problems solved on LeetCode</span> (Max Rating: 1628) and a 2-Star rating on CodeChef. I engineer scalable systems and seamless full-stack experiences as a Software Engineer & Full Stack Developer.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4 select-none">
          {/* GitHub Card */}
          <a
            href="https://github.com/Its-Shinde4241"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl bg-card border border-border flex flex-col gap-2 hover:border-primary/50 transition-colors cursor-pointer text-left"
            style={{
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.2),
                0 12px 24px -8px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            <div className="flex justify-between items-start w-full">
              <Github className="text-muted-foreground" size={24} />
              <div className="flex items-center gap-0 overflow-hidden transition-all duration-500 ease-out group-hover:gap-1.5">
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-muted-foreground opacity-0 transition-all duration-500 ease-out group-hover:max-w-[50px] group-hover:opacity-100">
                  Visit
                </span>
                <ExternalLink size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
            <span className="text-2xl font-bold font-title">Active</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">GitHub Profile</span>
          </a>

          {/* DSA Card (LeetCode) */}
          <a
            href="https://leetcode.com/u/its_Shinde4241/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl bg-card border border-border flex flex-col gap-2 hover:border-primary/50 transition-colors cursor-pointer text-left"
            style={{
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.2),
                0 12px 24px -8px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            <div className="flex justify-between items-start w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-current text-muted-foreground transition-opacity"
              >
                <path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511a6.793 6.793 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z" />
              </svg>
              <div className="flex items-center gap-0 overflow-hidden transition-all duration-500 ease-out group-hover:gap-1.5">
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-muted-foreground opacity-0 transition-all duration-500 ease-out group-hover:max-w-[50px] group-hover:opacity-100">
                  Visit
                </span>
                <ExternalLink size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
            <span className="text-2xl font-bold font-title">500+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">DSA Problems Solved</span>
          </a>
        </div>
      </div>

      {/* Hidden on mobile, shown on md (tablet) and up */}
      <div
        className="hidden md:flex flex-1 w-full h-[480px] bg-secondary/30 rounded-2xl overflow-hidden border border-border relative group"
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 12px 24px -8px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <img
          src={profile.src}
          alt="The Scholar"
          className="z-50 select-none w-full h-full object-center object-cover transition-all duration-500"
        />
      </div>
    </div>
  );
};