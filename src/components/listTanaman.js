import { IonIcon } from "@ionic/react";
import { create, trash, download } from "ionicons/icons";
import moveTo from "./moveTo";

import { useState } from "react";

export default function ListTanaman({ list }) {
  const [moreTogel, setMoreTogel] = useState(false);

  return (
    <div onClick={() => moveTo(`/tanaman/${list.id}`)} className=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
      <div className="py-2 pl-10">
        <img src={list.img} alt="" className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />
      </div>

      <div className="grow flex flex-col justify-center gap-2">
        <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">{list.nama}</h1>
        <p className="font-medium text-gray-700 overflow-hidden">{list.deskripsi}</p>
      </div>
      <button className=" relative mr-6">
        <div className="rotate-90" onClick={() => setMoreTogel(!moreTogel)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        {/* {`${hamburgerTogel ? "block" : "hidden"} */}
        <div className={`${moreTogel ? "block" : "hidden"} absolute right-3 mt-3 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <button className="group flex w-full items-center rounded-md p-3 font-semibold text-sm  hover:font-bold hover:shadow-lg shadow-teal-700">
            <IonIcon icon={create}></IonIcon> <p>Edit</p>
          </button>
          <button className="group flex w-full items-center rounded-md p-3 font-semibold text-sm  hover:font-bold hover:shadow-lg shadow-teal-700">
            <IonIcon icon={download}></IonIcon> <p>Download Qr-Qode</p>
          </button>
          <button className="group flex w-full items-center rounded-md p-3 font-semibold text-sm  hover:font-bold hover:shadow-lg shadow-teal-700">
            <IonIcon icon={trash}></IonIcon> <p>Delete</p>
          </button>
        </div>
      </button>
    </div>
  );
}
