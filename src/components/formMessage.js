export default function FormMessage() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <form class="flex flex-col gap-2">
        <label for="nama" class="block text-gray-700 text-sm">
          Nama Lengkap
        </label>
        <input id="nama" placeholder="Masukan nama" type="text" class="ring-1 ring-gray-300 text-gray-700 bg-white rounded-md shadow-md p-1 px-3 outline-none focus:ring-2 focus:ring-teal-400"></input>

        <label for="email" class="block text-gray-700 text-sm">
          Email
        </label>
        <input id="email" placeholder="Masukan email" type="email" class="ring-1 ring-gray-300 text-gray-700 bg-white rounded-md shadow-md p-1 px-3 outline-none focus:ring-2 focus:ring-teal-400"></input>

        <label for="pesan" class="block text-gray-700 text-sm">
          Pesan
        </label>
        <textarea id="pesan" placeholder="Masukan pesan" type="text" class="ring-1 ring-gray-300 text-gray-700 bg-white rounded-md shadow-md p-1 px-3 outline-none focus:ring-2 focus:ring-teal-400 h-28"></textarea>
        <button class="bg-teal-600 hover:bg-teal-700 text-white p-1 rounded-md text-sm mt-2">Send Message</button>
      </form>
    </div>
  );
}
