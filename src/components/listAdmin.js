import { IonIcon } from "@ionic/react";
import { create, trash } from "ionicons/icons";

import { useState } from "react";

export default function ListAdmin({ list }) {
  const [moreTogel, setMoreTogel] = useState(false);

  return (
    <div className="flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
      <div class="py-2 pl-10 w-8">
        <h1 class="text-xl font-semibold text-gray-900">{list.no}</h1>
      </div>
      <div class="py-2 pl-10 w-1/4">
        <h1 class="text-xl font-semibold text-gray-900">{list.nama}</h1>
      </div>
      <div class="py-2 pl-10 w-1/4">
        <h1 class="text-xl font-semibold text-gray-900">{list.email}</h1>
      </div>
      <div class="py-2 pl-10 grow">
        <h1 class="text-xl font-semibold text-gray-900">{list.jabatan}</h1>
      </div>
      <button className=" relative mr-6">
        <div className="rotate-90" onClick={() => setMoreTogel(!moreTogel)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <div className={`${moreTogel ? "block" : "hidden"} absolute right-3 mt-3 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <button className="group flex w-full items-center rounded-md p-3 font-semibold text-sm  hover:font-bold hover:shadow-lg shadow-teal-700">
            <IonIcon icon={create}></IonIcon> <p>Edit</p>
          </button>

          <button className="group flex w-full items-center rounded-md p-3 font-semibold text-sm  hover:font-bold hover:shadow-lg shadow-teal-700">
            <IonIcon icon={trash}></IonIcon> <p>Delete</p>
          </button>
        </div>
      </button>
    </div>
  );
}
