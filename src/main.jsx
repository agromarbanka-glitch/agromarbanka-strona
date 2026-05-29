import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const fruits = [
  "truskawki",
  "maliny",
  "porzeczka czarna",
  "porzeczka czerwona",
  "wiśnie",
  "śliwki",
  "aronia",
  "jabłko przemysłowe",
  "jabłko na obierkę"
];

const directions = ["Niemcy", "Belgia", "Holandia", "Grecja"];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <MainServices />
      <About />
      <FruitBuying />
      <Farmers />
      <Processing />
      <Transport />
      <Certificates />
      <Gallery />
      <Social />
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
        <span>
          <strong>AGRO-MAR</strong>
          <small>Mariusz Bańka Sp. z o.o.</small>
        </span>
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
      <div className="heroInner">
        <div className="heroCopy">
          <p className="overline">Skup owoców · przetwórstwo · transport ciężki</p>
          <h1>AGRO-MAR Mariusz Bańka Sp. z o.o.</h1>
          <h2>Skup owoców</h2>

          <div className="fruitLine">
            {fruits.map((fruit) => <span key={fruit}>{fruit}</span>)}
          </div>

          <h2 className="transportTitle">Transport</h2>
          <div className="directionLine">
            {directions.map((d) => <span key={d}>{d}</span>)}
          </div>

          <p className="lead">
            Prężnie rozwijająca się firma z województwa lubelskiego, specjalizująca się
            w skupie, przerobie owoców oraz transporcie krajowym i międzynarodowym.
          </p>

          <div className="heroButtons">
            <a className="button gold" href="#kontakt">Skontaktuj się</a>
            <a className="button ghost" href="#skup">Zobacz ofertę skupu</a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelBadge">HACCP / IFS FOOD</div>
          <div className="iconGrid">
            <div><b>🍓</b><span>owoce miękkie</span></div>
            <div><b>🏭</b><span>przetwórstwo</span></div>
            <div><b>❄️</b><span>chiller</span></div>
            <div><b>🚛</b><span>transport</span></div>
          </div>
          <div className="goldLine"></div>
          <p>10 punktów skupu na terenie województwa lubelskiego.</p>
        </div>
      </div>
    </section>
  );
}

function MainServices() {
  return (
    <section className="services">
      <article>
        <span>01</span>
        <h3>Skup owoców</h3>
        <p>Skup owoców sezonowych i przemysłowych w sieci punktów w województwie lubelskim.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Przetwórstwo</h3>
        <p>Produkcja pulpy owocowej, płukanie, pakowanie w beczki oraz mrożenie truskawki.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Transport</h3>
        <p>Flota ciężarowa: firanki standard, chłodnie i cysterny na kierunki europejskie.</p>
      </article>
    </section>
  );
}

function About() {
  return (
    <section id="onas" className="section split">
      <div>
        <p className="overline dark">O nas</p>
        <h2>Nowoczesna firma rodzinna oparta na jakości, terminowości i zaufaniu.</h2>
      </div>
      <div className="textCard">
        <p>
          AGRO-MAR Mariusz Bańka Sp. z o.o. to dynamicznie rozwijająca się firma
          działająca w branży owocowej. Łączymy doświadczenie w skupie surowca z
          nowoczesnym zapleczem produkcyjnym oraz własną flotą transportową.
        </p>
        <p>
          Współpracujemy z producentami rolnymi oraz kontrahentami, dbając o sprawną
          organizację dostaw, utrzymanie jakości surowca i przejrzyste zasady współpracy.
        </p>
      </div>
    </section>
  );
}

function FruitBuying() {
  return (
    <section id="skup" className="section bottle">
      <div className="sectionHeader">
        <p className="overline">Skup owoców</p>
        <h2>Kupujemy owoce sezonowe i przemysłowe</h2>
        <p>
          Posiadamy 10 punktów skupu w województwie lubelskim. Dzięki lokalnej obecności
          jesteśmy blisko producentów i możemy sprawnie obsługiwać sezon.
        </p>
      </div>
      <div className="fruitGrid">
        {fruits.map((fruit) => <div className="fruitItem" key={fruit}>{fruit}</div>)}
      </div>
    </section>
  );
}

