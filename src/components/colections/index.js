import Navbar from "../navbar";
import Card from "../card";
import Footer from "../footer";
// import img1 from "../../images/img1.jpg";
// import img4 from "../../rahadiansyah-ymp_teXHLQE-unsplash.jpg";
import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";

export default function Colections() {
  const Nav = [
    { name: "Beranda", link: "/", on: false },
    { name: "Tentang Kami", link: "/aboutus", on: false },
    { name: "Koleksi", link: "/colections", on: true },
    { name: "Contact", link: "/contact", on: false },
  ];

  const tb_tanaman = [
    { id: 1, img: img1, nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 2, img: img2, nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 3, img: img3, nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 4, img: img4, nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];

  // const descImg = {
  //   image1: [
  //     "alea Film",
  //     "https://images.unsplash.com/photo-1659851854011-30f7e9893289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
  //     "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  //   ],
  // };

  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full">
        <section className="bg-gray-100 w-full pt-[9vh] min-h-screen justify-center items-center lg:px-20 pb-7">
          <div className="flex flex-wrap justify-center items-center gap-4 px-4">
            <div className="w-full p-2 pl-6 mb-5">
              <h2 className="text-xl lg:text-3xl">Daftar Jenis Flora</h2>
            </div>
            {/* <Card image={img1} name="Tanaman 1" By={descImg.image1} /> */}
            <Card list={tb_tanaman[0]} />
            <Card list={tb_tanaman[1]} />
            <Card list={tb_tanaman[2]} />
            <Card list={tb_tanaman[3]} />
            <Card list={tb_tanaman[0]} />
            <Card list={tb_tanaman[1]} />
            <Card list={tb_tanaman[2]} />
            <Card list={tb_tanaman[3]} />
            <Card list={tb_tanaman[0]} />
            <Card list={tb_tanaman[1]} />
            <Card list={tb_tanaman[2]} />
            <Card list={tb_tanaman[3]} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
