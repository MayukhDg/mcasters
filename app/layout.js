import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/shared/Provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieCasters",
  description: "Post and find out about the latest gigs/opportunities near you",
};

export default function RootLayout({ children }) {

  
 return (
    <html lang="en">
      <Provider>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
      </Provider>
    </html>
  );
}
