"use client";

import React, { useState, useEffect } from 'react';
import { Dock } from '../components/Dock';
import { GrungeOverlay } from '../components/GrungeOverlay';
import { Home as HomeIcon, User, FileText, FolderOpen, Trophy } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from 'next-themes';
import { HomeSection } from '../components/sections/HomeSection';
import { AboutSection } from '../components/sections/AboutSection';
import { JourneySection } from '../components/sections/JourneySection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { Footer } from './sections/Footer';
import { useThemeTransitionAnimation } from '@/components/themeAnimator';
import { DotPattern } from './ui/dot-pattern';

export default function Home() {
    // const [showIntro, setShowIntro] = useState(true);
    const [activeTab, setActiveTab] = useState('home');
    const { theme, setTheme } = useTheme();
    const { startAnimationAndTransition } = useThemeTransitionAnimation();


    const navItems: NavItem[] = [
        { id: 'home', label: 'Home', icon: <HomeIcon size={22} /> },
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
            icon: theme == "dark" ? (
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
            // setTheme();
            const clickX = e?.clientX;
            const clickY = e?.clientY;
            startAnimationAndTransition(
                () => setTheme(theme === 'dark' ? 'light' : 'dark'),
                theme as 'light' | 'dark', // Current theme
                "gif",
                // "bottom-right",
                clickX,
                clickY,
                theme === 'dark' ?
                    "https://media.giphy.com/media/aMyRwAzoxNab851XFj/giphy.gif"
                    // "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDc4cXJ1Y2x0OW94aHFjNmhtYWd2YXRhNXRqYzZiODdkaDFqMWJ2YyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fG92Ls8iI5CJG/giphy.gif"
                    // "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bWpjYm96ZnI4cGI1Z29yYzEzN2t3NmY3N3p1d3l5dHJwMGthaGZoMyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/5KCXDVmBcTL8gpOO5C/giphy.gif"
                    :
                    "https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                // "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDljaXF0Z2wweDBzYzZqMzMzZmZqZDM0ejRvdmlrOXBhMHVkOHJ1cCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/QXPtPqPaitlJH3DTJg/giphy.gif"
                // "https://media.giphy.com/media/aMyRwAzoxNab851XFj/giphy.gif"
                // "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2p1ZG54Y3JkcWRzemxieG4wdjkzNTFleHRkNmZjc3lidzRhMmtiMiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/QhSCMLhsQg8oR87QJW/giphy.gif"

            );
        } else if (id === 'resume') {
            window.open('https://drive.google.com/file/d/1_UC8_HMbvUXVwpAlfbs9eBdKl_cs9fyn/view?usp=drive_link', '_blank');
        } else if (id === 'resume') {
            window.open('https://drive.google.com/file/d/1_UC8_HMbvUXVwpAlfbs9eBdKl_cs9fyn/view?usp=drive_link', '_blank');
        } else {
            if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
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
            <div className={`min-h-screen w-full relative transition-all duration-1000 `}>

                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    {theme == "dark" && <GrungeOverlay opacity={0.08} />}
                </div>

                {/* <TopRightConnect /> */}

                <main className="flex justify-center px-5 relative z-20 bg-linear-to-r from-accent/10 via-background/80 to-foreground/10 dark:from-accent/20 dark:via-background/90 dark:to-foreground/20 transition-colors duration-1000">
                    <DotPattern glowIntensity={0} gap={18} dotSize={2.2} />

                    <div className='flex flex-col my-5 w-full max-w-2xl min-h-screen gap-6 '>
                        <div id="home" className=" flex flex-col gap-8 mt-8 md:mt-12 lg:mt-18">
                            <HomeSection />
                        </div>

                        <section id="about" className=" flex items-center justify-center">
                            <AboutSection />
                        </section>

                        <section id="journey" className=" flex items-center justify-center">
                            <JourneySection />
                        </section>

                        <section id="skills" className=" flex items-center justify-center">
                            <SkillsSection />
                        </section>

                        <section id="projects" className=" flex items-center justify-center p-4">
                            <ProjectsSection />
                        </section>

                        <section id="resume" className=" flex items-center justify-center mb-20">
                            <Footer />
                        </section>

                    </div>

                </main>

                <Dock items={navItems} activeId={activeTab} onSelect={handleNavSelect} />
            </div>
        </>
    );
}
