import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createClient } from "@supabase/supabase-js";
import "./style.css";

const ADMIN_PASSWORD = "agromar2026";

const fallbackSettings = {
  company_name:"AGRO-MAR Mariusz Bańka Sp. z o.o.",
  hero_title:"AGRO-MAR",
  hero_subtitle:"Mariusz Bańka Sp. z o.o.",
  hero_lines:"Skup owoców|Przetwórstwo|Transport",
  hero_description:"Profesjonalny skup owoców, ich przetwórstwo oraz transport krajowy i międzynarodowy.",
  hero_fruit_image:"/images/owoce-mix.jpg",
  hero_truck_image:"/images/samochod.jpg",
  phone:"+48 000 000 000",
  email:"kontakt@agro-mar.pl",
  location:"Województwo lubelskie, Polska",
  theme:"bottle"
};

const fallbackSections=[
 {slug:"onas",menu_label:"O firmie",title:"Nowoczesna firma z województwa lubelskiego.",body:"AGRO-MAR Mariusz Bańka Sp. z o.o. to prężnie rozwijająca się firma specjalizująca się w skupie i przerobie owoców oraz w transporcie krajowym i międzynarodowym.",sort_order:10,is_visible:true},
 {slug:"skup",menu_label:"Skup owoców",title:"Skup owoców",body:"Kupujemy owoce miękkie, pestkowe oraz jabłko przemysłowe. Stawiamy na sprawną obsługę dostaw i przejrzyste warunki współpracy.",sort_order:20,is_visible:true},
 {slug:"producent",menu_label:"Dla Producenta Rolnego",title:"Dla Producenta Rolnego",body:"AGRO-MAR Mariusz Bańka Sp. z o.o. od lat współpracuje z producentami rolnymi z województwa lubelskiego oraz całej Polski. Zapewniamy uczciwe warunki współpracy, sprawną organizację skupu, profesjonalną obsługę dostaw, szybki rozładunek oraz stały kontakt z punktami skupu. Zapraszamy do długoterminowej współpracy producentów rolnych oraz grupy producenckie.",sort_order:25,is_visible:true},
 {slug:"transport",menu_label:"Transport",title:"Transport ciężki w Polsce i Europie",body:"Dysponujemy flotą samochodów ciężarowych oraz naczep: firanki standard, chłodnie i cysterny.",sort_order:30,is_visible:true},
 {slug:"kontakt",menu_label:"Kontakt",title:"Skontaktuj się z AGRO-MAR",body:"Jeśli jesteś producentem rolnym, kontrahentem lub szukasz transportu, zapraszamy do kontaktu.",sort_order:40,is_visible:true}
];

const fallbackFruits=[
 {name:"truskawki",image_url:"/images/fruit-truskawki.jpg",sort_order:10,is_visible:true},
 {name:"maliny",image_url:"/images/fruit-maliny.jpg",sort_order:20,is_visible:true},
 {name:"porzeczka czarna i czerwona",image_url:"/images/fruit-porzeczka.jpg",sort_order:30,is_visible:true},
 {name:"wiśnie",image_url:"/images/fruit-wisnie.jpg",sort_order:40,is_visible:true},
 {name:"śliwki",image_url:"/images/fruit-sliwki.jpg",sort_order:50,is_visible:true},
 {name:"aronia",image_url:"/images/fruit-aronia.jpg",sort_order:60,is_visible:true},
 {name:"jabłko przemysłowe",image_url:"/images/fruit-jablko-przemyslowe.jpg",sort_order:70,is_visible:true},
 {name:"jabłko na obierkę",image_url:"/images/fruit-jablko-obierka.jpg",sort_order:80,is_visible:true}
];
const fallbackDirections=[["Niemcy","🇩🇪"],["Belgia","🇧🇪"],["Holandia","🇳🇱"],["Grecja","🇬🇷"]].map(([name,flag],i)=>({name,flag,sort_order:i,is_visible:true}));
const fallbackGallery=[{title:"Jabłka",image_url:"/images/jablka.jpg",sort_order:10,is_visible:true},{title:"Owoce",image_url:"/images/owoce-mix.jpg",sort_order:20,is_visible:true},{title:"Transport",image_url:"/images/samochod.jpg",sort_order:30,is_visible:true}];

