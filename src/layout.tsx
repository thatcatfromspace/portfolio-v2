import React from "react";
import moon from "./assets/moon.png";
import oddish from "./assets/oddish.png";
import resume from "./assets/dinesh-tv-resume.pdf";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [noDarkMode, setDarkMode] = React.useState(true);
  const darkModeFunction = () => {
    if (noDarkMode) {
      setDarkMode(false);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="h-[100%] min-h-[100vh] scroll-smooth bg-background font-sans">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/20 bg-white/60 px-6 py-3 shadow-none backdrop-blur-md dark:bg-transparent dark:border-transparent">
        <div className="flex items-center gap-x-2 font-heading text-lg font-bold">
          <a href="/" aria-label="Home">
            <img
              src={oddish}
              alt="avatar"
              height={30}
              width={30}
              className="rounded-full shadow-sm"
            />
          </a>
        </div>
        <div className="hidden items-center gap-x-8 sm:flex">
          <a
            href="https://dinesh-veluswamy-blog.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M4 19.5V4.75A2.75 2.75 0 016.75 2h10.5A2.75 2.75 0 0120 4.75v14.75M4 19.5h16M4 19.5v.75A1.75 1.75 0 005.75 22h12.5A1.75 1.75 0 0020 20.25v-.75" />
              </svg>
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm6 14v-4m0 0l-2 2m2-2l2 2" />
              </svg>
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="mailto:dineshveluswamy@gmail.com"
            aria-label="Contact"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
              </svg>
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-400 transition-all group-hover:w-full"></span>
          </a>
          <button
            onClick={darkModeFunction}
            aria-label="Toggle dark mode"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300">
              <img src={moon} alt="moon" height={20} width={20} />
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full"></span>
          </button>
        </div>
        <div className="flex sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="flex w-[300px] flex-col font-semibold text-black dark:text-slate-300 sm:w-[440px]">
              <SheetTitle className="invisible">Mobile Navbar</SheetTitle>
              <a
                href={resume}
                target="_blank"
                aria-label="Resume"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer hover:underline active:text-slate-300 sm:flex">
                  Resume
                </span>
              </a>
              <a
                href="https://dinesh-veluswamy-blog.vercel.app"
                target="_blank"
                aria-label="Blog"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer hover:underline active:text-slate-300 sm:flex">
                  Blog
                </span>
              </a>
              <a href="mailto:dineshveluswamy@gmail.com" aria-label="Contact">
                <span className="cursor-pointer hover:underline dark:active:text-slate-300 sm:flex">
                  Contact
                </span>
              </a>
              <button
                onClick={darkModeFunction}
                aria-label="Toggle dark mode"
                className="mt-2 flex items-center gap-2"
              >
                <img src={moon} alt="moon" height={20} width={20} />
                <span>Theme</span>
              </button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <main className="flex h-full w-full flex-col items-center justify-center px-6 antialiased lg:px-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;
