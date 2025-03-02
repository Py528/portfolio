    "use client";

    import { useTheme } from "next-themes";
    import { useEffect, useState } from "react";
    import { Moon, Sun } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { motion, AnimatePresence } from "framer-motion";

    export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix hydration issue (ensures correct theme on mount)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid rendering on the server

    return (
        <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative overflow-hidden"
        >
        <AnimatePresence mode="wait">
            {theme === "dark" ? (
            <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.3 }}
            >
                <Sun className="h-5 w-5 text-yellow-400" />
            </motion.div>
            ) : (
            <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                transition={{ duration: 0.3 }}
            >
                <Moon className="h-5 w-5 text-gray-800" />
            </motion.div>
            )}
        </AnimatePresence>
        </Button>
    );
    }
