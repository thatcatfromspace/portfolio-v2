import React from "react";
import moon from "./assets/moon.png";
import oddish from "./assets/oddish.png";
import mail from "./assets/mail.png";
import pencil from "./assets/pencil.png";
import folder from "./assets/folder.png"
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
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/20 bg-white/60 px-6 py-3 shadow-none backdrop-blur-md dark:border-transparent dark:bg-transparent">
        <div className="flex items-center gap-x-2 font-heading text-lg font-bold">
          <a href="https://pokemondb.net/pokedex/oddish" aria-label="Home">
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
            <span className="text-lg text-neutral-500 dark:text-slate-300 grayscale hover:grayscale-0">
              <img src={pencil} alt="mail" height={20} width={20} />
            </span>
            {/* <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full"></span> */}
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300 grayscale hover:grayscale-0">
              <img src={folder} alt="folder" height={20} width={20} />
            </span>
            {/* <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-400 transition-all group-hover:w-full"></span> */}
          </a>
          <a
            href="mailto:dineshveluswamy@gmail.com"
            aria-label="Contact"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300 grayscale hover:grayscale-0">
              <img src={mail} alt="pencil" height={30} width={30} />
            </span>
            {/* <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-400 transition-all group-hover:w-full"></span> */}
          </a>
          <button
            onClick={darkModeFunction}
            aria-label="Toggle dark mode"
            className="group relative flex flex-col items-center"
          >
            <span className="text-lg text-neutral-500 dark:text-slate-300 grayscale hover:grayscale-0">
              <img src={moon} alt="moon" height={20} width={20} />
            </span>
            {/* <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full"></span> */}
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
