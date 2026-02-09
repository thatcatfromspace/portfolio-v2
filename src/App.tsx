import { useState, useEffect } from "react";
import "./styles/main.css";
import { Header } from "./components/Header";
import { OpeningStatement } from "./components/OpeningStatement";
import { NowSection } from "./components/NowSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceTable } from "./components/ExperienceTable";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (currentPath !== "/" && currentPath !== "/index.html") {
    return (
      <>
        <Header />
        <main className="container">
          <NotFound />
          <Footer />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container">
        <OpeningStatement />
        <NowSection />
        <ProjectsSection />
        <ExperienceTable />
        <Footer />
      </main>
    </>
  );
}

export default App;
