import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";
import NavAdmin from "../navAdmin";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import ListTanaman from "../listTanaman";

export default function Profile() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: true },
  ];

  const tb_tanaman = [
    { img: img1, nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img2, nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img3, nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { img: img4, nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];
  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="pl-64  w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
        <div className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Daftar Tanaman</h1>
            </div>

            <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1">
              <IonIcon icon={add} size="medium"></IonIcon>
              <span className="text-sm font-semibold tracking-wide">Tamabh Tanaman</span>
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
