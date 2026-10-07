import { Link } from "react-router";

const cards = [
  {
    id: 1,
    title: "Card One",
    description: "Ini adalah card pertama.",
  },
  {
    id: 2,
    title: "Card Two",
    description: "Ini adalah card kedua.",
  },
  {
    id: 3,
    title: "Card Three",
    description: "Ini adalah card ketiga.",
  },
];

const Home = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Home
        </h1>

        <p className="mt-2 text-gray-600">
          Pilih salah satu card untuk melihat detail.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              {card.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {card.description}
            </p>

            <Link
              to={`/detail/${card.id}`}
              className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;