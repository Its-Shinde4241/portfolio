"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Intro } from "../components/Intro";
import { Dock } from '../components/Dock';
import { GrungeOverlay } from '../components/GrungeOverlay';
import { TopRightConnect } from '../components/TopRightConnect';
import { Home as HomeIcon, User, FileText, FolderOpen, Trophy } from 'lucide-react';
import { NavItem } from '../types';

// Import Section Components
import { HomeSection } from '../components/sections/HomeSection';
import { AboutSection } from '../components/sections/AboutSection';
import { JourneySection } from '../components/sections/JourneySection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ResumeSection } from '../components/sections/ResumeSection';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    setIsDark(true);
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    const root = document.documentElement;
    const isDarkNow = root.classList.contains('dark');

    // Fallback if View Transitions API is not supported
    if (!(document as any).startViewTransition) {
      if (isDarkNow) {
        root.classList.remove('dark');
        setIsDark(false);
      } else {
        root.classList.add('dark');
        setIsDark(true);
      }
      return;
    }

    // Get click coordinates or default to center
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Inject dynamic CSS for the animation
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      ::view-transition-old(root) {
        animation: none;
      }
      ::view-transition-new(root) {
        animation: circle-expand 0.5s ease-in-out;
        mix-blend-mode: normal;
      }
      @keyframes circle-expand {
        from {
          clip-path: circle(0px at ${x}px ${y}px);
        }
        to {
          clip-path: circle(${endRadius}px at ${x}px ${y}px);
        }
      }
    `;
    document.head.appendChild(style);

    // Start the transition
    const transition = (document as any).startViewTransition(() => {
      if (isDarkNow) {
        root.classList.remove('dark');
        setIsDark(false);
      } else {
        root.classList.add('dark');
        setIsDark(true);
      }
    });

    // Clean up CSS after transition
    transition.finished.then(() => {
      document.getElementById(styleId)?.remove();
    });
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={22} /> },
    { id: 'about', label: 'About', icon: <User size={22} /> },
    {
      id: 'journey',
      label: 'Journey',
      icon:
        <div className="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M9.14 5.08c0 2.39-3.82 6-3.82 6s-3.82-3.61-3.82-6A3.7 3.7 0 0 1 5.32 1.5a3.7 3.7 0 0 1 3.82 3.58Z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.91px"
            />
            <circle cx="5.32" cy="5.32" r=".95" fill="currentColor" />
            <path
              d="M22.5 14.62c0 2.39-3.82 6-3.82 6s-3.82-3.58-3.82-6a3.7 3.7 0 0 1 3.82-3.57 3.7 3.7 0 0 1 3.82 3.57Z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.91px"
            />
            <circle cx="18.68" cy="14.86" r=".95" fill="currentColor" />
            <path
              d="M4.36 13h4.3a2.39 2.39 0 0 1 2.39 2.39 2.39 2.39 0 0 1-2.39 2.39H3.89a2.39 2.39 0 0 0-2.39 2.33 2.39 2.39 0 0 0 2.39 2.39h15.75"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.91px"
            />
          </svg>
        </div>
    },
    { id: 'skills', label: 'Skills', icon: <Trophy size={22} /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen size={22} /> },
    { id: 'resume', label: 'Resume', icon: <FileText size={22} /> },
    {
      id: 'theme',
      label: 'Theme',
      icon: isDark ? (
        <div className="w-6 h-6">
          <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
          </svg>
        </div>
      ) : (
        <div className="w-6 h-6">
          <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>
        </div>
      )
    }
  ];

  const handleNavSelect = (id: string, e?: React.MouseEvent) => {
    if (id === 'theme') {
      toggleTheme(e);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(item => {
      if (item.id !== 'theme') {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen w-full relative transition-all duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>

        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full dark:opacity-100 opacity-0 transition-opacity duration-700" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full dark:opacity-100 opacity-0 transition-opacity duration-700" />

          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gray-200 blur-[100px] rounded-full dark:opacity-0 opacity-100 transition-opacity duration-700" />

          {isDark && <GrungeOverlay opacity={0.08} />}
        </div>

        <TopRightConnect />

        <main className="relative z-10 w-full flex flex-col pb-24">

          <section id="home" className="min-h-screen flex items-center justify-center p-4">
            <HomeSection />
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center p-4 bg-background/30 backdrop-blur-[2px]">
            <AboutSection />
          </section>

          <section id="journey" className="min-h-screen flex items-center justify-center p-4">
            <JourneySection />
          </section>

          <section id="skills" className="min-h-screen flex items-center justify-center p-4 bg-background/30 backdrop-blur-[2px]">
            <SkillsSection />
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center p-4">
            <ProjectsSection />
          </section>

          <section id="resume" className="min-h-[50vh] flex items-center justify-center p-4 mb-20">
            <ResumeSection />
          </section>

        </main>

        <Dock items={navItems} activeId={activeTab} onSelect={handleNavSelect} />
      </div>
    </>
  );
}
