import "./styles/main.css";
import { Header } from "./components/Header";
import { OpeningStatement } from "./components/OpeningStatement";
import { NowSection } from "./components/NowSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceTable } from "./components/ExperienceTable";
import { Footer } from "./components/Footer";

function App() {
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
