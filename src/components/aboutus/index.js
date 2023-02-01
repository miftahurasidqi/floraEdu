import Footer from "../footer";
import Navbar from "../navbar";
import Hero from "./hero";
import VisiMisi from "./visiMisi";

const Nav = [
  { name: "Beranda", link: "/", on: false },
  { name: "Tentang Kami", link: "/tetangkami", on: true },
  { name: "Koleksi", link: "/colections", on: false },
  { name: "Contact", link: "/contact", on: false },
];

export default function AboutUs() {
  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full">
        <Hero />
        <VisiMisi />
      </main>
      <Footer />
    </div>
  );
}
