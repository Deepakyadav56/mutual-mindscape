
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/80 backdrop-blur-sm border-2 border-teal-100 dark:bg-teal-800/80 dark:backdrop-blur-sm dark:border-2 dark:border-teal-700 rounded-full shadow-md hover:shadow-lg"
        >
          <motion.div
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {theme === "light" && <Sun className="h-5 w-5 text-teal-800" />}
            {theme === "dark" && <Moon className="h-5 w-5 text-teal-200" />}
            {theme === "system" && <Laptop className="h-5 w-5 text-teal-800 dark:text-teal-200" />}
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md border border-teal-100 dark:bg-teal-800/90 dark:border-teal-700">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Sun className="h-4 w-4 text-teal-600" />
          <span>Light</span>
          {theme === "light" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-500"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Moon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span>Dark</span>
          {theme === "dark" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Laptop className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span>System</span>
          {theme === "system" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
