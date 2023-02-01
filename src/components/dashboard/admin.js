import NavAdmin from "../navAdmin";
import moveTo from "../moveTo";
import ListAdmin from "../listAdmin";

export default function Admin() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: true },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_admin = [
    { no: "1", nama: "admin 1", email: "admin@gmail.com", jabatan: "Ketua" },
    { no: "2", nama: "admin 2", email: "admin@gmail.com", jabatan: "Sekertaris" },
    { no: "3", nama: "admin 3", email: "admin@gmail.com", jabatan: "Admin Utama" },
    { no: "4", nama: "admin 4", email: "admin@gmail.com", jabatan: "Bendahara" },
  ];
  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-5 lg:pb-8">
          <div className="flex items-center justify-between py-3 px-2 lg:py-7 lg:px-10">
            <div>
              <h1 className="text-md lg:text-2xl font-semibold leading-relaxed text-gray-800">Daftar Admin</h1>
            </div>

            <button
              onClick={() => moveTo("/tambahtanaman")}
              className="inline-flex gap-x-2 items-center py-1 px-3 lg:py-2.5 lg:px-6 text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-xs lg:text-sm font-semibold tracking-wide">Tambah Admin</span>
            </button>
          </div>

          <div className="w-full border border-gray-200 shadow-lg rounded-lg overflow-x-scroll">
            <div class=" lg:w-full w-[700px]">
              {/* head */}
              <div className="flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
                <div class="py-2 pl-10 w-8">
                  <h1 class="text-xl font-semibold text-gray-900 ">No</h1>
                </div>
                <div class="py-2 pl-10 w-1/4">
                  <h1 class="text-xl font-semibold text-gray-900">Nama</h1>
                </div>
                <div class="py-2 pl-10 w-1/4">
                  <h1 class="text-xl font-semibold text-gray-900">Email</h1>
                </div>
                <div class="py-2 pl-10 grow">
                  <h1 class="text-xl font-semibold text-gray-900">Jabatan</h1>
                </div>
              </div>
              {/* head */}
              {/* list */}

              <ListAdmin list={tb_admin[0]} />
              <ListAdmin list={tb_admin[1]} />
              <ListAdmin list={tb_admin[2]} />
              <ListAdmin list={tb_admin[3]} />
              {/* list */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
