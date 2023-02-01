import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";
import NavAdmin from "../navAdmin";
import moveTo from "../moveTo";
import ListTanaman from "../listTanaman";

export default function Tanaman() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: true },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_tanaman = [
    { id: 1, img: img1, nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 2, img: img2, nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 3, img: img3, nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 4, img: img4, nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];
  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-64 w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-5 lg:pb-8">
          <div className="flex items-center justify-between py-3 px-2 lg:py-7 lg:px-10">
            <div>
              <h1 className="text-md lg:text-2xl font-semibold leading-relaxed text-gray-800">Daftar Tanaman</h1>
            </div>

            <button
              onClick={() => moveTo("/tambahtanaman")}
              className="inline-flex gap-x-2 items-center py-1 px-3 lg:py-2.5 lg:px-6 text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-xs lg:text-sm font-semibold tracking-wide">Tambah Tanaman</span>
            </button>
          </div>

          <div class="w-full border border-gray-200">
            <ListTanaman list={tb_tanaman[0]} />
            <ListTanaman list={tb_tanaman[1]} />
            <ListTanaman list={tb_tanaman[2]} />
            <ListTanaman list={tb_tanaman[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