const fallbackProducerPosts=[
 {title:"Komunikat dla producentów rolnych", category:"Komunikat", body:"Aktualne informacje sezonowe, zasady dostaw oraz ważne ogłoszenia dla producentów rolnych będą publikowane w tym miejscu.", image_url:"/images/jablka.jpg", file_url:"", sort_order:10, is_visible:true, is_pinned:true},
 {title:"Współpraca w sezonie skupu", category:"Skup owoców", body:"Zapraszamy producentów rolnych oraz grupy producenckie do długoterminowej współpracy w zakresie dostaw owoców.", image_url:"/images/owoce-mix.jpg", file_url:"", sort_order:20, is_visible:true, is_pinned:false}
];

const supabase = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  ? createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
  : null;

function visible(rows){return [...(rows||[])].filter(x=>x.is_visible!==false).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));}

function App(){
 const [settings,setSettings]=useState(fallbackSettings);
 const [sections,setSections]=useState(fallbackSections);
 const [fruits,setFruits]=useState(fallbackFruits);
 const [directions,setDirections]=useState(fallbackDirections);
 const [gallery,setGallery]=useState(fallbackGallery);
 const [producerPosts,setProducerPosts]=useState(fallbackProducerPosts);

 const load=async()=>{
   if(!supabase) return;
   const [st,se,fr,di,ga,pp]=await Promise.all([
     supabase.from("site_settings").select("*").eq("id",1).single(),
     supabase.from("site_sections").select("*").order("sort_order"),
     supabase.from("fruits").select("*").order("sort_order"),
     supabase.from("transport_directions").select("*").order("sort_order"),
     supabase.from("gallery_items").select("*").order("sort_order"),
     supabase.from("producer_posts").select("*").order("sort_order")
   ]);
   if(st.data) setSettings(st.data);
   if(se.data) setSections(se.data);
   if(fr.data) setFruits(fr.data);
   if(di.data) setDirections(di.data);
   if(ga.data) setGallery(ga.data);
   if(pp && pp.data) setProducerPosts(pp.data);
 };
 useEffect(()=>{load()},[]);

 if(location.pathname.includes("/admin")) return <Admin settings={settings} sections={sections} fruits={fruits} directions={directions} gallery={gallery} producerPosts={producerPosts} reload={load}/>;

 const vSections=visible(sections);
 const sec=(slug)=>vSections.find(s=>s.slug===slug)||fallbackSections.find(s=>s.slug===slug);

 return <main className={"theme-" + (settings.theme || "bottle")}>
   <Header sections={vSections}/>
   <Hero settings={settings}/>
   <FruitStrip fruits={visible(fruits)}/>
   <About sec={sec("onas")}/>
   <FruitBuying sec={sec("skup")} fruits={visible(fruits)}/>
   <Producer sec={sec("producent")}/>
   <Processing/>
   <Transport sec={sec("transport")} directions={visible(directions)} settings={settings}/>
   <Certificates/>
   <Gallery gallery={visible(gallery)}/>
   <Contact sec={sec("kontakt")} settings={settings}/>
   <Footer settings={settings}/>
 </main>
}

function Header({sections}){return <header className="header"><a className="brand" href="/#start"><img src="/images/logo-jablko.png" alt="AGRO-MAR logo"/><span><strong>AGRO-MAR</strong><small>Mariusz Bańka Sp. z o.o.</small></span></a><nav><a href="/#start">Strona główna</a>{sections.map(s=><a key={s.slug} href={s.slug==="producent"?"/producenci":"/#"+s.slug}>{s.menu_label}</a>)}<a href="/admin" className="adminLink">Admin</a></nav></header>}

