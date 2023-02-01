import NavAdmin from "../navAdmin";
import moveTo from "../moveTo";

export default function TambahAdmin() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: true },
    { name: "Profile", link: "/profile", on: false },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />

      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3 ">
        <div className="flex justify-start pt-4">
          <button onClick={() => moveTo("/admin")} className="p-1 border border-gray-200 text-gray-700 hover:text-gray-200 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        <form className="p-5 lg:w-1/2 mx-auto" action="">
          <div className="bg-white mt-8 p-7 pb-10 shadow-md shadow-gray-300 rounded-md">
            <div className="flex items-center justify-center py-3 px-10">
              <h1 className="lg:text-2xl text-md font-semibold leading-relaxed text-gray-800">Tambah Admin Baru</h1>
            </div>
            <label className="text-gray-800" for="email">
              Nama
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="text" placeholder="Masukan Email" id="email" />
            <label className="text-gray-800" for="email">
              Jabatan
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="text" placeholder="Masukan Email" id="email" />

            <label className="text-gray-800" for="email">
              Email
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="email" placeholder="Masukan Email" id="email" />
            <label className="text-gray-800" for="Password">
              Password
            </label>
            <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-5" type="password" placeholder="Masukan Password" id="Password" />

            <div className="flex justify-start">
              <button className="w-1/3 py-2 bg-teal-400 hover:bg-teal-600 text-gray-700 hover:text-gray-200 rounded-md">
                <span className="text-md">Tamabah</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <main className="flex h-screen justify-center items-center p-3 bg-teal-200"></main>
    </div>
  );
}
