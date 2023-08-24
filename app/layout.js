// import { CartProvider } from "@/components/CartContext";
import NavBar from "@/components/NavBar";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import SubNav from "@/components/SubNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flako limited",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <CartProvider> */}
        <SubNav />
        <NavBar />
        {children}
        <Footer />
        {/* </CartProvider> */}
      </body>
    </html>
  );
}
