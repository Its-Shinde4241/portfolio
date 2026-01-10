'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

type ContributionItem = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

// Size presets for easy use
const sizePresets = {
    xs: { blockSize: 8, blockMargin: 2 },
    sm: { blockSize: 10, blockMargin: 3 },
    md: { blockSize: 12, blockMargin: 4 },
    lg: { blockSize: 14, blockMargin: 4 },
    xl: { blockSize: 16, blockMargin: 5 },
    '2xl': { blockSize: 18, blockMargin: 5 },
};

const leetcodeConfig = {
    username: 'its_Shinde4241',
    apiUrl: 'https://alfa-leetcode-api.onrender.com',
    title: 'LeetCode Activity',
    subtitle: 'problem-solving journey over the past year',
    blockSize: 11,
    blockMargin: 3,
    fontSize: 12,
    maxLevel: 4,
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['', 'M', '', 'W', '', 'F', ''],
    totalCountLabel: '{{count}} submissions in the last year',
    theme: {
        dark: [
            'rgb(22, 27, 34)',
            'rgb(66, 66, 28)',
            'rgb(128, 128, 0)',
            'rgb(204, 153, 0)',
            'rgb(255, 161, 22)',
        ],
        light: [
            'rgb(235, 237, 240)',
            'rgb(255, 235, 180)',
            'rgb(255, 214, 102)',
            'rgb(255, 185, 56)',
            'rgb(255, 161, 22)',
        ],
    },
    errorState: {
        title: 'Unable to load LeetCode contributions',
        description: 'Check out my profile directly for the latest activity',
        buttonText: 'View on LeetCode',
    },
    loadingState: {
        description: 'Fetching your LeetCode activity data',
    },
};

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 10) return 3;
    return 4;
}

function processSubmissionCalendar(calendar: Record<string, number>): ContributionItem[] {
    const contributions: ContributionItem[] = [];
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    // Generate all dates for the past year
    const today = new Date();
    const currentDate = new Date(oneYearAgo);

    while (currentDate <= today) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const timestamp = Math.floor(currentDate.getTime() / 1000).toString();
        const count = calendar[timestamp] || 0;

        contributions.push({
            date: dateStr,
            count,
            level: getLevel(count),
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return contributions;
}

interface LeetCodeContributionGraphProps {
    username?: string;
    delay?: number;
    minimal?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | { blockSize: number; blockMargin: number };
}

export const LeetCodeContributionGraph = ({
    username = leetcodeConfig.username,
    delay = 0,
    minimal = false,
    size = 'md',
}: LeetCodeContributionGraphProps) => {
    const [contributions, setContributions] = useState<ContributionItem[]>([]);
    const [totalContributions, setTotalContributions] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const { theme } = useTheme();

    // Get size values from preset or custom object
    const sizeConfig = typeof size === 'string' ? sizePresets[size] : size;

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${leetcodeConfig.apiUrl}/${username}`,
                );
                const data = await response.json();

                if (data?.submissionCalendar) {
                    const calendar = typeof data.submissionCalendar === 'string'
                        ? JSON.parse(data.submissionCalendar)
                        : data.submissionCalendar;

                    const processedContributions = processSubmissionCalendar(calendar);

                    if (processedContributions.length > 0) {
                        const total = processedContributions.reduce(
                            (sum, item) => sum + item.count,
                            0,
                        );
                        setTotalContributions(data.totalSolved || total);
                        setContributions(processedContributions);
                    } else {
                        setHasError(true);
                    }
                } else {
                    setHasError(true);
                }
            } catch (err) {
                console.error('Failed to fetch LeetCode contributions:', err);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [username]);

    // Minimal version for background use
    if (minimal) {
        return (
            <div className="w-full flex items-center justify-center">
                {!isLoading && !hasError && contributions.length > 0 && (
                    <div className="flex items-center gap-3">
                        {/* Vertical LeetCode label */}
                        <div className="flex items-center justify-center">
                            <span
                                className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground/90 whitespace-nowrap -mt-8"
                                style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'mixed',
                                    transform: 'rotate(180deg)'
                                }}
                            >
                                L E E T C O D E
                            </span>
                        </div>
                        <ActivityCalendar
                            data={contributions}
                            blockSize={sizeConfig.blockSize}
                            blockMargin={sizeConfig.blockMargin}
                            fontSize={0}
                            showWeekdayLabels={false}
                            colorScheme={theme === 'dark' ? 'dark' : 'light'}
                            theme={leetcodeConfig.theme}
                            labels={{
                                months: leetcodeConfig.months,
                                weekdays: [],
                                totalCount: ' ',
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="space-y-6 w-full">

                {isLoading ? (
                    <div className="flex items-center justify-center py-16">
                        <div className="text-center">
                            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-sm text-muted-foreground">
                                {leetcodeConfig.loadingState.description}
                            </p>
                        </div>
                    </div>
                ) : hasError || contributions.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <p className="font-medium mb-2">{leetcodeConfig.errorState.title}</p>
                        <p className="text-sm mb-4">
                            {leetcodeConfig.errorState.description}
                        </p>
                        <Link
                            href={`https://leetcode.com/u/${username}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                        >
                            <Code2 className="w-4 h-4" />
                            {leetcodeConfig.errorState.buttonText}
                        </Link>
                    </div>
                ) : (
                    <div className="relative">
                        <div className="relative bg-background/50 backdrop-blur-sm rounded-lg border border-dashed dark:border-white/10 border-black/20 p-6">
                            <div className="w-full overflow-x-auto">
                                <ActivityCalendar
                                    data={contributions}
                                    blockSize={sizeConfig.blockSize}
                                    blockMargin={sizeConfig.blockMargin}
                                    fontSize={leetcodeConfig.fontSize}
                                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                    theme={leetcodeConfig.theme}
                                    labels={{
                                        legend: {
                                            less: 'Less',
                                            more: 'More'
                                        },
                                        months: leetcodeConfig.months,
                                        totalCount: leetcodeConfig.totalCountLabel,
                                        weekdays: leetcodeConfig.weekdays,
                                    }}
                                    style={{
                                        color: 'rgb(139, 148, 158)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};