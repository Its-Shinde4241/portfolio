"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
    Cloud,
    ICloud,
    renderSimpleIcon,
} from "react-icon-cloud";

// Import only the icons we need
import {
    siJavascript,
    siCplusplus,
    siPython,
    siHtml5,
    siNextdotjs,
    siExpress,
    siNodedotjs,
    siTailwindcss,
    siPrisma,
    siGit,
    siGithub,
    siVercel,
    siPostman,
    siDocker,
    siMongodb,
    siPostgresql,
    siLinux,
    siRedis,
    siSupabase,
    siHibernate,
    siSpring,
    siMysql,
    siReact,
    siFirebase,
    siJira,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Map slugs to imported icons
const iconMap: Record<string, SimpleIcon> = {
    javascript: siJavascript,
    cplusplus: siCplusplus,
    python: siPython,
    html5: siHtml5,
    nextdotjs: siNextdotjs,
    express: siExpress,
    nodedotjs: siNodedotjs,
    tailwindcss: siTailwindcss,
    prisma: siPrisma,
    git: siGit,
    github: siGithub,
    vercel: siVercel,
    postman: siPostman,
    docker: siDocker,
    mongodb: siMongodb,
    postgresql: siPostgresql,
    linux: siLinux,
    redis: siRedis,
    supabase: siSupabase,
    hibernate: siHibernate,
    spring: siSpring,
    mysql: siMysql,
    react: siReact,
    firebase: siFirebase,
    jira: siJira,
};

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
        },
    });
};

export type DynamicCloudProps = {
    iconSlugs: readonly string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderedIcons = useMemo(() => {
        if (!mounted) return [];

        return iconSlugs.map((slug) => {
            const icon = iconMap[slug];
            if (icon) {
                return renderCustomIcon(icon, theme || "light");
            }
            console.warn(`Icon not found for slug: ${slug}`);
            return null;
        }).filter(Boolean);
    }, [iconSlugs, theme, mounted]);

    if (!mounted) {
        return <div style={{ height: "400px" }} />; // Placeholder to prevent layout shift
    }

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}