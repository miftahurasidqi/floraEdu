export default function VisiMisi() {
  return (
    <section className=" pt-[9vh] px-4 min-h-screen bg-white pb-7">
      <div className="flex flex-wrap w-full justify-center gap-8 items-center px-7 pt-10 flex-col lg:gap-6 lg:flex-row lg:pt-12">
        <div className="flex flex-col hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl lg:mx-0 p-4 w-full lg:min-h-[340px] lg:w-[400px] border border-teal-600 rounded-lg">
          <h2 className="text-3xl font-semibold lg:text-5xl mx-auto mb-2 text-gray-800">Visi</h2>
          <span className="bg-teal-400 rounded-sm w-1/3 mx-auto h-[2px]"></span>
          <p className="text-gray-800 mt-4 lg:text-xl lg:mt-3 lg:mb-6 text-center">Menyediakan pengalaman edukasi yang menyenangkan dan bermanfaat bagi pengunjung tempat wisata dengan menggunakan teknologi QR Code.</p>
        </div>

        <div className="flex flex-col hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl lg:mx-0 p-4 w-full lg:min-h-[340px] lg:w-[400px] border border-teal-600 rounded-lg">
          <h2 className="text-3xl font-semibold lg:text-5xl mx-auto mb-2 text-gray-800">Misi</h2>
          <span className="bg-teal-400 rounded-sm w-1/3 mx-auto h-[2px]"></span>
          <p className="text-gray-800 mt-4 lg:text-xl lg:mt-3 lg:mb-6 text-center">
            Menyediakan informasi mengenai flora di tempat wisata dengan cara yang inovatif dan interaktif melalui penggunaan QR Code, serta meningkatkan kesadaran dan apresiasi pengunjung terhadap keanekaragaman hayati.
          </p>
        </div>

        <div className="flex flex-col  hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl lg:mx-0 p-4 w-full lg:min-h-[340px] lg:w-[400px] border border-teal-600 rounded-lg">
          <h2 className="text-3xl font-semibold lg:text-5xl mx-auto mb-2 text-gray-800">Sejarah</h2>
          <span className="bg-teal-400 rounded-sm w-1/3 mx-auto h-[2px]"></span>
          <p className="text-gray-800 mt-4 lg:text-xl lg:mt-3 lg:mb-6 text-center">
            Program edukasi flora ini diluncurkan pada tahun 2023 oleh pengelola tempat wisata yang ingin memberikan pengalaman yang lebih baik bagi pengunjung melalui pendekatan yang inovatif dan menyenangkan.
          </p>
        </div>

        <div className="flex flex-col hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl lg:mx-0 p-4 w-full lg:min-h-[340px] lg:w-[400px] border border-teal-600 rounded-lg">
          <h2 className="text-3xl font-semibold lg:text-5xl mx-auto mb-2 text-gray-800">Cara Kerja</h2>
          <span className="bg-teal-400 rounded-sm w-1/3 mx-auto h-[2px]"></span>
          <p className="text-gray-800 mt-4 lg:text-xl lg:mt-3 lg:mb-6 text-center">
            Pengunjung dapat menggunakan smartphone mereka untuk memindai QR Code yang terdapat pada plakat-plakat yang ditempatkan di sekitar tempat wisata. Setelah memindai, pengunjung akan diarahkan ke halaman web yang berisi informasi
            mengenai jenis flora tersebut, termasuk gambar dan deskripsi.
          </p>
        </div>
      </div>
    </section>
  );
}
