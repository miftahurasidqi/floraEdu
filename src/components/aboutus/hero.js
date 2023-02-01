import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";

export default function Hero() {
  return (
    <section className=" pt-[9vh] px-4 min-h-screen bg-gradient-to-br from-white to-warna3 lg:px-8 ">
      <div className="flex w-full justify-center gap-5 items-center pt-8 flex-col lg:gap-10 lg:flex-row lg:pt-12">
        <div className="bg-transparent lg:w-[300px] w-full">
          {/* <img src={img1} alt="Hero" className="w-full h-[250px] lg:h-[350px] object-cover rounded-lg shadow-2xl" /> */}
          <img class="w-full h-[230px] lg:w-[300px] lg:h-[400px]  object-cover object-center rounded-xl" src={img1} alt="" />
        </div>
        <div className="flex flex-col lg:justify-around ml-4 w-full lg:h-[350px] lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900 lg:text-5xl mx-auto">
            <span className="text-teal-500">Tentang </span>Kami
          </h2>
          <p className="text-gray-800 mt-4 mb-3 lg:text-2xl lg:mt-3 lg:mb-6">
            Website kami adalah sumber belajar yang lengkap tentang tumbuhan dan pohon yang ditemukan di destinasi wisata kami. Kami berusaha memberikan informasi yang up-to-date tentang flora dari daerah-daerah ini untuk meningkatkan
            pemahaman dan apresiasi pengunjung terhadap dunia alam.
          </p>
        </div>
      </div>
    </section>
  );
}
