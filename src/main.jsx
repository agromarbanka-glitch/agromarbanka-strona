import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const PHONE = "+48 000 000 000";
const EMAIL = "kontakt@agro-mar.pl";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Highlights />
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
        <a href="#kontakt" className="navButton">Kontakt</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="start" className="hero">
      <div className="heroText">
        <p className="label">Skup owoców · przetwórstwo · transport ciężki</p>
        <h1>Nowoczesne przetwórstwo owoców z województwa lubelskiego.</h1>
        <p className="lead">
          AGRO-MAR Mariusz Bańka Sp. z o.o. to prężnie rozwijająca się firma
          specjalizująca się w skupie i przerobie owoców oraz w transporcie krajowym
          i międzynarodowym.
        </p>
        <div className="buttons">
          <a className="primary" href="#skup">Zobacz skup owoców</a>
          <a className="secondary" href="#kontakt">Skontaktuj się</a>
        </div>
      </div>

      <div className="heroCard">
        <div className="cardHeader">
          <span></span><span></span><span></span>
        </div>
        <h2>AGRO-MAR</h2>
        <div className="heroRow">🍓 skup owoców sezonowych</div>
        <div className="heroRow">🏭 nowoczesna linia produkcyjna</div>
        <div className="heroRow">❄️ chłodzenie systemem chillerowym</div>
        <div className="heroRow">🚛 transport Polska i Europa</div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="highlights">
      <div><strong>10</strong><span>punktów skupu w województwie lubelskim</span></div>
      <div><strong>HACCP</strong><span>system bezpieczeństwa żywności</span></div>
      <div><strong>IFS FOOD</strong><span>certyfikacja jakości procesów</span></div>
      <div><strong>UE</strong><span>transport: Niemcy, Belgia, Holandia, Grecja</span></div>
    </section>
  );
}

function About() {
  return (
    <section id="onas" className="split section">
      <div className="textBox">
        <p className="label">O nas</p>
        <h2>Solidny partner w skupie, przerobie i logistyce owoców.</h2>
        <p>
          AGRO-MAR Mariusz Bańka Sp. z o.o. łączy doświadczenie w skupie owoców
          z nowoczesnym zapleczem produkcyjnym oraz własną flotą transportową.
          Nasza działalność opiera się na jakości, terminowości i długofalowej
          współpracy z producentami rolnymi oraz kontrahentami.
        </p>
        <p>
          Dzięki sieci punktów skupu na terenie województwa lubelskiego jesteśmy
          blisko dostawców, a nowoczesna organizacja pracy pozwala nam sprawnie
          obsługiwać sezon owocowy.
        </p>
      </div>
      <div className="photoBox">
        <span>miejsce na zdjęcie zakładu / hali produkcyjnej</span>
      </div>
    </section>
  );
}

function FruitBuying() {
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

  return (
    <section id="skup" className="section white">
      <div className="sectionHead">
        <p className="label">Skup owoców</p>
        <h2>Kupujemy owoce sezonowe i przemysłowe.</h2>
        <p>
          Prowadzimy skup owoców w oparciu o sieć 10 punktów skupu na terenie
          województwa lubelskiego. Stawiamy na przejrzyste zasady współpracy,
          sprawną obsługę dostaw i stabilne relacje z producentami.
        </p>
      </div>
      <div className="fruitGrid">
        {fruits.map((fruit) => (
          <div className="fruit" key={fruit}><span></span>{fruit}</div>
        ))}
      </div>
    </section>
  );
}

function Farmers() {
  return (
    <section id="producenci" className="split section soft">
      <div className="textBox">
        <p className="label">Dla producentów rolnych</p>
        <h2>Blisko producentów, sprawnie w sezonie.</h2>
        <p>
          Współpraca z producentami rolnymi jest jednym z fundamentów naszej działalności.
          Zależy nam na dobrej komunikacji, organizacji dostaw oraz terminowej obsłudze
          w najbardziej intensywnych okresach sezonu.
        </p>
        <ul className="checkList">
          <li>sieć punktów skupu w województwie lubelskim</li>
          <li>skup owoców miękkich i przemysłowych</li>
          <li>sprawna obsługa dostaw</li>
          <li>współpraca oparta na zaufaniu i przejrzystych zasadach</li>
        </ul>
      </div>
      <div className="numberBox">
        <strong>10</strong>
        <span>punktów skupu w regionie</span>
      </div>
    </section>
  );
}

