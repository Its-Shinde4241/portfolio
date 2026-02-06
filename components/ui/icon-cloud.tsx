"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import {
    Cloud,
    ICloud,
    renderSimpleIcon,
} from "react-icon-cloud";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

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

    const renderedIcons = useMemo(() => {
        return iconSlugs.map((slug) => {
            // Convert slug to simple-icons format (e.g., "react" -> "siReact")
            const iconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
            const icon = simpleIcons[iconKey] as SimpleIcon | undefined;
            if (icon) {
                return renderCustomIcon(icon, theme || "light");
            }
            return null;
        }).filter(Boolean);
    }, [iconSlugs, theme]);

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}