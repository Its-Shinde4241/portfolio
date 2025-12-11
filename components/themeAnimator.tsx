// useThemeTransitionAnimation.ts
import { useCallback } from 'react';

// Define the animation types (Exported for use in ThemeSwitcher)
export type AnimationVariant =
    | 'circle'
    | 'circle-blur'
    | 'gif'
    | 'polygon';

export const useThemeTransitionAnimation = () => {

    const startAnimationAndTransition = useCallback((
        updateThemeFn: () => void, // Function to update the theme (e.g., setTheme(newTheme))
        currentTheme: 'light' | 'dark',
        variant: AnimationVariant = 'circle',
        clickX?: number, // X position of the click event (for dynamic origin)
        clickY?: number, // Y position of the click event (for dynamic origin)
        url?: string, // For gif variant
    ) => {
        // 1. Inject animation styles for this specific transition
        const styleId = `theme-transition-${Date.now()}`;
        const style = document.createElement('style');
        style.id = styleId;

        // Generate animation CSS based on variant
        let css = '';

        // --- Dynamic Origin Calculation (for circle/circle-blur) ---
        let cx = '50'; // Default to center if coordinates are missing
        let cy = '50';
        let transformOrigin = 'center';

        if (clickX !== undefined && clickY !== undefined) {
            // Convert pixel coordinates to percentage of the viewport
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const cx_perc = (clickX / viewportWidth) * 100;
            const cy_perc = (clickY / viewportHeight) * 100;

            // Update clip-path center and transform-origin
            cx = cx_perc.toFixed(2);
            cy = cy_perc.toFixed(2);
            transformOrigin = `${cx_perc.toFixed(2)}% ${cy_perc.toFixed(2)}%`;
        }
        // -------------------------------------------------------------

        if (variant === 'circle') {
            css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${transformOrigin}; 
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%); 
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
            }
          }
        }
      `;
        } else if (variant === 'circle-blur') {
            css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${transformOrigin}; 
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%); 
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
        } else if (variant === 'gif' && url) {
            css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: fade-out 0.4s ease-out;
          }
          ::view-transition-new(root) {
            animation: gif-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1);
            mask-image: url('${url}');
            mask-size: 0%;
            mask-repeat: no-repeat;
            mask-position: center;
          }
          @keyframes fade-out {
            to {
              opacity: 0;
            }
          }
          @keyframes gif-reveal {
            0% {
              mask-size: 0%;
            }
            20% {
              mask-size: 35%;
            }
            60% {
              mask-size: 35%;
            }
            100% {
              mask-size: 300%;
            }
          }
        }
      `;
        } else if (variant === 'polygon') {
            css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: ${currentTheme === 'light' ? 'wipe-in-dark' : 'wipe-in-light'} 0.4s ease-out;
          }
          @keyframes wipe-in-dark {
            from {
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
          @keyframes wipe-in-light {
            from {
              clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        }
      `;
        }

        if (css) {
            style.textContent = css;
            document.head.appendChild(style);

            // Clean up animation styles after transition
            setTimeout(() => {
                const styleEl = document.getElementById(styleId);
                if (styleEl) {
                    styleEl.remove();
                }
            }, 3000);
        }

        // 2. Wrap the theme update in the View Transition API call
        if ('startViewTransition' in document) {
            (document as any).startViewTransition(updateThemeFn);
        } else {
            updateThemeFn();
        }
    }, []);

    return { startAnimationAndTransition };
};