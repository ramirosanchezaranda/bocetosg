const tournaments = [
  { name: 'League of Legends', image: '/lol.jpg' },
  { name: 'Valorant', image: '/valorant.jpg' },
  { name: 'CS:GO', image: '/csgo.jpg' },
]

export default function Tournaments() {
  return (
    <section className="bento-grid py-20 bg-[#414141]">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Torneos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tournaments.map((tournament) => (
          <div key={tournament.name} className="relative group overflow-hidden rounded-2xl">
            <img
              src={tournament.image}
              alt={tournament.name}
              className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-bold text-white">{tournament.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}