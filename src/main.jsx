import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const fruits = [
  { name: "truskawki", icon: "🍓" },
  { name: "maliny", icon: "◉" },
  { name: "porzeczka czarna", icon: "●" },
  { name: "porzeczka czerwona", icon: "●" },
  { name: "wiśnie", icon: "🍒" },
  { name: "śliwki", icon: "◒" },
  { name: "aronia", icon: "●" },
  { name: "jabłko przemysłowe", icon: "🍎" },
  { name: "jabłko na obierkę", icon: "🍏" }
];

const directions = [
  { name: "Niemcy", flag: "🇩🇪" },
  { name: "Belgia", flag: "🇧🇪" },
  { name: "Holandia", flag: "🇳🇱" },
  { name: "Grecja", flag: "🇬🇷" }
];

function FruitIllustration() {
  return (
    <svg className="fruitIllustration" viewBox="0 0 420 470" aria-hidden="true">
      <defs>
        <radialGradient id="shineRed" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#ffb1a8"/>
          <stop offset="36%" stopColor="#b7332c"/>
          <stop offset="100%" stopColor="#641211"/>
        </radialGradient>
        <radialGradient id="shinePurple" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#a58bd8"/>
          <stop offset="45%" stopColor="#2d173c"/>
          <stop offset="100%" stopColor="#100712"/>
        </radialGradient>
        <radialGradient id="shineApple" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#ffd1c9"/>
          <stop offset="48%" stopColor="#c83931"/>
          <stop offset="100%" stopColor="#631312"/>
        </radialGradient>
      </defs>
      <ellipse cx="205" cy="255" rx="150" ry="150" fill="rgba(255,241,168,.08)"/>
      <circle cx="140" cy="245" r="72" fill="url(#shineApple)"/>
      <path d="M146 169c28-46 78-48 115-20-40 19-77 23-115 20Z" fill="#d8bd69"/>
      <path d="M145 179c11-35 32-56 63-75" fill="none" stroke="#d8bd69" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="250" cy="160" r="32" fill="url(#shineRed)"/>
      <circle cx="295" cy="210" r="31" fill="url(#shineRed)"/>
      <circle cx="238" cy="245" r="27" fill="url(#shinePurple)"/>
      <circle cx="286" cy="282" r="25" fill="url(#shinePurple)"/>
      <circle cx="210" cy="315" r="29" fill="#551b30"/>
      <circle cx="165" cy="335" r="23" fill="#7d1b1b"/>
      <circle cx="115" cy="330" r="22" fill="#b6352d"/>
      <path d="M88 190c-46-28-79-12-95 21 38 8 67 0 95-21Z" fill="#d8bd69" opacity=".85"/>
      <path d="M78 394c77 34 192 42 286-26" fill="none" stroke="rgba(216,189,105,.38)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function TruckIllustration() {
  return (
    <svg className="truckIllustration" viewBox="0 0 620 390" aria-hidden="true">
      <defs>
        <linearGradient id="truckGold" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#fff1a8"/>
          <stop offset="45%" stopColor="#d8bd69"/>
          <stop offset="100%" stopColor="#a9802f"/>
        </linearGradient>
        <linearGradient id="truckBody" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#fffaf0"/>
          <stop offset="100%" stopColor="#d9e1d4"/>
        </linearGradient>
      </defs>
      <g transform="skewY(-5) translate(0 34)">
        <path d="M55 286h505" stroke="rgba(216,189,105,.55)" strokeWidth="6" strokeLinecap="round"/>
        <rect x="225" y="115" width="285" height="118" rx="12" fill="url(#truckBody)" stroke="#d8bd69" strokeWidth="5"/>
        <path d="M70 160h120l50 58v37H70z" fill="#f8f4e7" stroke="#d8bd69" strokeWidth="5"/>
        <path d="M112 174h63l34 39h-97z" fill="#0a4a38" stroke="#d8bd69" strokeWidth="4"/>
        <path d="M230 151h250M230 186h250M230 221h168" stroke="rgba(4,30,22,.22)" strokeWidth="5" strokeLinecap="round"/>
        <text x="252" y="184" fontSize="26" fontWeight="800" fill="#041e16" fontFamily="Arial, sans-serif">AGRO-MAR</text>
        <text x="252" y="212" fontSize="15" fontWeight="700" fill="#041e16" fontFamily="Arial, sans-serif">Mariusz Bańka Sp. z o.o.</text>
        <circle cx="145" cy="265" r="34" fill="#041e16" stroke="#d8bd69" strokeWidth="6"/>
        <circle cx="405" cy="265" r="34" fill="#041e16" stroke="#d8bd69" strokeWidth="6"/>
        <circle cx="145" cy="265" r="13" fill="url(#truckGold)"/>
        <circle cx="405" cy="265" r="13" fill="url(#truckGold)"/>
        <path d="M91 145c85-76 245-99 400-55" fill="none" stroke="rgba(255,241,168,.38)" strokeWidth="7" strokeLinecap="round"/>
      </g>
    </svg>
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
      <FruitIllustration />
      <TruckIllustration />

      <div className="heroFrame">
        <p className="overline big">Skup owoców · przetwórstwo · transport</p>
        <h1 className="goldTitle">AGRO-MAR Mariusz Bańka Sp. z o.o.</h1>

        <div className="heroBlocks">
          <div className="heroBlock">
            <h2>Skup owoców</h2>
            <div className="chipGrid">
              {fruits.map((fruit) => <span key={fruit.name}><b className={"fruitIcon " + slug(fruit.name)}>{fruit.icon}</b>{fruit.name}</span>)}
            </div>
          </div>

          <div className="heroBlock">
            <h2>Transport</h2>
            <div className="directionGrid">
              {directions.map((d) => <span key={d.name}><b>{d.flag}</b>{d.name}</span>)}
            </div>
          </div>
        </div>

        <p className="lead">
          Firma z województwa lubelskiego specjalizująca się w skupie i przerobie owoców
          oraz transporcie krajowym i międzynarodowym.
        </p>

        <div className="heroActions">
          <a className="button goldButton" href="#kontakt">Skontaktuj się</a>
          <a className="button outlineButton" href="#skup">Oferta skupu</a>
        </div>
      </div>
    </section>
  );
}

function slug(text) {
  return text
    .replaceAll("ą","a").replaceAll("ć","c").replaceAll("ę","e").replaceAll("ł","l")
    .replaceAll("ń","n").replaceAll("ó","o").replaceAll("ś","s").replaceAll("ż","z").replaceAll("ź","z")
    .replaceAll(" ","-");
}

function Services() {
  return (
    <section className="services">
      <article><span className="serviceIcon">◇</span><h3>Skup owoców</h3><p>10 punktów skupu w województwie lubelskim oraz współpraca z producentami rolnymi.</p></article>
      <article><span className="serviceIcon">▣</span><h3>Przetwórstwo</h3><p>Nowoczesna linia produkcyjna, chłodzenie chillerem, pulpa owocowa i mrożenie.</p></article>
      <article><span className="serviceIcon">▱</span><h3>Transport</h3><p>Transport ciężki: firanki standard, chłodnie, cysterny oraz kierunki europejskie.</p></article>
      <article><span className="serviceIcon">✓</span><h3>Jakość</h3><p>Praca zgodna ze standardami HACCP oraz IFS FOOD.</p></article>
    </section>
  );
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
      <div className="elegantFruitList">{fruits.map(f => <div key={f.name}><b className={"fruitIcon " + slug(f.name)}>{f.icon}</b>{f.name}</div>)}</div>
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
        <article><span className="serviceIcon">▣</span><h3>Linia produkcyjna</h3><p>Nowoczesna linia produkcyjna chłodzona za pomocą chillera.</p></article>
        <article><span className="serviceIcon">◇</span><h3>Truskawka</h3><p>Truskawkę płuczemy, pakujemy w beczki i mrozimy.</p></article>
        <article><span className="serviceIcon">◈</span><h3>Malina i porzeczka</h3><p>Malinę oraz porzeczkę przerabiamy na pulpę owocową.</p></article>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section id="transport" className="section transport split">
      <div className="sectionTitle"><p className="overline dark">Transport</p><h2>Transport ciężki w Polsce i Europie.</h2></div>
      <div className="textPanel"><p>Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard, chłodnie i cysterny. Realizujemy transport krajowy i międzynarodowy.</p><div className="routes">{directions.map(d => <span key={d.name}><b>{d.flag}</b>{d.name}</span>)}</div></div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="certificates">
      <div><p className="overline">Jakość i bezpieczeństwo</p><h2>HACCP / IFS FOOD</h2><p>Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności.</p></div>
    </section>
  );
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
