// import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
// import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
// import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";
import moveTo from "../moveTo";

export default function Welcome() {
  return (
    <section className="pt-[9vh] px-4 min-h-screen bg-gradient-to-br from-white to-warna3 lg:px-8 ">
      <div class="flex gap-5 lg:gap-10 items-center pt-8 flex-col lg:flex-row lg:pt-12 pl-5 ">
        <div className="w-full bg-transparent border lg:w-1/2 order-1 lg:order-2">
          <img src={img2} alt="Hero" className="w-full h-[250px] lg:h-[350px] object-cover rounded-lg shadow-2xl" />
        </div>
        <div className="ml-4 w-full lg:w-1/2 order-2 lg:order-1 ">
          <h2 className="text-3xl font-semibold text-gray-900 lg:text-5xl">
            Selamat datang di Flora<span className="text-teal-500">Edu</span>
          </h2>
          <p className="text-gray-800 mt-1 mb-3 lg:text-xl lg:mt-3 lg:mb-6">
            Kami menyediakan informasi mengenai berbagai jenis flora di tempat Kami. Anda dapat mencari tahu tentang ciri-ciri, manfaat, dan habitat dari setiap jenis flora yang ada.
          </p>
          <button onClick={() => moveTo("/tetangkami")} className="px-4 py-2 font-semibold text-white bg-teal-500 rounded-full shadow-md hover:bg-teal-600">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