function Hero({settings}){const lines=(settings.hero_lines||"").split("|").filter(Boolean);return <section id="start" className="hero"><div className="heroImage fruitHero" style={{backgroundImage:`linear-gradient(90deg,rgba(4,30,22,.04),rgba(4,30,22,.76)),url('${settings.hero_fruit_image}')`}}></div><div className="heroImage truckHero" style={{backgroundImage:`linear-gradient(90deg,rgba(4,30,22,.78),rgba(4,30,22,.03)),url('${settings.hero_truck_image}')`}}></div><div className="heroOverlay"></div><div className="heroContent"><div className="heroLogo"><img src="/images/logo-jablko.png" alt=""/></div><h1>{settings.hero_title}</h1><p className="company">{settings.hero_subtitle}</p><div className="goldOrnament"><span></span><b>◆</b><span></span></div><h2>{lines.map((l,i)=><React.Fragment key={l}>{l}{i<lines.length-1&&<br/>}</React.Fragment>)}</h2><p className="lead">{settings.hero_description}</p></div></section>}

function FruitStrip({fruits}){return <section className="fruitStrip"><div><p className="label goldLabel">Skupujemy</p><h2>Owoce sezonowe i przemysłowe</h2></div><div className="fruitPills">{fruits.map(f=><span key={f.name}>{f.name}</span>)}</div></section>}
function Text({body}){return <>{String(body||"").split("\\n").filter(Boolean).map((p,i)=><p key={i}>{p}</p>)}</>}
function About({sec}){return <section id={sec.slug} className="section split"><div className="sectionTitle"><p className="label">{sec.menu_label}</p><h2>{sec.title}</h2></div><div className="textCard"><Text body={sec.body}/></div></section>}
function FruitBuying({sec,fruits}){return <section id={sec.slug} className="fruitSection"><div className="fruitText"><p className="label">Oferta</p><h2>{sec.title}</h2><div className="lineOrnament"><span></span><b>◆</b><span></span></div><Text body={sec.body}/></div><div className="fruitGrid">{fruits.map(f=><div className="fruitItem" key={f.name}><div className="fruitCircle"><img src={f.image_url} alt={f.name}/></div><strong>{f.name}</strong></div>)}</div></section>}

function Producer({sec}){
  if(!sec) return null;
  return <section id={sec.slug} className="producerSection">
    <div className="producerCard">
      <p className="label goldLabel">{sec.menu_label}</p>
      <h2>{sec.title}</h2>
      <Text body={sec.body}/>
      <div className="producerBenefits">
        <span>10 punktów skupu</span>
        <span>sprawna obsługa dostaw</span>
        <span>stały kontakt</span>
        <span>HACCP / IFS FOOD</span>
      </div>
    </div>
  </section>
}

