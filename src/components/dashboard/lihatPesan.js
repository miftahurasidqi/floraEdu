import NavAdmin from "../navAdmin";
import profil from "../../images/profile.png";
import { useParams } from "react-router-dom";
import moveTo from "../moveTo";

export default function LihatPesan() {
  const params = useParams();
  const pesanId = params.pesanId - 1;

  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: true },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_pesan = [
    {
      id: 1,
      nama: "User 1",
      email: "nama@gmail.com",
      deskripsi:
        "Proident culpa irure excepteur excepteur elit sint sit deserunt exercitation. Labore duis ea aute nostrud elit deserunt laborum nostrud Lorem irure Lorem tempor deserunt. Minim aliqua non proident quis commodo culpa sint sint nisi ipsum quis Lorem. Cupidatat et in magna dolor ad nisi non fugiat laborum commodo.",
    },
    {
      id: 2,
      nama: "User 2",
      email: "nama@gmail.com",
      deskripsi:
        " Minim aliqua non proident quis commodo culpa sint sint nisi ipsum quis Lorem. Cupidatat et in magna dolor ad nisi non fugiat laborum commodo. Cupidatat et in magna dolor ad nisi non fugiat laborum commodo. nisi exercitation veniam consectetur nisi consectetur incididunt amet incididunt dolor ea irure sint. Do et sint magna laborum eiusmod dolore incididunt aute eiusmod consectetur.",
    },
    {
      id: 3,
      nama: "User 3",
      email: "nama@gmail.com",
      deskripsi:
        "Cupidatat et in magna dolor ad nisi non fugiat laborum commodo. nisi exercitation veniam consectetur nisi consectetur incididunt amet incididunt dolor ea irure sint. Do et sint magna laborum eiusmod dolore incididunt aute eiusmod consectetur. Sunt mollit consectetur id aliqua mollit sit ad ipsum.",
    },
    {
      id: 4,
      nama: "User 4",
      email: "nama@gmail.com",
      deskripsi: "nisi exercitation veniam consectetur nisi consectetur incididunt amet incididunt dolor ea irure sint. Do et sint magna laborum eiusmod dolore incididunt aute eiusmod consectetur. laboris laborum.",
    },
  ];

  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex justify-start pt-4">
          <button onClick={() => moveTo("/pesan")} className="p-1 border border-gray-200 text-gray-700 hover:text-gray-200 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        <div className="flex-1 pb-8">
          <div class="w-full mt-3 rounded-md border border-gray-200">
            <div class=" flex gap-3  border-y border-gray-200">
              <div class="py-1 pl-6">
                <img src={profil} alt="" class="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
              </div>

              <div class="grow flex flex-col justify-center gap-1">
                <h1 class="text-xl lg:text-3xl font-semibold text-gray-900">{tb_pesan[pesanId].nama}</h1>
                <p class="font-medium text-gray-700 overflow-hidden">{tb_pesan[pesanId].email}</p>
              </div>
            </div>
            <div className="w-full p-2">
              <p>{tb_pesan[pesanId].deskripsi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
