import React from 'react'
import { Cloud, ICloud, renderSimpleIcon, SimpleIcon } from 'react-icon-cloud'
import { useTheme } from 'next-themes'
import * as simpleIcons from 'simple-icons'
import { Const } from '../../lib/const'
// import { usePortfolio } from '../hooks/use_portfolio_context'
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

const cloudProps: Omit<ICloud, 'children'> = {
    id: 'stable-id-for-csr-ssr',
    containerProps: {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: Const.pad * 2,
            marginRight: Const.pad * 2,
        },
    },
    canvasProps: {
        style: {
            maxWidth: '60%',
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: 'default',
        tooltip: 'native',
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: '#0000',
    },
}

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
    const { theme } = useTheme()

    return <Cloud {...cloudProps}>{getPortfolioIcons({
        theme: theme as string,
        icons: iconsFromSlugs,
    })}</Cloud>
})

IconCloud.displayName = 'IconCloud'