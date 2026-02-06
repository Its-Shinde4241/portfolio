"use client"

import React, { useEffect, useState } from 'react'
import { Cloud, ICloud, renderSimpleIcon, SimpleIcon } from 'react-icon-cloud'
import { useTheme } from 'next-themes'
import * as simpleIcons from 'simple-icons'
import { Const } from '../../lib/const'
const slugs = [
    "java",
    "spring",
    "react",
    "nextdotjs",
    "javascript",
    "typescript",
    "python",
    "mysql",
    "postgresql",
    "mongodb",
    "supabase",
    "redis",
    "docker",
    "git",
    "github",
    "cplusplus",
    "nodedotjs",
    "html5",
    "css3",
    "tailwindcss",
    "amazonaws",
    "linux",
    "postman",
    "figma",
    "vercel",
    "npm",
    "gradle",
    "maven",
    "hibernate",
    "json",
];

type SimpleIconsModule = typeof simpleIcons

const iconsFromSlugs = slugs
    .map((slug) => {
        const iconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof SimpleIconsModule
        return simpleIcons[iconKey]
    })
    .filter((icon) => Boolean(icon)) as SimpleIcon[]
const getPortfolioIcons = ({
    theme,
    icons,
}: {
    theme: string
    icons: SimpleIcon[]
}) => {
    const bgHex = theme === 'light' ? '#f3f2ef' : '#080510'
    const fallbackHex = theme === 'light' ? '#6e6e73' : '#a1a1a6'
    const minContrastRatio = theme === 'dark' ? 2 : 1.2

    return icons.map((icon) => {
        return renderSimpleIcon({
            icon,
            bgHex,
            fallbackHex,
            minContrastRatio,
            aProps: {
                href: '#',
                onClick: (e) => {
                    e.preventDefault()
                },
            },
        })
    })
}

export const IconCloud = React.memo(() => {
    // const { icons } = usePortfolio()
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [cloudKey, setCloudKey] = useState(0)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) {
            return
        }

        const timer = setTimeout(() => {
            setCloudKey((prev) => prev + 1)
        }, 0)

        return () => clearTimeout(timer)
    }, [mounted, resolvedTheme])

    if (!mounted) {
        return null
    }

    const safeTheme = (resolvedTheme ?? theme ?? 'light') as string

    return <Cloud
        id="icon-cloud"
        key={cloudKey}
        containerProps={{
            className: 'icon-cloud-container',
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 400,
            },
        }}
        canvasProps={{
            className: 'icon-cloud-canvas',
            style: {
                width: '100%',
                height: '100%',
                maxWidth: 600,
            },
        }}
        options={{
            reverse: true,
            depth: 1,
            wheelZoom: false,
            imageScale: 1.7,
            activeCursor: 'pointer',
            tooltip: 'native',
            initial: [0.1, -0.1],
            clickToFront: 500,
            tooltipDelay: 0,
            outlineColour: '#0000',
        }}
    >
        {getPortfolioIcons({
            theme: safeTheme,
            icons: iconsFromSlugs,
        })}</Cloud>
})

IconCloud.displayName = 'IconCloud'