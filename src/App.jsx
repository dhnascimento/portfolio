import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <main className="bg-gray-900">
      <Header />
      <Hero />
      <About/>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
