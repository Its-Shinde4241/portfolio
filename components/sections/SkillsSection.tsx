"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { allSkills, coreSubjects } from '../../data/skills';
import Magnet from '../ui/Magnet';
import { Highlighter } from '../ui/highlighter';
import { BlurFade } from '../ui/blur-fade';

const IconCloud = dynamic(() => import('../ui/Iconcloud').then((mod) => mod.IconCloud), {
  ssr: false,
});

export const SkillsSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto  select-none flex flex-col">
      <BlurFade >
        <h2 className="text-3xl font-bold mb-4">
          <Highlighter
            action="circle"
            color="#008080"
            animationDuration={1000}
            iterations={5}
            padding={3}
            isView={true}
          >
            Core
          </Highlighter>
        </h2>
        <div className='flex flex-col justify-center items-center'>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
            {coreSubjects.map((subject) => (
              <Magnet
                key={subject.name}
                padding={24}          // ↓ reduced for mobile
                magnetStrength={10}
              >
                <span
                  className="
                flex items-center gap-2
                rounded-lg
                border border-border
                bg-muted
                px-3 py-2
                text-xs font-medium
                cursor-pointer
                transition-all
                md:hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
                md:hover:border-[color-mix(in oklch, var(--border), white 20%)]
                "
                >
                  {subject.icon}
                  {subject.name}
                </span>
              </Magnet>
            ))}
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={0.2}>
        <h2 className="text-3xl font-bold mb-4 mt-8">
          <Highlighter
            action="highlight"
            color="#008080"
            animationDuration={1000}
            iterations={5}
            padding={3}
            isView={true}
          >
            Skills
          </Highlighter>
        </h2>
        <div className='flex flex-col justify-center items-center'>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
            {allSkills.map((skill) => (
              <Magnet
                key={skill.name}
                padding={24}          // ↓ reduced for mobile
                magnetStrength={10}
              >
                <span
                  className="
                flex items-center gap-2
                rounded-lg
                border border-border
                bg-muted
                px-3 py-2
                text-xs font-medium
                cursor-pointer
                transition-all
                md:hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
                md:hover:border-[color-mix(in oklch, var(--border), white 20%)]
                "
                >
                  {skill.icon}
                  {skill.name}
                </span>
              </Magnet>
            ))}
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={0.3}>
        <div className='w-full flex justify-center items-center '>
          <IconCloud />
        </div>
      </BlurFade>
    </div>

  );
};