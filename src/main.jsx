import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const fruits = ["truskawki", "maliny", "porzeczka czarna", "porzeczka czerwona", "wiśnie", "śliwki", "aronia", "jabłko przemysłowe", "jabłko na obierkę"];
const directions = ["Niemcy", "Belgia", "Holandia", "Grecja"];

function FruitSvg() {
  return (
    <svg className="heroGraphic fruitGraphic" viewBox="0 0 360 360" aria-hidden="true">
      <circle className="softGlow" cx="175" cy="180" r="135" />
      <circle className="apple" cx="130" cy="190" r="54" />
      <circle className="berry red" cx="207" cy="142" r="27" />
      <circle className="berry red2" cx="245" cy="185" r="24" />
      <circle className="berry dark" cx="202" cy="221" r="23" />
      <circle className="berry dark2" cx="252" cy="240" r="18" />
      <path className="leaf" d="M174 119c30-38 72-34 94-8-36 10-66 7-94 8Z" />
      <path className="leaf2" d="M103 128c-36-26-68-16-84 11 31 6 57 2 84-11Z" />
      <path className="stem" d="M154 139c10-32 24-50 51-64" />
    </svg>
  );
}

function TruckSvg() {
  return (
    <svg className="heroGraphic truckGraphic" viewBox="0 0 420 300" aria-hidden="true">
      <path className="road" d="M30 244h360" />
      <rect className="trailer" x="148" y="86" width="210" height="105" rx="8" />
      <path className="cab" d="M60 126h75l30 36v29H60z" />
      <path className="window" d="M91 137h37l19 24H91z" />
      <circle className="wheel" cx="116" cy="202" r="22" />
      <circle className="wheel" cx="292" cy="202" r="22" />
      <circle className="wheelInner" cx="116" cy="202" r="9" />
      <circle className="wheelInner" cx="292" cy="202" r="9" />
      <path className="line" d="M174 118h152M174 146h152M174 174h112" />
      <path className="shine" d="M80 112c42-40 125-58 232-42" />
    </svg>
  );
}

function IconFruit() {
  return (
    <svg viewBox="0 0 64 64"><path d="M28 16c-3-7-9-9-14-8 1 7 5 11 13 12"/><path d="M35 15c5-8 13-9 18-5-2 8-8 11-17 10"/><path d="M32 21c-10-8-23-3-24 11-1 13 11 25 24 25s25-12 24-25c-1-14-14-19-24-11Z"/></svg>
  );
}
function IconFactory() {
  return (
    <svg viewBox="0 0 64 64"><path d="M8 52h48"/><path d="M12 52V30l13 8V28l14 8V18h10v34"/><path d="M20 46h6M34 46h6M48 46h4"/><path d="M43 18V10h10v8"/></svg>
  );
}
function IconTruck() {
  return (
    <svg viewBox="0 0 64 64"><path d="M7 39V20h32v25H7z"/><path d="M39 29h10l8 10v6H39"/><circle cx="20" cy="48" r="5"/><circle cx="48" cy="48" r="5"/><path d="M12 48h3M25 48h18"/></svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 64 64"><path d="M32 6 52 14v15c0 14-8 24-20 29C20 53 12 43 12 29V14l20-8Z"/><path d="M23 32l6 6 13-16"/></svg>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <FruitBuying />
      <Farmers />
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
        <span className="brandMark">AM</span>
        <span><strong>AGRO-MAR</strong><small>Mariusz Bańka Sp. z o.o.</small></span>
      </a>
      <nav>
        <a href="#onas">O nas</a>
        <a href="#skup">Skup owoców</a>
        <a href="#producenci">Dla producentów</a>
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
      <FruitSvg />
      <TruckSvg />
      <div className="heroFrame">
        <p className="overline big">Skup owoców · przetwórstwo · transport</p>
        <h1 className="goldTitle">AGRO-MAR Mariusz Bańka Sp. z o.o.</h1>

        <div className="heroBlocks">
          <div className="heroBlock">
            <h2>Skup owoców</h2>
            <div className="chipGrid">{fruits.map(f => <span key={f}>{f}</span>)}</div>
          </div>
          <div className="heroBlock">
            <h2>Transport</h2>
            <div className="directionGrid">{directions.map(d => <span key={d}>{d}</span>)}</div>
          </div>
        </div>

        <p className="lead">Nowoczesna firma z województwa lubelskiego specjalizująca się w skupie i przerobie owoców oraz transporcie krajowym i międzynarodowym.</p>
        <div className="heroActions">
          <a className="button goldButton" href="#kontakt">Skontaktuj się</a>
          <a className="button outlineButton" href="#skup">Oferta skupu</a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    [<IconFruit />, "Skup owoców", "10 punktów skupu w województwie lubelskim oraz współpraca z producentami rolnymi."],
    [<IconFactory />, "Przetwórstwo", "Nowoczesna linia produkcyjna, chłodzenie chillerem, pulpa owocowa i mrożenie."],
    [<IconTruck />, "Transport", "Transport ciężki: firanki standard, chłodnie, cysterny oraz kierunki europejskie."],
    [<IconShield />, "Jakość", "Praca zgodna ze standardami HACCP oraz IFS FOOD."]
  ];
  return <section className="services">{items.map(([icon,title,text]) => <article key={title}>{icon}<h3>{title}</h3><p>{text}</p></article>)}</section>;
}

