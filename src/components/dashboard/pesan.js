import Footer from "../footer";
import NavAdmin from "../navAdmin";
import ListPesan from "./listPesan";

export default function Pesan() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: true },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_pesan = [
    { id: 1, nama: "User 1", email: "nama@gmail.com", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 2, nama: "User 2", email: "nama@gmail.com", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 3, nama: "User 3", email: "nama@gmail.com", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 4, nama: "User 4", email: "nama@gmail.com", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-64 w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Daftar Pesan</h1>
            </div>
          </div>

          <div class="w-full border border-gray-200">
            <ListPesan list={tb_pesan[0]} />
            <ListPesan list={tb_pesan[1]} />
            <ListPesan list={tb_pesan[2]} />
            <ListPesan list={tb_pesan[3]} />
          </div>
        </div>
      </div>
      <Footer padding={true} />
    </div>
  );
}
