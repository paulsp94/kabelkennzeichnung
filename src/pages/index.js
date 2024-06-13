import * as React from "react";

import HeroImage from "../images/hero.webp";
import Rolls1 from "../images/rolls.webp";
import Rolls2 from "../images/rolls2.webp";
import Cable from "../images/cable.webp";

import "../styles/global.css";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <main>
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Kabelkennzeichnung</h1>
          <nav className="space-x-6">
            <a href="#produkte" className="hover:underline">
              Produkte
            </a>
            <a href="#montage" className="hover:underline">
              Montage
            </a>
            <a href="#preise" className="hover:underline">
              Preise
            </a>
            <a href="#kontakt" className="hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-secondary py-20">
        <div className="container mx-auto text-center px-6">
          <img
            src={HeroImage}
            alt="Kabelkennzeichnung im Einsatz"
            className="w-full h-64 object-cover mb-8 rounded-md"
          />
          <h2 className="text-4xl font-bold mb-4">
            Langlebige und zuverlässige Kabelkennzeichnung
          </h2>
          <p className="text-lg mb-8">
            Perfekt für sicherheitsrelevante Bereiche wie Kraftwerkbau.
          </p>
        </div>
      </section>

      <section id="produkte" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Unsere Produkte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={Rolls1}
                alt="Einzelstreifen"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-2">Einzelstreifen</h3>
              <p>Perfekt für individuelle Kabelkennzeichnung.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={Rolls2}
                alt="Rollenware"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-2">Rollenware</h3>
              <p>Ideal für Großprojekte.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="montage" className="bg-secondary py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Montage</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Einzelne Kabelkennzeichnungsbänder:
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Längsperforierung am Anfang des Bandes einreißen.</li>
                <li>Über das Kabel legen.</li>
                <li>
                  Ende um das Kabel durch die Längsperforierung durchziehen.
                </li>
              </ol>
            </div>
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold">Rollenware:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Beschriftungsstreifen an der Querperforation abreißen.</li>
                <li>Über das Kabel legen und befestigen.</li>
              </ol>
            </div>
          </div>
          <div>
            <img
              src={Cable}
              alt="Montage"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="preise" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Preise</h2>
          <p className="mb-4">Die Preise sind abhängig von:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>der bestellten Menge</li>
            <li>dem Kabeldurchmesser</li>
            <li>der Anzahl Zeichen pro Band</li>
            <li>Lieferung auf Rolle oder Einzelstreifen</li>
            <li>Verpackungsart</li>
            <li>Lieferzeit</li>
          </ul>
          <p>Normale Lieferzeit: 8 bis 12 Tage.</p>
          <a
            href="#kontakt"
            className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition mt-4 inline-block"
          >
            Preisanfrage senden
          </a>
        </div>
      </section>

      <section id="kontakt" className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
          <div id="hubspotForm" className="space-y-4 max-w-[640px]"></div>
        </div>
      </section>

      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kabelkennzeichnung. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-6">
            <a href="#" className="hover:underline">
              Impressum
            </a>
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
            <a href="#" className="hover:underline">
              AGB
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
