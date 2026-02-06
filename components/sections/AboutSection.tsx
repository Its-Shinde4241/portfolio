import React from 'react';
import { BlurFade } from '../ui/blur-fade';
import { Highlighter } from '../ui/highlighter';

const BLUR_FADE_DELAY = 0.04;

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center z-50">

      <div className="flex flex-col">
        <BlurFade delay={BLUR_FADE_DELAY * 5} className='mb-4'>
          <h2 className="text-3xl font-bold">
            <Highlighter
              action="underline"
              color="#87CEEB"
              animationDuration={1000}
              iterations={5}
              padding={3}
              isView={true}
            >
              About
            </Highlighter>
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a Computer Engineering undergrad at the prestigious <span className="text-foreground/85 font-semibold">Pune Institute of Computer Technology (PICT)</span>,maintaining a stellar <span className="text-primary font-bold">CGPA of 9.80</span>
            . Beyond academics, I'm a passionate problem solver with <span className="text-foreground/85 font-semibold">800+ DSA problems </span>solved on different platforms. I engineer <span className="text-foreground/85 font-semibold"> scalable systems </span>as a Software Engineer & Full Stack Developer.
          </p>
        </BlurFade>
      </div>
    </div>
  );
};