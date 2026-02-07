import batmanWeapon from '@/assets/batman-logo.png';
import { useTheme } from 'next-themes';

export const BatmanWeapon = () => {
    const { theme } = useTheme();

    if (theme !== 'dark') return null;

    return (
        <>
            <div
                className="pointer-events-none scale-100 fixed top-2/5 left-0 z-25 hidden xl:block animate-in duration-1000 -rotate-22"
                style={{
                    opacity: 1,
                    transform: 'scale(2) translateY(-20px) translateX(70px) rotate(14deg)',
                    animationDelay: '2s',
                    animationFillMode: 'both'
                }}
            >
                <img
                    alt="Batman Logo"
                    className="h-[100px] w-[100px] object-contain opacity-80 mix-blend-screen"
                    src={batmanWeapon.src}
                />
            </div>
        </>
    );
}