import React from 'react';
import { educations, workExperiences } from '../../data/educations';
import { BlurFade } from '../ui/blur-fade';
import { Highlighter } from '../ui/highlighter';
import { ResumeCard } from '../ui/resume-card';
import profile from '@/assets/profile.jpg';
const BLUR_FADE_DELAY = 0.04;

export const JourneySection: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-10">
            {/* Work Experience Section */}
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5} className='mb-4'>
                        <h2 className="text-3xl font-bold">
                            <Highlighter
                                action="underline"
                                color="#640D5F"
                                animationDuration={1000}
                                iterations={5}
                                padding={3}
                                isView={true}
                            >
                                Work Experience
                            </Highlighter>
                        </h2>
                    </BlurFade>
                    {workExperiences.map((work, id) => (
                        <BlurFade
                            key={work.company_name}
                            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                        >
                            <ResumeCard
                                logoUrl={work.company_logo as string}
                                altText={work.company_name}
                                title={work.company_name}
                                subtitle={work.role}
                                period={`${work.start} - ${work.end ?? "Present"}`}
                                description={work.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 7} className='mb-4'>
                        <h2 className="text-3xl font-bold">
                            <Highlighter
                                action="bracket"
                                color="#008080"
                                animationDuration={1000}
                                iterations={5}
                                padding={3}
                                isView={true}
                            >
                                Education
                            </Highlighter>
                        </h2>
                    </BlurFade>
                    {educations.map((education, id) => (
                        <BlurFade
                            key={education.institute}
                            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                            <ResumeCard
                                logoUrl={education.logoLink as string}
                                altText={education.institute}
                                title={education.institute}
                                subtitle={education.title}
                                period={`${education.start ? education.start + " - " : ""}${education.end}`}
                                description={education.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </div>
    );
};