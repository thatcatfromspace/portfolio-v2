import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing.tsx";
import Layout from "./layout";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
