interface Button {
  name: string;
}

interface Option {
  name: string;
}

interface Navbar {
  button: Button;
  options: Option[];
}

interface TextIcon {
  text: string;
}

interface Home {
  textPrincipal: {
    first: string;
    second: string;
  };
  textIcons: TextIcon[];
}

interface Feature {
  name: string;
  description: string;
}

interface FirstPart {
  title: string;
  main: string;
  inner: string;
  aditional: string;
}

interface SecondPart {
  title: string;
  main: string;
  inner: string;
  icon: string;
}

interface Us {
  listFeatures: Feature[];
  firstPart: FirstPart;
  secondPart: SecondPart;
}

interface Description {
  first: string;
  second: string;
}

interface Projections {
  title: string;
  description: {
    resalted: Description;
    normal: Description;
  };
  dataNumbers: string[];
  donutChart: {
    keys: string[];
  };
  stackedColumnChart: {
    title: {
      normal: string;
      big: string;
    };
    keys: string[];
  };
}

interface PortfolioItem {
  name: string;
  description: string;
}

interface Portfolio {
  title: string;
  description: string;
  listPortfolio: PortfolioItem[];
  button: Button;
}

interface ContactFormPlaceholder {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormButton {
  name: string;
}

interface Contact {
  title: string;
  form: {
    placeholder: ContactFormPlaceholder;
    button: ContactFormButton;
  };
}

interface FooterDescription {
  resalted: Description;
  normal: {
    first: string;
  };
}

interface Footer {
  description: FooterDescription;
  contact: {
    name: string;
  };
  copyright: string;
}

interface Dictionary {
  navbar: Navbar;
  home: Home;
  us: Us;
  proyections: Projections;
  portfolio: Portfolio;
  contact: Contact;
  footer: Footer;
}