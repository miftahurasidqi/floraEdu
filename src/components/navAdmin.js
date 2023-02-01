// import { Transition } from "@headlessui/react";
import { useState } from "react";
import moveTo from "./moveTo";

import { IonIcon } from "@ionic/react";
import { people, leaf, mail, business } from "ionicons/icons";

export default function NavAdmin({ navList }) {
  const [hamburgerTogel, setHamburgerTogel] = useState(false);

  return (
    <aside className="py-3 px-10 w-full h-[10vh] lg:w-64 lg:h-full border-r border-gray-200 bg-white bg-opacity-50 backdrop-blur-sm shadow-custom fixed">
      <div class="flex items-center">
        {/* <img src="https://images.unsplash.com/photo-1659851854011-30f7e9893289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="Logo" class="h-8" /> */}
        <h1 class="ml-2 lg:mt-3 text-lg lg:text-3xl font-semibold text-gray-800">
          Flora<span className="text-teal-500">Edu</span>
        </h1>
      </div>
      <div className="hidden lg:block">
        <ul className="flex flex-col gap-y-6 pt-16">
          <li>
            <div onClick={() => moveTo(`${navList[0].link}`)} className="flex gap-x-4 items-center py-2 text-gray-800 hover:text-teal-600 group">
              <span className="absolute w-1.5 h-8 bg-teal-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              <IonIcon icon={leaf} size="medium"></IonIcon>
              <span>{navList[0].name}</span>
            </div>
          </li>
          <li>
            <div onClick={() => moveTo(`${navList[1].link}`)} className="flex gap-x-4 items-center py-2 text-gray-800 hover:text-teal-600 group">
              <span className="absolute w-1.5 h-8 bg-teal-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              <IonIcon icon={mail} size="medium"></IonIcon>
              <span>{navList[1].name}</span>
            </div>
          </li>
          <li>
            <div onClick={() => moveTo(`${navList[2].link}`)} className="flex gap-x-4 items-center py-2 text-gray-800 hover:text-teal-600 group">
              <span className="absolute w-1.5 h-8 bg-teal-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              <IonIcon icon={people} size="medium"></IonIcon>
              <span>{navList[2].name}</span>
            </div>
          </li>
          <li>
            <div onClick={() => moveTo(`${navList[3].link}`)} className="flex gap-x-4 items-center py-2 text-gray-800 hover:text-teal-600 group">
              <span className="absolute w-1.5 h-8 bg-teal-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              <IonIcon icon={business} size="medium"></IonIcon>
              <span>{navList[3].name}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="block lg:hidden h-full relative">
        <div onClick={() => setHamburgerTogel(!hamburgerTogel)} className="px-2 py-[3px] border-2 rounded border-teal-500 hover:text-white hover:shadow-2xl absolute -right-2 -top-7 block lg:hidden ">
          <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
          <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
          <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
        </div>

        <div className={`${hamburgerTogel ? "block" : "hidden"} absolute z-[100] -right-2 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <button
            onClick={() => moveTo(`${navList[0].link}`)}
            className={`${navList[0].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex gap-2 w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
          >
            <IonIcon icon={leaf} size="medium"></IonIcon>
            <span>{navList[0].name}</span>
          </button>
          <button
            onClick={() => moveTo(`${navList[1].link}`)}
            className={`${navList[1].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex gap-2 w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
          >
            <IonIcon icon={mail} size="medium"></IonIcon>
            <span>{navList[1].name}</span>
          </button>
          <button
            onClick={() => moveTo(`${navList[2].link}`)}
            className={`${navList[2].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex gap-2 w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
          >
            <IonIcon icon={people} size="medium"></IonIcon>
            <span>{navList[2].name}</span>
          </button>
          <button
            onClick={() => moveTo(`${navList[3].link}`)}
            className={`${navList[3].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex gap-2 w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
          >
            <IonIcon icon={business} size="medium"></IonIcon>
            <span>{navList[3].name}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
