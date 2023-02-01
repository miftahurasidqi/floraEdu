import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import NavAdmin from "../navAdmin";

// import { IonIcon } from "@ionic/react";
// import { add } from "ionicons/icons";

export default function TamabahTanaman() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="pl-64 w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
        <div className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Tambah Tanaman</h1>
            </div>
          </div>
          <div className="flex flex-col p-3 gap-3 lg:gap-7 lg:p-7 lg:flex-row w-full border border-gray-200">
            <div className="w-full bg-transparent lg:w-2/5 order-1 lg:order-2">
              <img src={img2} alt="Hero" className="w-full aspect-[3/2] object-cover rounded-lg shadow-2xl" />
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
