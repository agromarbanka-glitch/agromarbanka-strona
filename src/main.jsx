import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const fruits = [
  ["truskawki","/fruit-truskawki.svg"],
  ["maliny","/fruit-maliny.svg"],
  ["porzeczka czarna i czerwona","/fruit-porzeczka.svg"],
  ["wiśnie","/fruit-wisnie.svg"],
  ["śliwki","/fruit-sliwki.svg"],
  ["aronia","/fruit-aronia.svg"],
  ["jabłko przemysłowe","/fruit-jablko.svg"],
  ["jabłko na obierkę","/fruit-jablko-obierka.svg"]
];

const directions = [["Niemcy","🇩🇪"],["Belgia","🇧🇪"],["Holandia","🇳🇱"],["Grecja","🇬🇷"]];

function App(){
 return <main>
  <Header/><Hero/><FruitBuying/><Services/><About/><Transport/><Farmers/><Processing/><Certificates/><Gallery/><Contact/><Footer/>
 </main>
}

function Header(){
 return <header className="header">
  <a className="brand" href="#start"><span className="brandMark">AM</span><span><strong>AGRO-MAR</strong><small>Mariusz Bańka Sp. z o.o.</small></span></a>
  <nav><a href="#start">Strona główna</a><a href="#onas">O firmie</a><a href="#skup">Skup owoców</a><a href="#transport">Transport</a><a href="#galeria">Galeria</a><a href="#kontakt">Kontakt</a></nav>
 </header>
}

function Hero(){
 return <section id="start" className="hero">
  <div className="heroPhoto heroFruit"></div><div className="heroPhoto heroTruck"></div><div className="heroShade"></div>
  <div className="heroContent">
   <h1>AGRO-MAR</h1><p className="company">Mariusz Bańka Sp. z o.o.</p><div className="ornament"><span></span><b>◆</b><span></span></div>
   <h2>Skup owoców<br/>Przetwórstwo<br/>Transport</h2>
   <p className="lead">Profesjonalny skup owoców, ich przetwórstwo oraz transport na terenie Polski i Europy.</p>
  </div>
 </section>
}

function FruitBuying(){
 return <section id="skup" className="fruitSection">
  <div className="fruitText"><p className="label">Oferta</p><h2>Skup owoców</h2><div className="lineOrnament"><span></span><b>◆</b><span></span></div><p>Prowadzimy skup owoców miękkich, pestkowych i przemysłowych w 10 punktach na terenie województwa lubelskiego. Stawiamy na sprawną obsługę dostaw, przejrzyste warunki współpracy i profesjonalną organizację sezonu.</p><a className="button darkButton" href="#kontakt">Dowiedz się więcej</a></div>
  <div className="fruitGrid">{fruits.map(([name,img])=><div className="fruitItem" key={name}><div className="fruitCircle"><img src={img} alt={name}/></div><strong>{name}</strong></div>)}</div>
 </section>
}

function Services(){
 return <section className="serviceBand">
  <article><div className="serviceCircle">🍎</div><h3>Skup owoców</h3><p>Owoce miękkie, pestkowe i jabłko przemysłowe.</p></article>
  <article><div className="serviceCircle">🏭</div><h3>Przetwórstwo</h3><p>Pulpa owocowa, płukanie, pakowanie i mrożenie.</p></article>
  <article><div className="serviceCircle">🚛</div><h3>Transport</h3><p>Transport krajowy i międzynarodowy.</p></article>
  <article><div className="serviceCircle">✓</div><h3>Certyfikaty</h3><p>HACCP / IFS FOOD.</p></article>
 </section>
}

function About(){
 return <section id="onas" className="section split"><div><p className="label">O firmie</p><h2>Nowoczesna firma z województwa lubelskiego.</h2></div><div className="textCard"><p>AGRO-MAR Mariusz Bańka Sp. z o.o. to prężnie rozwijająca się firma specjalizująca się w skupie i przerobie owoców oraz w transporcie krajowym i międzynarodowym.</p><p>Posiadamy nowoczesną linię produkcyjną chłodzoną za pomocą chillera. Malinę i porzeczkę przerabiamy na pulpę, natomiast truskawkę płuczemy, pakujemy w beczki i mrozimy.</p></div></section>
}

function Transport(){
 return <section id="transport" className="transportSection"><div className="transportPhoto"></div><div className="transportCopy"><p className="label goldLabel">Transport</p><h2>Transport ciężki w Polsce i Europie</h2><p>Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard, chłodnie i cysterny.</p><div className="flags">{directions.map(([name,flag])=><span key={name}><b>{flag}</b>{name}</span>)}</div></div></section>
}

function Farmers(){
 return <section id="producenci" className="section farmers split"><div><p className="label">Dla producentów rolnych</p><h2>Stała współpraca i sprawna organizacja sezonu.</h2></div><div className="textCard"><ul><li>10 punktów skupu w województwie lubelskim</li><li>skup owoców miękkich, pestkowych i przemysłowych</li><li>sprawna obsługa dostaw</li><li>współpraca oparta na zaufaniu</li></ul></div></section>
}

function Processing(){
 return <section className="section processing"><div className="sectionHead"><p className="label">Przetwórstwo</p><h2>Nowoczesne zaplecze produkcyjne</h2></div><div className="cards"><article><h3>Linia produkcyjna</h3><p>Nowoczesna linia chłodzona za pomocą chillera.</p></article><article><h3>Truskawka</h3><p>Płukanie, pakowanie w beczki i mrożenie.</p></article><article><h3>Malina i porzeczka</h3><p>Przerób na pulpę owocową.</p></article></div></section>
}

function Certificates(){return <section className="certificates"><p className="label goldLabel">Jakość i bezpieczeństwo</p><h2>HACCP / IFS FOOD</h2><p>Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności.</p></section>}

function Gallery(){return <section id="galeria" className="section gallery"><div className="sectionHead"><p className="label">Galeria</p><h2>Miejsce na zdjęcia firmy, produkcji, punktów skupu i floty</h2></div><div className="galleryGrid">{["Zakład produkcyjny","Punkty skupu","Owoce","Linia produkcyjna","Flota","Transport chłodniczy"].map(i=><div key={i}><span>{i}</span></div>)}</div></section>}

function Contact(){return <section id="kontakt" className="section contact split"><div><p className="label">Kontakt</p><h2>Skontaktuj się z AGRO-MAR</h2></div><div className="contactCard"><a href="tel:+48000000000">+48 000 000 000</a><a href="mailto:kontakt@agro-mar.pl">kontakt@agro-mar.pl</a><span>Województwo lubelskie, Polska</span></div></section>}

function Footer(){return <footer><strong>AGRO-MAR Mariusz Bańka Sp. z o.o.</strong><span>Skup owoców · przetwórstwo · transport</span></footer>}

createRoot(document.getElementById("root")).render(<App/>);
