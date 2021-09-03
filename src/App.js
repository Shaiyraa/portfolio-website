import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero/hero.component';
import Footer from './components/footer/footer.component';
import About from './sections/about/about.component';
import Projects from './sections/projects/projects.component';
import Contact from './sections/contact/contact.component';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
