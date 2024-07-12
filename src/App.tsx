import "./index.css";
import "./gradient.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import moon from "./assets/moon.png";
import oddish from "./assets/oddish.png";
import resume from "./assets/dinesh-tv-resume.pdf";

function App() {
  <Router basename="/portfolio">
    <Routes>
      <Route path="/" element="" />
    </Routes>
  </Router>;

  const [noDarkMode, setDarkMode] = useState(true);
  const [showGradient, setShowGradient] = useState(false);

  const darkModeFunction = () => {
    {
      if (noDarkMode) {
        document.documentElement.classList.add("dark");
        setDarkMode(false);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(true);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowGradient(true);
    }, 4000);
  }, []);

  return (
    <>
      <div className="h-[100%] min-h-[100vh]">
        <nav className="flex justify-between px-48 py-5 dark:text-slate-300">
          <div className="font-bold text-lg font-heading flex gap-x-5">
            <img src={oddish} alt="avatar" height={30} width={30} />
            <p>Dinesh Veluswamy</p>
          </div>
          <div className="flex gap-x-10 items-center text-neutral-400 font-semibold">
            <a href={resume} target="_blank">
              <span className="hover:underline cursor-pointer active:text-slate-300">
                Resume
              </span>
            </a>
            <a href="mailto:dineshveluswamy@gmail.com">
              <span className="hover:underline cursor-pointer dark:active:text-slate-300">
                Contact
              </span>
            </a>
            <div onClick={darkModeFunction} className="cursor-pointer">
              <img src={moon} alt="moon" height={20} width={20} />
            </div>
          </div>
        </nav>
        <div className="antialiased flex flex-col px-16">
          <div className="flex cursor-default mt-16">
            {showGradient ? (
              <h1 className="text-4xl dark:text-slate-300 leading-snug font-semibold tracking-wide font-heading">
                Hi, I'm&nbsp;
                <span className="name leading-snug tracking-wide font-bold font-heading">
                  Dinesh.
                </span>
              </h1>
            ) : (
              <TextGenerateEffect words={"Hi, I'm Dinesh."} />
            )}
          </div>
          <div className="mt-4">
            <p className="dark:text-slate-300">
              I'm a software developer specializing in building responsive,
              performant and elegant websites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
