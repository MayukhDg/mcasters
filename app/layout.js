import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "@/components/shared/Provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "MovieCasters",
  description: "Post and find out about the latest gigs/opportunities near you",
};

export default function RootLayout({ children }) {
    
  
 return (
    <html lang="en">
      <Provider>
      <body className={roboto.className}>
        <Navbar  />
        {children}
        <Footer/>
        </body>
      </Provider>
    </html>
  );
}
