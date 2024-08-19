import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/app/contact";
import Footer from "./components/app/footer";
import Inicio from "./components/app/inicio";
import Navbar from "./components/app/navbar";
import Portfolio from "./components/app/portfolio";
import Proyections from "./components/app/projections";
import Us from "./components/app/us";
import Login from "./components/app/login";

function App() {
  const [language, setLanguage] = useState("es");
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [login, setLogin] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const module = await import(`./locales/${language}.json`);
        setDictionary(module.default);
      } catch (error) {
        console.error(`Failed to load ${language} translations:`, error);
      }
    };

    loadDictionary();
  }, [language]);
  return (
    <>
      {login ? (
        <Login setLogin={setLogin} />
      ) : (
        dictionary && (
          <div className="bg-quinuary font-montserrat overflow-hidden relative">
            <Navbar dictionary={dictionary?.navbar} setLogin={setLogin} />
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
            <Portfolio
              id={dictionary.navbar.options[3].name.toLowerCase()}
              dictionary={dictionary.portfolio}
            />
            <Contact
              id={dictionary.navbar.options[4].name.toLowerCase()}
              dictionary={dictionary?.contact}
            />
            <Footer dictionary={dictionary?.footer} />
            <button
              className="bg-primary border-[1px] hover:brightness-[150%] transition-all duration-300 border-opacity-[20%] border-white text-white font-normal fixed z-[99999] bottom-5 left-5 rounded-sm py-1 px-2 text-sm"
              onClick={toggleLanguage}
            >
              {language === "es" ? "English" : "Español"}
            </button>
          </div>
        )
      )}
      <div id="portal" />
    </>
  );
}

export default App;
