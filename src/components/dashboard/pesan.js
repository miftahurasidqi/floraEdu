import NavAdmin from "../navAdmin";
import profil from "../../images/profile.png";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";

export default function Pesan() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: true },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_pesan = [
    { nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
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
            <div class=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
              <div class="py-1 pl-6">
                <img src={profil} alt="" class="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
              </div>

              <div class="grow flex flex-col justify-center gap-2">
                <h1 class="text-xl lg:text-3xl font-semibold text-gray-900">{tb_pesan[0].nama}</h1>
                <p class="font-medium text-gray-700 overflow-hidden">{tb_pesan[0].deskripsi}</p>
              </div>
              <div class="flex items-center mr-6">
                <IonIcon icon={trash} size="medium"></IonIcon>
              </div>
            </div>
            <div class=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
              <div class="py-1 pl-6">
                <img src={profil} alt="" class="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
              </div>

              <div class="grow flex flex-col justify-center gap-2">
                <h1 class="text-xl lg:text-3xl font-semibold text-gray-900">{tb_pesan[0].nama}</h1>
                <p class="font-medium text-gray-700 overflow-hidden">{tb_pesan[0].deskripsi}</p>
              </div>
              <div class="flex items-center mr-6">
                <IonIcon icon={trash} size="medium"></IonIcon>
              </div>
            </div>
            <div class=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
              <div class="py-1 pl-6">
                <img src={profil} alt="" class="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
              </div>

              <div class="grow flex flex-col justify-center gap-2">
                <h1 class="text-xl lg:text-3xl font-semibold text-gray-900">{tb_pesan[0].nama}</h1>
                <p class="font-medium text-gray-700 overflow-hidden">{tb_pesan[0].deskripsi}</p>
              </div>
              <div class="flex items-center mr-6">
                <IonIcon icon={trash} size="medium"></IonIcon>
              </div>
            </div>
            <div class=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
              <div class="py-1 pl-6">
                <img src={profil} alt="" class="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
              </div>

              <div class="grow flex flex-col justify-center gap-2">
                <h1 class="text-xl lg:text-3xl font-semibold text-gray-900">{tb_pesan[0].nama}</h1>
                <p class="font-medium text-gray-700 overflow-hidden">{tb_pesan[0].deskripsi}</p>
              </div>
              <div class="flex items-center mr-6">
                <IonIcon icon={trash} size="medium"></IonIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
