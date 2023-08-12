import NavBar from "@/components/NavBar";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import SubNav from "@/components/SubNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SubNav />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}