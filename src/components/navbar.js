// import { Transition } from "@headlessui/react";
import { useState } from "react";

import moveTo from "./moveTo";

function Navbar({ navList }) {
  const [hamburgerTogel, setHamburgerTogel] = useState(false);

  return (
    <header className="flex fixed z-10 w-full bg-white bg-opacity-50 backdrop-blur-sm shadow-custom">
      <div class="container mx-auto flex items-center justify-between px-4 py-3 relative">
        <div class="flex items-center">
          {/* <img src="https://images.unsplash.com/photo-1659851854011-30f7e9893289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="Logo" class="h-8" /> */}
          <h1 class="ml-2 text-lg lg:text-xl font-semibold text-gray-800">
            Flora<span className="text-teal-500">Edu</span>
          </h1>
        </div>
        {/* s */}
        <nav class="hidden lg:block ">
          <ul class="inline-flex gap-1">
            <li>
              <button onClick={() => moveTo(`${navList[0].link}`)} class={`${navList[0].on ? "bg-teal-500 text-white" : "text-gray-900"} px-2 py-1 font-semibold rounded-md hover:text-teal-900 hover:shadow-lg shadow-teal-700`}>
                {navList[0].name}
              </button>
            </li>
            <li>
              <button onClick={() => moveTo(`${navList[1].link}`)} class={`${navList[1].on ? "bg-teal-500 text-white" : "text-gray-900"} px-2 py-1 font-semibold rounded-md hover:text-teal-900 hover:shadow-lg shadow-teal-700`}>
                {navList[1].name}
              </button>
            </li>
            <li>
              <button onClick={() => moveTo(`${navList[2].link}`)} class={`${navList[2].on ? "bg-teal-500 text-white" : "text-gray-900"} px-2 py-1 font-semibold rounded-md hover:text-teal-900 hover:shadow-lg shadow-teal-700`}>
                {navList[2].name}
              </button>
            </li>
            <li>
              <button onClick={() => moveTo(`${navList[3].link}`)} class={`${navList[3].on ? "bg-teal-500 text-white" : "text-gray-900"} px-2 py-1 font-semibold rounded-md hover:text-teal-900 hover:shadow-lg shadow-teal-700`}>
                {navList[3].name}
              </button>
            </li>
          </ul>
        </nav>
        <div className="block lg:hidden h-full relative">
          <div onClick={() => setHamburgerTogel(!hamburgerTogel)} className="px-2 py-[3px] border-2 rounded border-teal-500 hover:text-white hover:shadow-2xl absolute right-4 block lg:hidden ">
            <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
            <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
            <span className="w-6 h-[2px] my-1 block bg-teal-500"></span>
          </div>

          {/* <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-70"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-0"
            leaveTo="transform opacity-0 scale-80"
          > */}
          <div className={`${hamburgerTogel ? "block" : "hidden"} absolute right-3 mt-10 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            <button
              onClick={() => moveTo(`${navList[0].link}`)}
              className={`${navList[0].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
            >
              {navList[0].name}
            </button>
            <button
              onClick={() => moveTo(`${navList[1].link}`)}
              className={`${navList[1].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
            >
              {navList[1].name}
            </button>
            <button
              onClick={() => moveTo(`${navList[2].link}`)}
              className={`${navList[2].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
            >
              {navList[2].name}
            </button>
            <button
              onClick={() => moveTo(`${navList[3].link}`)}
              className={`${navList[3].on ? "bg-teal-600 text-white" : "text-gray-900 hover:text-teal-900"} group flex w-full items-center rounded-md px-4 py-4 font-semibold text-lg  hover:font-bold hover:shadow-lg shadow-teal-700`}
            >
              {navList[3].name}
            </button>
          </div>
          {/* </Transition> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
