// import img1 from "../../images/img1.jpg";
// import Map from "./map";
import Navbar from "../navbar";
import Welcome from "./welcome";
import Colection from "./colection";
import Footer from "../footer";
// 99f6e4
// 7cecd9
// 5eead4
export default function Home() {
  const Nav = [
    { name: "Beranda", link: "/", on: true },
    { name: "Tentang Kami", link: "/aboutus", on: false },
    { name: "Koleksi", link: "/colections", on: false },
    { name: "Contact", link: "/contact", on: false },
  ];
  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full">
        <Welcome />
        <Colection />
      </main>
      <Footer />
    </div>
  );
}
