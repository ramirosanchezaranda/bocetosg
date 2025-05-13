const tournaments = [
  { name: 'League of Legends', image: '/LOL.png' },
  { name: 'Valorant', image: '/DBZ.png' },
  { name: 'CS:GO', image: '/csgo.png' },
  { name: 'CS:GO', image: '/FC25.png' },
]

export default function Tournaments() {
  return (
    <section className="bento-grid py-20 bg-[#414141] navbar-glass">
      <h1 className="text-4xl font-bold text-[#DDDDDD] text-center mb-12">Torneos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 md:px-20 lg:px-40 xl:px-60">
        {tournaments.map((tournament) => (
          <div key={tournament.name} className="relative group overflow-hidden rounded-2xl aspect-square border-5 bg-[#414141] border-[#414141] shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={tournament.image}
              alt={tournament.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-30 group-hover:scale-110 group-hover:blur-sm navbar-glass"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 navbar-glass">
              <h3 className="text-2xl font-bold text-[#DDDDDD]">{tournament.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}