import img2 from "../../images/images.png";
import NavAdmin from "../navAdmin";
import moveTo from "../moveTo";

// import { IonIcon } from "@ionic/react";
// import { add } from "ionicons/icons";

export default function TamabahTanaman() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: true },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-8">
          <div className="flex justify-start pt-4">
            <button onClick={() => moveTo("/tanaman")} className="p-1 border border-gray-200 text-gray-700 hover:text-gray-200 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Tambah Tanaman</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-7 lg:p-7 lg:flex-row w-full ">
            <div className="w-full p-2 mb-3 border border-gray-400 rounded-lg bg-transparent lg:w-2/5 order-1 lg:order-2">
              <div className="border-4 border-gray-700 rounded-lg">
                <img src={img2} alt="Hero" className="w-full aspect-[3/2] object-cover rounded-lg" />
              </div>
              <button className="flex mt-2 p-2 rounded-md text-sm gap-2 bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload Gambar
              </button>
            </div>

            <div className="w-full p-3 lg:w-3/5 order-2 lg:order-1 border rounded-lg border-gray-400 ">
              <form action="">
                <label className="text-gray-900 text-2xl" for="nama">
                  Nama Tanaman
                </label>
                <input className="w-full p-2 bg-transparent text-gray-700 text-2xl outline-gray-400 mb-5" type="text" placeholder="Masukan Nama Tanaman" id="nama" />

                <label className="text-gray-900 text-2xl" for="deskripsi">
                  Deskripsi
                </label>
                <textarea className="w-full h-80 p-2 bg-transparent text-gray-700 text-2xl outline-gray-400 mb-5" type="text" placeholder="Tambahkan Deskripsi Tanaman" id="deskripsi" />

                <div className="flex w-full justify-end">
                  <button className="bg-teal-400 hover:bg-teal-600 text-gray-700 hover:text-gray-200 rounded-md flex px-5 py-2">
                    <span className="text-md">Simpan</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
