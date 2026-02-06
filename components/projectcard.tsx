"use client";

import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export type Project = {
    image: string | StaticImageData;
    title: string;
    demo: string;
    link: string;
    description: string;
    tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="
        group
        flex flex-col md:flex-row gap-4
        p-3 rounded-xl
        border border-border
        bg-muted
        transition-all duration-300
        md:hover:scale-[1.01]
        hover:bg-[color-mix(in oklch, var(--muted), black 8%)]
        hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]
      "
        >
            {/* Image */}
            <div
                className="
          relative w-full md:w-1/2 aspect-16/10
          overflow-hidden rounded-lg
          border border-border
          transition-all duration-300
          group-hover:border-[color-mix(in oklch, var(--border), white 20%)]
        "
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
            object-cover rounded-lg
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
                />
            </div>

            {/* Content */}
            <div className="flex flex-col md:w-1/2">
                {/* Title + Actions */}
                <div className="flex  flex-row items-center justify-between gap-2 mb-1">
                    <h2 className="text-sm text-foreground">
                        {project.title}
                    </h2>

                    <div className="flex items-center gap-2 sm:justify-end">
                        {project.demo && project.demo !== '#' && (
                            <a
                                title="link"
                                href={project.demo}
                                target="_blank"
                                className="
                p-2 text-xs rounded-md
                bg-muted
                border border-border
                hover:bg-[color-mix(in oklch, var(--muted), black 8%)]
                transition
              "
                            >
                                <FaExternalLinkAlt />
                            </a>
                        )}

                        <a
                            title="lnk"
                            href={project.link}
                            target="_blank"
                            className="
                p-2 rounded-md
                bg-muted
                border border-border
                hover:bg-[color-mix(in oklch, var(--muted), black 8%)]
                transition
              "
                        >
                            <FaGithub size={14} />
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs font-[latin] mb-2 text-(--graytext) tracking-wide">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="
                px-2 py-0.5 text-[11px]
                rounded-md
                bg-muted
                border border-border
              "
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}