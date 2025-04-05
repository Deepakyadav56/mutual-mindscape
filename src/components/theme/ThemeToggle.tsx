
import React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm dark:bg-teal-800/80 border-teal-100 dark:border-teal-700">
          {theme === "light" && <Sun className="h-5 w-5 text-teal-600" />}
          {theme === "dark" && <Moon className="h-5 w-5 text-teal-200" />}
          {theme === "system" && <Laptop className="h-5 w-5 text-teal-600 dark:text-teal-200" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-teal-800 border-teal-100 dark:border-teal-700">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-700 text-teal-800 dark:text-white">
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-700 text-teal-800 dark:text-white">
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-700 text-teal-800 dark:text-white">
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
