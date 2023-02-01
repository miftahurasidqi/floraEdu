import NavAdmin from "../navAdmin";
import { useParams } from "react-router-dom";
import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";

export default function TanamanDetail() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: true },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: false },
  ];

  const tb_tanaman = [
    {
      id: 1,
      img: img1,
      nama: "tanaman 1",
      deskripsi: "Lorem velit nisi culpa id est cillum sit.",
      longDeskripsi:
        "Qui velit non veniam amet laboris amet duis consequat velit commodo non. In culpa reprehenderit reprehenderit et esse do ut nisi aliqua ad deserunt culpa non officia. Incididunt duis quis ut sit do qui et id cupidatat quis duis nulla eu. Aliqua elit occaecat consequat elit anim quis cupidatat. Ipsum esse velit adipisicing est duis. Do eiusmod mollit occaecat officia incididunt id ad duis. Veniam est aute anim do.Laborum laborum anim proident et mollit laborum excepteur adipisicing magna. Nisi velit ullamco fugiat laboris esse dolore laboris nisi deserunt ullamco do. Ipsum reprehenderit ad culpa elit sunt enim aliqua cillum irure occaecat incididunt aliquip et. Esse commodo excepteur anim incididunt laboris consequat enim excepteur ipsum. Ullamco duis magna amet amet ad tempor.",
    },
    {
      id: 2,
      img: img2,
      nama: "tanaman 2",
      deskripsi: "Lorem velit nisi culpa id est cillum sit.",
      longDeskripsi:
        "Qui velit non veniam amet laboris amet duis consequat velit commodo non. In culpa reprehenderit reprehenderit et esse do ut nisi aliqua ad deserunt culpa non officia. Incididunt duis quis ut sit do qui et id cupidatat quis duis nulla eu. Aliqua elit occaecat consequat elit anim quis cupidatat. Ipsum esse velit adipisicing est duis. Do eiusmod mollit occaecat officia incididunt id ad duis. Veniam est aute anim do.Laborum laborum anim proident et mollit laborum excepteur adipisicing magna. Nisi velit ullamco fugiat laboris esse dolore laboris nisi deserunt ullamco do. Ipsum reprehenderit ad culpa elit sunt enim aliqua cillum irure occaecat incididunt aliquip et. Esse commodo excepteur anim incididunt laboris consequat enim excepteur ipsum. Ullamco duis magna amet amet ad tempor.",
    },
    {
      id: 3,
      img: img3,
      nama: "tanaman 3",
      deskripsi: "Lorem velit nisi culpa id est cillum sit.",
      longDeskripsi:
        "Qui velit non veniam amet laboris amet duis consequat velit commodo non. In culpa reprehenderit reprehenderit et esse do ut nisi aliqua ad deserunt culpa non officia. Incididunt duis quis ut sit do qui et id cupidatat quis duis nulla eu. Aliqua elit occaecat consequat elit anim quis cupidatat. Ipsum esse velit adipisicing est duis. Do eiusmod mollit occaecat officia incididunt id ad duis. Veniam est aute anim do.Laborum laborum anim proident et mollit laborum excepteur adipisicing magna. Nisi velit ullamco fugiat laboris esse dolore laboris nisi deserunt ullamco do. Ipsum reprehenderit ad culpa elit sunt enim aliqua cillum irure occaecat incididunt aliquip et. Esse commodo excepteur anim incididunt laboris consequat enim excepteur ipsum. Ullamco duis magna amet amet ad tempor.",
    },
    {
      id: 4,
      img: img4,
      nama: "tanaman 4",
      deskripsi: "Lorem velit nisi culpa id est cillum sit.",
      longDeskripsi:
        "Qui velit non veniam amet laboris amet duis consequat velit commodo non. In culpa reprehenderit reprehenderit et esse do ut nisi aliqua ad deserunt culpa non officia. Incididunt duis quis ut sit do qui et id cupidatat quis duis nulla eu. Aliqua elit occaecat consequat elit anim quis cupidatat. Ipsum esse velit adipisicing est duis. Do eiusmod mollit occaecat officia incididunt id ad duis. Veniam est aute anim do.Laborum laborum anim proident et mollit laborum excepteur adipisicing magna. Nisi velit ullamco fugiat laboris esse dolore laboris nisi deserunt ullamco do. Ipsum reprehenderit ad culpa elit sunt enim aliqua cillum irure occaecat incididunt aliquip et. Esse commodo excepteur anim incididunt laboris consequat enim excepteur ipsum. Ullamco duis magna amet amet ad tempor.",
    },
  ];

  const params = useParams();
  const tanamanId = params.tanamanId - 1;

  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-8">
          <h1 className="text-gray-900 text-4xl mb-4 lg:pt-10 p-3" for="nama">
            {tb_tanaman[tanamanId].nama}
          </h1>
          <div className="flex flex-col p-3 gap-3 lg:gap-7 lg:p-7 lg:flex-row w-full border rounded-lg border-gray-400">
            <div className="w-full bg-transparent lg:w-2/5 order-1 lg:order-2">
              <img src={tb_tanaman[tanamanId].img} alt="Hero" className="w-full aspect-[3/2] object-cover rounded-lg shadow-2xl" />
            </div>
            <div className="w-full  lg:w-3/5 order-2 lg:order-1">
              <p className=" text-xl mb-5">{tb_tanaman[tanamanId].longDeskripsi}</p>
              <p className="text-gray-900 text-xl">{tb_tanaman[tanamanId].longDeskripsi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
