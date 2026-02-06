import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../../data/projects';
import { BlurFade } from '../ui/blur-fade';
import { Highlighter } from '../ui/highlighter';
import ProjectCard from '../projectcard';

const BLUR_FADE_DELAY = 0.04;
const INITIAL_PROJECTS_COUNT = 3;

export const ProjectsSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Header */}
            <BlurFade delay={BLUR_FADE_DELAY * 5} className="mb-6">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-3xl font-bold">
                        <Highlighter
                            action="circle"
                            color="#52D399"
                            animationDuration={1000}
                            iterations={5}
                            padding={3}
                            isView={true}
                        >
                            Projects
                        </Highlighter>
                    </h2>

                    {projects.length > INITIAL_PROJECTS_COUNT && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground cursor-pointer"
                        >
                            <span className="underline underline-offset-4 decoration-transparent transition-colors duration-200 group-hover:decoration-current">
                                {showAll ? 'Show less' : 'View all projects'}
                            </span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </button>
                    )}
                </div>
            </BlurFade>

            {/* Project Cards */}
            <motion.div layout className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, i) => (
                        <BlurFade
                            key={project.name}
                            delay={BLUR_FADE_DELAY * 6 + i * 0.05}
                        >
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <ProjectCard
                                    project={{
                                        image: project.backimage,
                                        title: project.name,
                                        demo: project.url || '#',
                                        link: project.github || '#',
                                        description: project.description.replace(/<[^>]*>/g, ''),
                                        tech: project.technologies,
                                    }}
                                />
                            </motion.div>
                        </BlurFade>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Expand/Collapse Button */}
            {projects.length > INITIAL_PROJECTS_COUNT && (
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-muted-foreground bg-muted/50 hover:bg-muted border border-border rounded-full transition-all duration-300 hover:text-foreground cursor-pointer"
                        >
                            <span>{showAll ? 'Show less' : `View all ${projects.length} projects`}</span>
                            {showAll ? (
                                <ChevronUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                            ) : (
                                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                            )}
                        </button>
                    </div>
                </BlurFade>
            )}
        </div>
    );
};