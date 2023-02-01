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

  const descImg = {
    image1: [
      "alea Film",
      "https://images.unsplash.com/photo-1659851854011-30f7e9893289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    image2: [
      "Josua Natanael",
      "https://unsplash.com/@jonatanael20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    image3: ["Ma Ti", "https://unsplash.com/de/@masplashti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"],
    image4: [
      "Rafiqmia Ihsanuddin",
      "https://unsplash.com/@rafiqmiaaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
  };

  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full">
        <section className="bg-gray-100 w-full pt-[9vh] min-h-screen justify-center items-center lg:px-20 pb-7">
          <div className="flex flex-wrap justify-center items-center gap-4 px-4">
            <div className="w-full p-2 pl-6 mb-5">
              <h2 className="text-xl lg:text-3xl">Daftar Jenis Flora</h2>
            </div>
            <Card image={img1} name="Tanaman 1" By={descImg.image1} />
            <Card image={img2} name="Tanaman 2" By={descImg.image2} />
            <Card image={img3} name="Tanaman 3" By={descImg.image3} />
            <Card image={img4} name="Tanaman 4" By={descImg.image4} />
            <Card image={img1} name="Tanaman 5" By={descImg.image1} />
            <Card image={img2} name="Tanaman 6" By={descImg.image2} />
            <Card image={img3} name="Tanaman 7" By={descImg.image3} />
            <Card image={img4} name="Tanaman 8" By={descImg.image4} />
            <Card image={img1} name="Tanaman 9" By={descImg.image1} />
            <Card image={img2} name="Tanaman 10" By={descImg.image2} />
            <Card image={img3} name="Tanaman 11" By={descImg.image3} />
            <Card image={img4} name="Tanaman 12" By={descImg.image4} />
          </div>
        </section>
        {/* Photo by <a href="https://unsplash.com/de/@masplashti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ma Ti</a> on <a href="https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
      </main>
      <Footer />
    </div>
  );
}