function Processing() {
  return (
    <section className="section dark">
      <div className="sectionHead">
        <p className="label light">Przetwórstwo owoców</p>
        <h2>Nowoczesna linia produkcyjna i kontrola jakości surowca.</h2>
      </div>
      <div className="cards">
        <article>
          <span className="icon">🏭</span>
          <h3>Linia produkcyjna</h3>
          <p>
            Posiadamy nowoczesną linię produkcyjną wspieraną chłodzeniem za pomocą
            systemu chillerowego.
          </p>
        </article>
        <article>
          <span className="icon">🍓</span>
          <h3>Truskawka</h3>
          <p>
            Truskawki płuczemy, pakujemy w beczki i mrozimy, dbając o właściwe
            parametry jakościowe.
          </p>
        </article>
        <article>
          <span className="icon">🍇</span>
          <h3>Pulpa owocowa</h3>
          <p>
            Malinę oraz porzeczkę przerabiamy na pulpę owocową, przygotowaną do
            dalszego wykorzystania w przemyśle.
          </p>
        </article>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section id="transport" className="split section">
      <div className="textBox">
        <p className="label">Transport ciężki</p>
        <h2>Własna flota i kierunki europejskie.</h2>
        <p>
          Dodatkowym filarem działalności AGRO-MAR jest transport ciężki.
          Dysponujemy flotą samochodów ciężarowych oraz naczep, w tym firankami
          standard, chłodniami i cysternami.
        </p>
        <p>
          Realizujemy transport krajowy oraz międzynarodowy, głównie na kierunkach:
          Niemcy, Belgia, Holandia oraz Grecja.
        </p>
      </div>
      <div className="transportGrid">
        <div>🚛 <strong>firanki standard</strong></div>
        <div>❄️ <strong>chłodnie</strong></div>
        <div>🛢️ <strong>cysterny</strong></div>
        <div>🌍 <strong>Niemcy · Belgia · Holandia · Grecja</strong></div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="certs">
      <div>
        <p className="label">Jakość i bezpieczeństwo</p>
        <h2>Certyfikacja HACCP / IFS FOOD</h2>
        <p>
          Działamy zgodnie ze standardami jakości i bezpieczeństwa żywności.
          Wdrożone systemy HACCP oraz IFS FOOD potwierdzają profesjonalne podejście
          do procesów produkcyjnych i organizacyjnych.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    "zakład produkcyjny",
    "punkty skupu",
    "owoce sezonowe",
    "linia produkcyjna",
    "flota transportowa",
    "chłodnie i cysterny"
  ];

  return (
    <section id="galeria" className="section white">
      <div className="sectionHead">
        <p className="label">Galeria</p>
        <h2>Miejsce na zdjęcia firmy, produkcji, punktów skupu i floty.</h2>
      </div>
      <div className="galleryGrid">
        {items.map((item) => <div className="galleryItem" key={item}>{item}</div>)}
      </div>
    </section>
  );
}

function Social() {
  return (
    <section id="social" className="social">
      <div>
        <p className="label light">Social Media</p>
        <h2>Bądź na bieżąco z naszą działalnością.</h2>
        <p>
          W tym miejscu można dodać linki do Facebooka, Instagrama, TikToka lub YouTube
          oraz publikować aktualności z sezonu skupu owoców.
        </p>
      </div>
      <a className="primary" href="#">Facebook</a>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="split section soft">
      <div className="textBox">
        <p className="label">Kontakt</p>
        <h2>Skontaktuj się z AGRO-MAR.</h2>
        <p>
          Jeśli jesteś producentem rolnym, kontrahentem lub szukasz transportu,
          skontaktuj się z nami. W kolejnej wersji można dodać dokładny adres,
          mapę Google oraz formularz kontaktowy.
        </p>
      </div>
      <div className="contactCard">
        <a href={`tel:${PHONE}`}>☎ {PHONE}</a>
        <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
        <p>📍 Województwo lubelskie, Polska</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>AGRO-MAR Mariusz Bańka Sp. z o.o.</strong>
        <span>Skup owoców · przetwórstwo · transport ciężki</span>
      </div>
      <span>© {new Date().getFullYear()} AGRO-MAR. Wszystkie prawa zastrzeżone.</span>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