function Farmers() {
  return (
    <section id="producenci" className="section farmers">
      <div className="farmersBox">
        <p className="overline dark">Dla producentów rolnych</p>
        <h2>Stawiamy na stałą i uczciwą współpracę z dostawcami.</h2>
        <p>
          Producentom rolnym oferujemy sprawną organizację skupu, przejrzysty kontakt oraz
          możliwość współpracy w wielu lokalizacjach na terenie województwa lubelskiego.
        </p>
      </div>
      <div className="listBox">
        <ul>
          <li>10 punktów skupu w regionie</li>
          <li>skup owoców miękkich i przemysłowych</li>
          <li>sprawna obsługa dostaw w sezonie</li>
          <li>współpraca oparta na zaufaniu</li>
        </ul>
      </div>
    </section>
  );
}

function Processing() {
  return (
    <section className="section processing">
      <div className="sectionHeader">
        <p className="overline">Przetwórstwo</p>
        <h2>Nowoczesne zaplecze produkcyjne</h2>
      </div>
      <div className="processGrid">
        <article>
          <b>🏭</b>
          <h3>Linia produkcyjna</h3>
          <p>Nowoczesna linia produkcyjna wspierana chłodzeniem za pomocą chillera.</p>
        </article>
        <article>
          <b>🍓</b>
          <h3>Truskawka</h3>
          <p>Truskawkę płuczemy, pakujemy w beczki i mrozimy.</p>
        </article>
        <article>
          <b>🍇</b>
          <h3>Malina i porzeczka</h3>
          <p>Malinę oraz porzeczkę przerabiamy na pulpę owocową.</p>
        </article>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section id="transport" className="section transport">
      <div className="transportCopy">
        <p className="overline dark">Transport</p>
        <h2>Transport ciężki w Polsce i Europie</h2>
        <p>
          Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard,
          chłodnie i cysterny. Realizujemy transport na zachód Europy oraz kierunki południowe.
        </p>
      </div>
      <div className="transportCards">
        <div>🚛 <span>firanki standard</span></div>
        <div>❄️ <span>chłodnie</span></div>
        <div>🛢️ <span>cysterny</span></div>
        <div>🌍 <span>Niemcy · Belgia · Holandia · Grecja</span></div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="certs">
      <div>
        <p className="overline">Jakość i bezpieczeństwo</p>
        <h2>Certyfikacja HACCP / IFS FOOD</h2>
        <p>
          Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności. Certyfikacja
          HACCP oraz IFS FOOD potwierdza profesjonalne podejście do procesów produkcyjnych.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="sectionHeader">
        <p className="overline dark">Galeria</p>
        <h2>Miejsce na zdjęcia zakładu, punktów skupu, owoców i floty</h2>
      </div>
      <div className="galleryGrid">
        {["Zakład produkcyjny", "Punkty skupu", "Owoce", "Linia produkcyjna", "Flota", "Chłodnie i cysterny"].map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

function Social() {
  return (
    <section id="social" className="social">
      <div>
        <p className="overline">Social Media</p>
        <h2>Aktualności z sezonu i życia firmy</h2>
        <p>Tu dodamy linki do Facebooka, Instagrama, TikToka lub YouTube.</p>
      </div>
      <a className="button gold" href="#">Facebook</a>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div>
        <p className="overline dark">Kontakt</p>
        <h2>Skontaktuj się z AGRO-MAR</h2>
        <p>
          Jeśli jesteś producentem rolnym, kontrahentem lub szukasz transportu,
          zapraszamy do kontaktu.
        </p>
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
      <span>Skup owoców · przetwórstwo · transport ciężki</span>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
