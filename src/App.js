import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import { AboutSection, ResumeSection, ServicesSection } from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ResumeSection />
      </main>
    </div>
  );
}

export default App;
