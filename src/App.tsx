import "./App.css";
import Contact from "./components/app/contact";
import Footer from "./components/app/footer";
import Inicio from "./components/app/inicio";
import Navbar from "./components/app/navbar";
import Portfolio from "./components/app/portfolio";
import Proyections from "./components/app/proyections";
import Us from "./components/app/us";
import dictionary from "./locales/es.json";

function App() {
  return (
    <>
      <div className="bg-quinuary font-montserrat overflow-hidden">
        <Navbar dictionary={dictionary?.navbar} />
        <Inicio
          id={dictionary.navbar.options[0].name.toLowerCase()}
          dictionary={dictionary?.home}
        />
        <Us
          id={dictionary.navbar.options[1].name.toLowerCase()}
          dictionary={dictionary.us}
        />
        <Proyections
          id={dictionary.navbar.options[2].name.toLowerCase()}
          dictionary={dictionary.proyections}
        />
        <Portfolio id={dictionary.navbar.options[3].name.toLowerCase()} />
        <Contact id={dictionary.navbar.options[4].name.toLowerCase()} />
        <Footer />
      </div>
      <div id="portal" />
    </>
  );
}

export default App;
