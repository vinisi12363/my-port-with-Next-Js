"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Palette } from "lucide-react";

// Gradient themes for dark mode
const darkGradients = [
    {
        name: "Cyber Purple",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(139, 92, 246, 0.15), transparent)",
    },
    {
        name: "Ocean Depths",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(6, 182, 212, 0.25), transparent), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(59, 130, 246, 0.15), transparent)",
    },
    {
        name: "Neon Fever",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(236, 72, 153, 0.3), transparent), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(139, 92, 246, 0.2), transparent), radial-gradient(ellipse 40% 40% at 10% 50%, rgba(6, 182, 212, 0.15), transparent)",
    },
    {
        name: "Aurora Borealis",
        background: "radial-gradient(ellipse 60% 60% at 20% -10%, rgba(34, 197, 94, 0.2), transparent), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(139, 92, 246, 0.25), transparent), radial-gradient(ellipse 40% 40% at 40% 60%, rgba(6, 182, 212, 0.15), transparent)",
    },
    {
        name: "Sunset Blaze",
        background: "radial-gradient(ellipse 80% 80% at 50% -30%, rgba(251, 146, 60, 0.25), transparent), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(236, 72, 153, 0.2), transparent), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(139, 92, 246, 0.15), transparent)",
    },
    {
        name: "Midnight Galaxy",
        background: "radial-gradient(ellipse 100% 100% at 0% 0%, rgba(88, 28, 135, 0.3), transparent), radial-gradient(ellipse 80% 80% at 100% 100%, rgba(30, 58, 138, 0.25), transparent), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(6, 182, 212, 0.1), transparent)",
    },
];

// Gradient themes for light mode
const lightGradients = [
    {
        name: "Soft Lavender",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(139, 92, 246, 0.15), transparent), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(236, 72, 153, 0.08), transparent)",
    },
    {
        name: "Sky Blue",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(59, 130, 246, 0.15), transparent), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(6, 182, 212, 0.1), transparent)",
    },
    {
        name: "Peach Dreams",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(251, 146, 60, 0.12), transparent), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(236, 72, 153, 0.1), transparent)",
    },
    {
        name: "Mint Fresh",
        background: "radial-gradient(ellipse 80% 80% at 30% -10%, rgba(34, 197, 94, 0.12), transparent), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(6, 182, 212, 0.1), transparent)",
    },
    {
        name: "Rose Quartz",
        background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(244, 114, 182, 0.15), transparent), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(139, 92, 246, 0.08), transparent)",
    },
    {
        name: "Crystal Clear",
        background: "radial-gradient(ellipse 100% 100% at 50% -30%, rgba(139, 92, 246, 0.1), transparent), radial-gradient(ellipse 60% 60% at 100% 100%, rgba(59, 130, 246, 0.08), transparent)",
    },
];

interface GradientContextType {
    currentDarkGradient: number;
    currentLightGradient: number;
    setDarkGradient: (index: number) => void;
    setLightGradient: (index: number) => void;
    cycleDarkGradient: () => void;
    cycleLightGradient: () => void;
}

const GradientContext = createContext<GradientContextType | null>(null);

export function useGradient() {
    const context = useContext(GradientContext);
    if (!context) {
        throw new Error("useGradient must be used within a GradientProvider");
    }
    return context;
}

export function GradientProvider({ children }: { children: React.ReactNode }) {
    const [currentDarkGradient, setCurrentDarkGradient] = useState(0);
    const [currentLightGradient, setCurrentLightGradient] = useState(0);

    const cycleDarkGradient = () => {
        setCurrentDarkGradient((prev) => (prev + 1) % darkGradients.length);
    };

    const cycleLightGradient = () => {
        setCurrentLightGradient((prev) => (prev + 1) % lightGradients.length);
    };

    return (
        <GradientContext.Provider
            value={{
                currentDarkGradient,
                currentLightGradient,
                setDarkGradient: setCurrentDarkGradient,
                setLightGradient: setCurrentLightGradient,
                cycleDarkGradient,
                cycleLightGradient,
            }}
        >
            {children}
        </GradientContext.Provider>
    );
}

export function GradientBackground() {
    const { currentDarkGradient, currentLightGradient, cycleDarkGradient, cycleLightGradient } = useGradient();
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    // Auto-cycle gradients every 10 seconds (fun feature!)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isDark) {
                cycleDarkGradient();
            } else {
                cycleLightGradient();
            }
        }, 20000); // 10 seconds

        return () => clearInterval(interval);
    }, [isDark, cycleDarkGradient, cycleLightGradient]);

    const currentGradient = isDark
        ? darkGradients[currentDarkGradient]
        : lightGradients[currentLightGradient];

    return (
        <>
            {/* Base background color layer */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: -100,
                    backgroundColor: isDark ? 'hsl(240, 10%, 3.9%)' : 'hsl(0, 0%, 100%)'
                }}
            />
            {/* Gradient overlay layer */}
            <div
                className="fixed inset-0 pointer-events-none transition-all duration-1000 ease-in-out"
                style={{
                    zIndex: -99,
                    background: currentGradient.background
                }}
            />
        </>
    );
}

// Dev-only gradient switcher button
export function GradientSwitcher() {
    const { currentDarkGradient, currentLightGradient, cycleDarkGradient, cycleLightGradient } = useGradient();
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    // Only show in development mode
    if (process.env.NODE_ENV !== "development") {
        return null;
    }

    const currentGradient = isDark
        ? darkGradients[currentDarkGradient]
        : lightGradients[currentLightGradient];

    const handleCycle = () => {
        if (isDark) {
            cycleDarkGradient();
        } else {
            cycleLightGradient();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <div className="glass rounded-lg px-3 py-1.5 text-xs font-medium">
                <span className="text-muted-foreground">Gradient: </span>
                <span className="text-primary">{currentGradient.name}</span>
            </div>
            <Tooltip content={`Trocar Gradiente (${isDark ? "Dark" : "Light"})`}>
                <Button
                    isIconOnly
                    size="lg"
                    color="primary"
                    variant="shadow"
                    onClick={handleCycle}
                    className="h-14 w-14 animate-pulse hover:animate-none"
                >
                    <Palette className="w-6 h-6" />
                </Button>
            </Tooltip>
        </div>
    );
}
