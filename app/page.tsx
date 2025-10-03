import {MenuBar} from "@/components/menu-bar";
import {ThemeToggle} from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="font-sans flex gap-10 dark:bg-[#09090b] items-center justify-center h-screen flex-col">
      <ThemeToggle />
      <MenuBar />
    </div>
  );
}
