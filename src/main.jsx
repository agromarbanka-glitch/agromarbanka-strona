import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const fruits = [
  "truskawki",
  "maliny",
  "porzeczka czarna i czerwona",
  "wiśnie",
  "śliwki",
  "aronia",
  "jabłko przemysłowe",
  "jabłko na obierkę"
];

const directions = [
  ["Niemcy", "🇩🇪"],
  ["Belgia", "🇧🇪"],
  ["Holandia", "🇳🇱"],
  ["Grecja", "🇬🇷"]
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FruitStrip />
      <About />
      <FruitBuying />
      <Processing />
      <Transport />
      <Certificates />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#start">
        <img src="/images/logo-jablko.png" alt="AGRO-MAR logo" />
        <span>
          <strong>AGRO-MAR</strong>
          <small>Mariusz Bańka Sp. z o.o.</small>
        </span>
      </a>

      <nav>
        <a href="#start">Strona główna</a>
        <a href="#onas">O firmie</a>
        <a href="#skup">Skup owoców</a>
        <a href="#transport">Transport</a>
        <a href="#galeria">Galeria</a>
        <a href="#kontakt" className="navCta">Kontakt</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="start" className="hero">
      <div className="heroImage fruitHero"></div>
      <div className="heroImage truckHero"></div>
      <div className="heroOverlay"></div>

      <div className="heroContent">
        <div className="heroLogo">
          <img src="/images/logo-jablko.png" alt="" />
        </div>

        <h1>AGRO-MAR</h1>
        <p className="company">Mariusz Bańka Sp. z o.o.</p>

        <div className="goldOrnament"><span></span><b>◆</b><span></span></div>

        <h2>Skup owoców<br />Przetwórstwo<br />Transport</h2>

        <p className="lead">
          Profesjonalny skup owoców, ich przetwórstwo oraz transport krajowy i międzynarodowy.
        </p>
      </div>
    </section>
  );
}

function FruitStrip() {
  return (
    <section className="fruitStrip">
      <div>
        <p className="label goldLabel">Skupujemy</p>
        <h2>Owoce sezonowe i przemysłowe</h2>
      </div>
      <div className="fruitPills">
        {fruits.map((fruit) => <span key={fruit}>{fruit}</span>)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="onas" className="section split">
      <div className="sectionTitle">
        <p className="label">O firmie</p>
        <h2>Nowoczesna firma z województwa lubelskiego.</h2>
      </div>
      <div className="textCard">
        <p>
          AGRO-MAR Mariusz Bańka Sp. z o.o. to prężnie rozwijająca się firma
          specjalizująca się w skupie i przerobie owoców oraz w transporcie krajowym
          i międzynarodowym.
        </p>
        <p>
          Posiadamy sieć 10 punktów skupu na terenie województwa lubelskiego,
          nowoczesne zaplecze produkcyjne oraz flotę samochodów ciężarowych.
        </p>
      </div>
    </section>
  );
}

function FruitBuying() {
  return (
    <section id="skup" className="fruitSection">
      <div className="fruitText">
        <p className="label">Oferta</p>
        <h2>Skup owoców</h2>
        <div className="lineOrnament"><span></span><b>◆</b><span></span></div>
        <p>
          Kupujemy owoce miękkie, pestkowe oraz jabłko przemysłowe. Stawiamy na sprawną
          obsługę dostaw, przejrzyste warunki współpracy i profesjonalną organizację sezonu.
        </p>
        <a className="button darkButton" href="#kontakt">Dowiedz się więcej</a>
      </div>

      <div className="fruitPhotoCard">
        <img src="/images/owoce-kafle.png" alt="Owoce skupowane przez AGRO-MAR" />
      </div>
    </section>
  );
}

function Processing() {
  return (
    <section className="section processing">
      <div className="sectionHead">
        <p className="label">Przetwórstwo</p>
        <h2>Nowoczesne zaplecze produkcyjne</h2>
      </div>
      <div className="cards">
        <article>
          <h3>Linia produkcyjna</h3>
          <p>Nowoczesna linia produkcyjna chłodzona za pomocą chillera.</p>
        </article>
        <article>
          <h3>Truskawka</h3>
          <p>Truskawkę płuczemy, pakujemy w beczki i mrozimy.</p>
        </article>
        <article>
          <h3>Malina i porzeczka</h3>
          <p>Malinę oraz porzeczkę przerabiamy na pulpę owocową.</p>
        </article>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section id="transport" className="transportSection">
      <div className="transportImage"></div>
      <div className="transportCopy">
        <p className="label goldLabel">Transport</p>
        <h2>Transport ciężki w Polsce i Europie</h2>
        <p>
          Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard,
          chłodnie i cysterny. Realizujemy transport krajowy i międzynarodowy.
        </p>
        <div className="flags">
          {directions.map(([name, flag]) => (
            <span key={name}><b>{flag}</b>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="certificates">
      <img src="/images/logo-jablko.png" alt="" />
      <p className="label goldLabel">Jakość i bezpieczeństwo</p>
      <h2>HACCP / IFS FOOD</h2>
      <p>Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności.</p>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="sectionHead">
        <p className="label">Galeria</p>
        <h2>Zdjęcia firmy, owoców, produkcji i floty</h2>
      </div>
      <div className="galleryGrid">
        <div className="galleryItem apples"><span>Jabłka</span></div>
        <div className="galleryItem fruits"><span>Owoce</span></div>
        <div className="galleryItem truck"><span>Transport</span></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section contact split">
      <div className="sectionTitle">
        <p className="label">Kontakt</p>
        <h2>Skontaktuj się z AGRO-MAR</h2>
      </div>
      <div className="contactCard">
        <a href="tel:+48000000000">+48 000 000 000</a>
        <a href="mailto:kontakt@agro-mar.pl">kontakt@agro-mar.pl</a>
        <span>Województwo lubelskie, Polska</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <strong>AGRO-MAR Mariusz Bańka Sp. z o.o.</strong>
      <span>Skup owoców · przetwórstwo · transport</span>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
