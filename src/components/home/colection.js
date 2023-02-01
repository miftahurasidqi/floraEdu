import Card from "../card";
import moveTo from "../moveTo";

import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg";

import React from "react";
// import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from "@ionic/react";

export default function Colection() {
  const tb_tanaman = [
    { id: 1, img: img1, nama: "tanaman 1", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 2, img: img2, nama: "tanaman 2", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 3, img: img3, nama: "tanaman 3", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
    { id: 4, img: img4, nama: "tanaman 4", deskripsi: "Lorem velit nisi culpa id est cillum sit." },
  ];

  return (
    <section class="bg-gray-100 w-full pt-[9vh] min-h-screen  justify-center items-center lg:px-20 pb-7">
      <div className="p-2 pl-6 mb-5">
        <h2 className="text-xl lg:text-3xl">Koleksi Kami</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        <Card list={tb_tanaman[1]} />
        <Card list={tb_tanaman[2]} />
        <Card list={tb_tanaman[3]} />
      </div>
      <div className="flex justify-end mt-6 pr-4">
        <button onClick={() => moveTo("/colections")} class="px-4 py-2 font-semibold text-teal-500 bg-white rounded-full shadow-md hover:bg-teal-100 hover:text-teal-600">
          Lihat Semua Jenis Flora
        </button>
      </div>
    </section>
  );
}
