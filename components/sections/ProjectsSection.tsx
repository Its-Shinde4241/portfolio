import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <h2 className="font-title text-4xl text-foreground mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        // transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -1, scale: 1.05 }}
                        className="group relative h-[340px] bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl overflow-hidden cursor-cell transition-all duration-100 ease-linear"
                        style={{
                            boxShadow: `
                                0 25px 50px -12px rgba(0, 0, 0, 0.4),
                                0 12px 24px -8px rgba(0, 0, 0, 0.2),
                                0 8px 32px rgba(0, 0, 0, 0.12),
                                inset 0 1px 1px rgba(255, 255, 255, 0.3),
                                inset 0 -1px 1px rgba(0, 0, 0, 0.05),
                                0 0 0 0.5px rgba(255, 255, 255, 0.2)
                            `
                        }}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-zinc-900">
                            <img
                                src={project.backimage}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 grayscale group-hover:grayscale-0"
                                alt={project.name}
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    (e.target as HTMLImageElement).src = `https://picsum.photos/600/400?random=${i}`;
                                }}
                            />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent z-10 opacity-90" />

                        {/* Top Right Actions */}
                        <div className="absolute top-4 right-4 z-30 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">

                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-0 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary hover:bg-background/80 border border-border transition-all duration-600 ease-out overflow-hidden hover:gap-1.5 hover:pr-3"
                                    title="Live Demo"
                                >
                                    <ExternalLink size={18} className="shrink-0" />
                                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-600 ease-out group-hover/btn:max-w-[60px] group-hover/btn:opacity-100">
                                        Live
                                    </span>
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-0 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary hover:bg-background/80 border border-border transition-all duration-600 ease-out overflow-hidden hover:gap-1.5 hover:pr-3"
                                    title="Source Code"
                                >
                                    <Github size={18} className="shrink-0" />
                                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-600 ease-out group-hover/btn:max-w-[60px] group-hover/btn:opacity-100">
                                        Source
                                    </span>
                                </a>
                            )}
                        </div>

                        {/* Bottom Content */}

                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-600">
                            <h3 className="font-title text-3xl font-semibold text-foreground mb-2  transition-colors">{project.name}</h3>

                            <div
                                className="text-sm text-muted-foreground line-clamp-2 mb-4 group-hover:text-foreground/90 group-hover:line-clamp-none transition-all duration-600"
                                dangerouslySetInnerHTML={{ __html: project.description }}
                            />

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.slice(0, 5).map((tech) => (
                                    <span key={tech} className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 5 && (
                                    <span className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground border border-border rounded-md font-medium">
                                        +{project.technologies.length - 5}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};