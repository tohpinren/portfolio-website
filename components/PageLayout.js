import Head from 'next/head';
import useDarkMode from '../hooks/useDarkMode';
import Footer from './Footer';
import NavBar from './NavBar';

const PageLayout = ({
  children,
  title = 'Pin Ren Toh Portfolio',
  description = 'Personal portfolio of Pin Ren Toh'
}) => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content={darkMode ? "#000000" : "#ffffff"} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      <main className="min-h-screen bg-blue-50 dark:bg-black text-black dark:text-white">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;