function About() {
  return (
    <section id="onas" className="section split">
      <div className="sectionTitle"><p className="overline dark">O nas</p><h2>Profesjonalny partner w branży owocowej.</h2></div>
      <div className="textPanel"><p>AGRO-MAR Mariusz Bańka Sp. z o.o. to firma łącząca doświadczenie w skupie surowca z nowoczesnym zapleczem produkcyjnym oraz własną flotą transportową.</p><p>Naszą działalność opieramy na jakości, terminowości i stabilnej współpracy z producentami rolnymi oraz kontrahentami.</p></div>
    </section>
  );
}

function FruitBuying() {
  return (
    <section id="skup" className="section lightSection">
      <div className="sectionHeader"><p className="overline dark">Skup owoców</p><h2>Kupujemy owoce sezonowe i przemysłowe</h2><p>Posiadamy 10 punktów skupu w województwie lubelskim. Skupujemy owoce miękkie, pestkowe oraz jabłko przemysłowe.</p></div>
      <div className="elegantFruitList">{fruits.map(f => <div key={f}>{f}</div>)}</div>
    </section>
  );
}

function Farmers() {
  return (
    <section id="producenci" className="section farmers split">
      <div className="sectionTitle"><p className="overline dark">Dla producentów rolnych</p><h2>Stała współpraca, sprawna organizacja sezonu.</h2></div>
      <div className="textPanel"><p>Producentom rolnym oferujemy przejrzysty kontakt, sieć punktów skupu oraz sprawną obsługę dostaw.</p><ul><li>10 punktów skupu w województwie lubelskim</li><li>skup owoców miękkich, pestkowych i przemysłowych</li><li>sprawna obsługa dostaw</li><li>współpraca oparta na zaufaniu</li></ul></div>
    </section>
  );
}

function Processing() {
  return (
    <section className="section processing">
      <div className="sectionHeader"><p className="overline dark">Przetwórstwo</p><h2>Nowoczesne zaplecze produkcyjne</h2></div>
      <div className="processGrid">
        <article><IconFactory /><h3>Linia produkcyjna</h3><p>Nowoczesna linia produkcyjna chłodzona za pomocą chillera.</p></article>
        <article><IconFruit /><h3>Truskawka</h3><p>Truskawkę płuczemy, pakujemy w beczki i mrozimy.</p></article>
        <article><IconFruit /><h3>Malina i porzeczka</h3><p>Malinę oraz porzeczkę przerabiamy na pulpę owocową.</p></article>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section id="transport" className="section transport split">
      <div className="sectionTitle"><p className="overline dark">Transport</p><h2>Transport ciężki w Polsce i Europie.</h2></div>
      <div className="textPanel"><p>Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard, chłodnie i cysterny. Realizujemy transport krajowy i międzynarodowy.</p><div className="routes">{directions.map(d => <span key={d}>{d}</span>)}</div></div>
    </section>
  );
}

function Certificates() {
  return <section className="certificates"><div><IconShield /><p className="overline">Jakość i bezpieczeństwo</p><h2>HACCP / IFS FOOD</h2><p>Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności.</p></div></section>;
}

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="sectionHeader"><p className="overline dark">Galeria</p><h2>Miejsce na zdjęcia firmy, owoców, produkcji i floty</h2></div>
      <div className="galleryGrid">{["Zakład produkcyjny","Punkty skupu","Owoce","Linia produkcyjna","Flota","Transport chłodniczy"].map(i => <div key={i}><span>{i}</span></div>)}</div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section contact split">
      <div className="sectionTitle"><p className="overline dark">Kontakt</p><h2>Skontaktuj się z AGRO-MAR</h2></div>
      <div className="contactPanel"><a href="tel:+48000000000">+48 000 000 000</a><a href="mailto:kontakt@agro-mar.pl">kontakt@agro-mar.pl</a><span>Województwo lubelskie, Polska</span></div>
    </section>
  );
}

function Footer() {
  return <footer><strong>AGRO-MAR Mariusz Bańka Sp. z o.o.</strong><span>Skup owoców · przetwórstwo · transport</span></footer>;
}

createRoot(document.getElementById("root")).render(<App />);