function Processing(){return <section className="section processing"><div className="sectionHead"><p className="label">Przetwórstwo</p><h2>Nowoczesne zaplecze produkcyjne</h2></div><div className="cards"><article><h3>Linia produkcyjna</h3><p>Nowoczesna linia produkcyjna chłodzona za pomocą chillera.</p></article><article><h3>Truskawka</h3><p>Truskawkę płuczemy, pakujemy w beczki i mrozimy.</p></article><article><h3>Malina i porzeczka</h3><p>Malinę oraz porzeczkę przerabiamy na pulpę owocową.</p></article></div></section>}
function Transport({sec,directions,settings}){return <section id={sec.slug} className="transportSection"><div className="transportImage" style={{backgroundImage:`linear-gradient(90deg,rgba(4,30,22,.04),rgba(4,30,22,.2)),url('${settings.hero_truck_image}')`}}></div><div className="transportCopy"><p className="label goldLabel">{sec.menu_label}</p><h2>{sec.title}</h2><Text body={sec.body}/><div className="flags">{directions.map(d=><span key={d.name}><b>{d.flag}</b>{d.name}</span>)}</div></div></section>}
function Certificates(){return <section className="certificates"><img src="/images/logo-jablko.png" alt=""/><p className="label goldLabel">Jakość i bezpieczeństwo</p><h2>HACCP / IFS FOOD</h2><p>Pracujemy zgodnie ze standardami jakości i bezpieczeństwa żywności.</p></section>}
function Gallery({gallery}){return <section id="galeria" className="section gallery"><div className="sectionHead"><p className="label">Galeria</p><h2>Zdjęcia firmy, produkcji, punktów skupu i floty</h2></div><div className="galleryGrid">{gallery.map(g=><div className="galleryItem" key={g.title} style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(4,30,22,.38)),url('${g.image_url}')`}}><span>{g.title}</span></div>)}</div></section>}
function Contact({sec,settings}){
 return <section id={sec.slug} className="section contact contactReadable">
  <div className="sectionHead contactHead">
   <p className="label">{sec.menu_label}</p>
   <h2>{sec.title}</h2>
   <p>Skontaktuj się z odpowiednim działem AGRO-MAR Mariusz Bańka Sp. z o.o.</p>
  </div>

  <div className="contactGrid">
   <article className="contactInfoBox mainAddress">
    <h3>Dane firmy</h3>
    <p><strong>AGRO-MAR Mariusz Bańka Sp. z o.o.</strong></p>
    <p>Kolonia Łaziska 30<br/>24-335 Łaziska</p>
    <p>NIP: 7171839598<br/>KRS: 0000984761</p>
   </article>

   <article className="contactInfoBox highlightContact">
    <h3>Dział zakupu / sprzedaży</h3>
    <a href="tel:+48665423366">665 423 366</a>
   </article>

   <article className="contactInfoBox">
    <h3>Księgowość / płatności / transport</h3>
    <a href="tel:+48724433366">724 433 366</a>
    <a href="tel:+48695241890">695 241 890</a>
    <a href="tel:+48669428539">669 428 539</a>
   </article>

   <article className="contactInfoBox">
    <h3>E-mail</h3>
    <a href="mailto:admin@agromarbanka.pl">admin@agromarbanka.pl</a>
    <a href="mailto:m_banka@op.pl">m_banka@op.pl</a>
    <a href="mailto:m_banka@op.pl">m_banka@op.pl</a>
   </article>

   <article className="contactInfoBox wideContact">
    <h3>Obszar działania</h3>
    <p><strong>Skup owoców:</strong> województwo lubelskie</p>
    <p><strong>Transport krajowy:</strong> Polska</p>
    <p><strong>Transport międzynarodowy:</strong> Unia Europejska, Niemcy, Belgia, Holandia, Grecja</p>
   </article>
  </div>
 </section>
}
function Footer({settings}){return <footer><strong>{settings.company_name}</strong><span>Skup owoców · przetwórstwo · transport</span></footer>}


function ProducersPage({posts,settings}){
 const pinned=posts.filter(p=>p.is_pinned);
 const normal=posts.filter(p=>!p.is_pinned);
 const all=[...pinned,...normal];
 return <section className="producerPage">
   <div className="producerHeroPage">
    <p className="label goldLabel">Dla Producenta Rolnego</p>
    <h1>Aktualności, komunikaty i dokumenty dla producentów rolnych</h1>
    <p>W tym miejscu publikujemy bieżące informacje dotyczące skupu owoców, organizacji dostaw, dokumentów, zdjęć oraz komunikatów sezonowych.</p>
   </div>

   {pinned.length>0 && <div className="producerPinned">
    <h2>Najważniejsze komunikaty</h2>
    <div className="producerPostsGrid">
     {pinned.map(post=><ProducerPostCard key={post.id||post.title} post={post}/>)}
    </div>
   </div>}

   <div className="producerPinned">
    <h2>Wszystkie informacje</h2>
    <div className="producerPostsGrid">
     {all.map(post=><ProducerPostCard key={(post.id||"f")+post.title} post={post}/>)}
    </div>
   </div>
 </section>
}

function ProducerPostCard({post}){
 return <article className="producerPostCard">
   {post.image_url && <img src={post.image_url} alt={post.title}/>}
   <div className="producerPostBody">
    {post.category && <span className="producerCategory">{post.category}</span>}
    <h3>{post.title}</h3>
    <Text body={post.body}/>
    {post.file_url && <a className="producerFile" href={post.file_url} target="_blank" rel="noreferrer">Pobierz plik</a>}
   </div>
 </article>
}


function Admin({settings,sections,fruits,directions,gallery,producerPosts,reload}){
 const [logged,setLogged]=useState(localStorage.getItem("agromar_admin")==="1");
 const [pass,setPass]=useState("");
 if(!logged) return <div className="adminPage"><div className="adminLogin"><h1>Panel administratora</h1><input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Hasło"/><button onClick={()=>{if(pass===ADMIN_PASSWORD){localStorage.setItem("agromar_admin","1");setLogged(true)}else alert("Błędne hasło")}}>Zaloguj</button><p>Hasło startowe: agromar2026</p></div></div>
 if(!supabase) return <div className="adminPage"><div className="adminLogin"><h1>Brak Supabase</h1><p>Dodaj VITE_SUPABASE_URL i VITE_SUPABASE_ANON_KEY w Vercel.</p></div></div>
 return <div className="adminPage"><header className="adminHeader"><h1>AGRO-MAR CMS</h1><div><a href="/">Podgląd strony</a><button onClick={()=>{localStorage.removeItem("agromar_admin");location.reload()}}>Wyloguj</button></div></header><AdminSettings settings={settings} reload={reload}/><AdminSections sections={sections} reload={reload}/><AdminList title="Owoce" table="fruits" rows={fruits} fields={["name","image_url","sort_order","is_visible"]} reload={reload}/><AdminList title="Kierunki transportu" table="transport_directions" rows={directions} fields={["name","flag","sort_order","is_visible"]} reload={reload}/><AdminList title="Galeria" table="gallery_items" rows={gallery} fields={["title","image_url","sort_order","is_visible"]} reload={reload}/><AdminList title="Dla Producenta Rolnego — komunikaty, zdjęcia i pliki" table="producer_posts" rows={producerPosts} fields={["title","category","body","image_url","file_url","sort_order","is_visible","is_pinned"]} reload={reload}/></div>
}
function AdminSettings({settings,reload}){const [form,setForm]=useState(settings);useEffect(()=>setForm(settings),[settings]);const fields=["company_name","theme","hero_title","hero_subtitle","hero_lines","hero_description","hero_fruit_image","hero_truck_image","phone","email","location","seo_title","seo_description"];const save=async()=>{await supabase.from("site_settings").update(form).eq("id",1);await reload();alert("Zapisano")};return <section className="adminBox"><h2>Ustawienia główne</h2><div className="adminGrid">{fields.map(f=><label key={f}>{f}<textarea value={form[f]||""} onChange={e=>setForm({...form,[f]:e.target.value})}/></label>)}</div><button onClick={save}>Zapisz ustawienia</button></section>}
function AdminSections({sections,reload}){return <section className="adminBox"><h2>Zakładki / sekcje</h2>{sections.map(row=><AdminRow key={row.id} table="site_sections" row={row} fields={["slug","menu_label","title","body","sort_order","is_visible"]} reload={reload}/>)}</section>}
function AdminList({title,table,rows,fields,reload}){const add=async()=>{const payload={};fields.forEach(f=>payload[f]=(f==="is_visible"?true:(f==="is_pinned"?false:(f==="sort_order"?100:""))));await supabase.from(table).insert(payload);await reload()};return <section className="adminBox"><h2>{title}</h2>{rows.map(row=><AdminRow key={row.id} table={table} row={row} fields={fields} reload={reload}/>)}<button onClick={add}>Dodaj</button></section>}
function AdminRow({table,row,fields,reload}){const [form,setForm]=useState(row);const save=async()=>{await supabase.from(table).update(form).eq("id",row.id);await reload()};const del=async()=>{if(confirm("Usunąć?")){await supabase.from(table).delete().eq("id",row.id);await reload()}};return <div className="adminRow">{fields.map(f=><label key={f}>{f}{(f==="is_visible"||f==="is_pinned")?<input type="checkbox" checked={!!form[f]} onChange={e=>setForm({...form,[f]:e.target.checked})}/>:<textarea value={form[f]??""} onChange={e=>setForm({...form,[f]:f==="sort_order"?Number(e.target.value):e.target.value})}/>}</label>)}<div className="adminActions"><button onClick={save}>Zapisz</button><button className="danger" onClick={del}>Usuń</button></div></div>}

createRoot(document.getElementById("root")).render(<App/>);
