"use client";

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme("light")}>
          <MoonIcon className="w-4 h-4" />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <SunIcon className="w-4 h-4" />
        </button>
      );
    }
  };

  return <>{renderThemeToggler()}</>;
}
