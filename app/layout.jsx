import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Effects from './components/Effects';

export const metadata = {
  title: 'Utkarsh Baranwal — AI & Full Stack Developer',
  description:
    'Utkarsh Baranwal — AI & Full Stack Developer based in Jabalpur, India. Systems engineering, full stack products and geospatial interfaces.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
