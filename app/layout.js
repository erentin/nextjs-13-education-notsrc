import { Inter } from '@next/font/google';
import "./globals.css";
import Head from './head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.module.css'

const interFont = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <Head />
      <body className={styles.container}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
