import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export default function ThemeToggle({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed right-4 top-4 rounded-full bg-gray-200 p-2 dark:bg-gray-800"
    >
      {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
}
