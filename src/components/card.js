export default function Card({ image, name, By }) {
  return (
    <div class="p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <figure>
        <img class="w-[300px] h-[200px] object-cover object-center rounded-xl" src={image} alt="" />
        <figcaption className="text-sm">
          Photo by
          <a href={By[1]}>
            {By[0]} on <a href={By[3]}>Unsplash</a>
          </a>
        </figcaption>
      </figure>
      <div class="p-2">
        <h2 class="font-bold text-lg mb-2">{name}</h2>
        <p class="text-sm text-gra">Deskripsi Singkat tentang tanaman</p>
        <div className="mt-1">
          <button class="bg-teal-500 text-white p-2 rounded-lg inline-block">Learn More</button>
        </div>
      </div>
    </div>
  );
}
