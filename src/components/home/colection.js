import Card from "../card";
import moveTo from "../moveTo";

import img1 from "../../images/alea-film-oU-TSYlvkpY-unsplash.jpg";
import img2 from "../../images/josua-natanael-AIoaTWtswkg-unsplash.jpg";
import img3 from "../../images/ma-ti-wzeA3sU2hlo-unsplash.jpg";
// import img4 from "../../images/rafiqmia-ihsanuddin-qqbmMh57u5k-unsplash.jpg"

import React from "react";
// import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from "@ionic/react";

export default function Colection() {
  const descImg = {
    image1: [
      "alea Film",
      "https://images.unsplash.com/photo-1659851854011-30f7e9893289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    image2: [
      "Josua Natanael",
      "https://unsplash.com/@jonatanael20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
    image3: ["Ma Ti", "https://unsplash.com/de/@masplashti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"],
    image4: [
      "Rafiqmia Ihsanuddin",
      "https://unsplash.com/@rafiqmiaaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "https://unsplash.com/s/photos/hutan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    ],
  };
  return (
    <section class="bg-gray-100 w-full pt-[9vh] min-h-screen  justify-center items-center lg:px-20 pb-7">
      <div className="p-2 pl-6 mb-5">
        <h2 className="text-xl lg:text-3xl">Koleksi Kami</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        <Card image={img1} name="Tanaman 1" By={descImg.image1} />
        <Card image={img2} name="Tanaman 2" By={descImg.image2} />
        <Card image={img3} name="Tanaman 3" By={descImg.image3} />
        {/* <Card image={img4} name="Tanaman 4" By={descImg.image4} /> */}
      </div>
      <div className="flex justify-end mt-6 pr-4">
        <button onClick={() => moveTo("/colections")} class="px-4 py-2 font-semibold text-teal-500 bg-white rounded-full shadow-md hover:bg-teal-100 hover:text-teal-600">
          Lihat Semua Jenis Flora
        </button>
      </div>
    </section>
  );
}
