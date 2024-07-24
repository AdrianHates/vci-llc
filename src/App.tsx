import "./App.css";
import Contact from "./components/app/contact";
import Dedication from "./components/app/dedication";
import Footer from "./components/app/footer";
import Inicio from "./components/app/inicio";
import Navbar from "./components/app/navbar";
import Portfolio from "./components/app/portfolio";
import Proyections from "./components/app/proyections";

function App() {
  const navbar = {
    logo: "logo.svg",
    options: [
      {
        name: "Inicio",
        classOpt: "w-[45px]",
      },
      {
        name: "Nosotros",
        classOpt: "w-[73px]",
      },
      {
        name: "Dedicación",
        classOpt: "w-[95px]",
      },
      {
        name: "Proyecciones",
        classOpt: "w-[109px]",
      },
      {
        name: "Portafolio",
        classOpt: "w-[80px]",
      },
      {
        name: "Contacto",
        classOpt: "w-[76px]",
      },
    ],
  };

  return (
    <>
      <div className="bg-quinuary font-montserrat">
        <Navbar logo={navbar.logo} options={navbar.options} />
        <Inicio id={navbar.options[0].name.toLowerCase()} />
        <Dedication id={navbar.options[2].name.toLowerCase()} />
        <Proyections id={navbar.options[3].name.toLowerCase()} />
        <Portfolio id={navbar.options[4].name.toLowerCase()} />
        <Contact id={navbar.options[5].name.toLowerCase()} />
        <Footer />
      </div>
      <div id="portal" />
    </>
  );
}

export default App;
