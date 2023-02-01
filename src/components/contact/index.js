import Navbar from "../navbar";
// import call from "../../call.svg";
import Footer from "../footer";
import FormMessage from "../formMessage";

import React from "react";
import { IonIcon } from "@ionic/react";
import { call, mail, location, logoFacebook, logoInstagram, logoYoutube } from "ionicons/icons";

export default function Contact() {
  const Nav = [
    { name: "Beranda", link: "/", on: false },
    { name: "Tentang Kami", link: "/aboutus", on: false },
    { name: "Koleksi", link: "/colections", on: false },
    { name: "Contact", link: "/contact", on: true },
  ];
  return (
    <div>
      <Navbar navList={Nav} />
      <main className="w-full">
        <section className="pt-[10vh] px-4 min-h-screen bg-gradient-to-br from-white to-warna3 lg:px-8 ">
          <div className="flex justify-center items-center w-full pt-4 pb-5">
            <div className=" lg:flex lg:p-8 p-4 space-y-6 max-w-4xl lg:h-[450px] rounded-xl shadow-lg text-white bg-teal-700">
              <div className="flex flex-col justify-between lg:pr-8">
                <div className="flex flex-col justify-between">
                  <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
                  <p className="text-sm text-teal-50">
                    Kami menghargai masukan dan saran Anda, dan selalu senang untuk mendengar dari Anda. Apakah Anda memiliki pertanyaan atau hanya ingin berbagi pendapat Anda. Jangan ragu untuk menghubungi kami, dan kami akan segera
                    menghubungi Anda.
                  </p>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="inline-flex space-x-2 items-center">
                    <IonIcon icon={call} size="large"></IonIcon>
                    <span>+62 822 8059 5011</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <IonIcon icon={mail} size="large"></IonIcon>
                    <span>floraedu@mail.com</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <IonIcon icon={location} size="large"></IonIcon>
                    <span>Jl. Desa Sumberrejo</span>
                  </div>
                </div>
                <div className="flex gap-7 pt-8">
                  <IonIcon icon={logoFacebook} size="large"></IonIcon>
                  <IonIcon icon={logoInstagram} size="large"></IonIcon>
                  <IonIcon icon={logoYoutube} size="large"></IonIcon>
                </div>
              </div>
              <FormMessage />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
