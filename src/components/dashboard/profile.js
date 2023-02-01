import NavAdmin from "../navAdmin";

export default function Profile() {
  const Nav = [
    { name: "Koleksi", link: "/tanaman", on: false },
    { name: "Pesan", link: "/pesan", on: false },
    { name: "Admin", link: "/admin", on: false },
    { name: "Profile", link: "/profile", on: true },
  ];
  return (
    <div>
      <NavAdmin navList={Nav} />
      <div className="lg:pl-[268px] w-full pt-[10vh] lg:pt-0 min-h-screen font-sans justify-center items-center p-3">
        <div className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
