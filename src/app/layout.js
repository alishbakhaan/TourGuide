import { Mulish } from 'next/font/google' 
const mulish = Mulish({ subsets: ['latin'] })
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
