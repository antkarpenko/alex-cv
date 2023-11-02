import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import { AboutSection } from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
