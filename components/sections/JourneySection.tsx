import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educations, workExperiences } from '../../data/educations';

export const JourneySection: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-20">
            <h2 className="font-title text-4xl text-foreground mb-12 text-center">My Journey</h2>

            {/* Work Experience */}


            {/* Education */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>

                <div className="relative border-l-2 border-border ml-4 space-y-12 pb-4">
                    {educations.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-foreground">{edu.title}</h4>
                                        <div className="text-primary/95 font-medium">{edu.institute}</div>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground gap-1">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{edu.start ? `${edu.start} - ` : ''}{edu.end}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{edu.place}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {edu.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {edu.technologies.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
                </div>

                <div className="relative border-l-2 border-border ml-4 space-y-12 pb-4">
                    {workExperiences.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-foreground">{job.role}</h4>
                                        <div className="text-primary/90 font-medium">{job.company_name}</div>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground gap-1">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{job.start} - {job.end}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{job.place}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {job.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};