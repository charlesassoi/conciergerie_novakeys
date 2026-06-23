export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-white py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700">
            Gestion clé en main pour propriétaires exigeants
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Boostez vos revenus locatifs sans gérer les contraintes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Nous prenons en charge l'annonce, la communication voyageurs, le ménage, la maintenance, l'accueil et
            l'optimisation tarifaire de vos biens courte durée.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#estimation" className="rounded-2xl bg-brand-500 px-6 py-4 text-center font-semibold text-white hover:bg-brand-700">
              Obtenir une estimation
            </a>
            <a href="#services" className="rounded-2xl border border-gray-300 px-6 py-4 text-center font-semibold text-gray-800 hover:bg-gray-50">
              Découvrir nos services
            </a>
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-2xl font-bold">+27%</p>
              <p className="text-sm text-gray-500">revenus optimisés</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-gray-500">support voyageurs</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-sm text-gray-500">expérience client</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl">
          <div className="rounded-[24px] bg-gray-900 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Exemple de performance</p>
            <h2 className="mt-4 text-3xl font-bold">Appartement T2 à Paris</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-gray-300">Revenu mensuel brut</p>
                <p className="mt-2 text-3xl font-bold">3 450 €</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-gray-300">Taux d'occupation</p>
                <p className="mt-2 text-3xl font-bold">82%</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-gray-300">Prix moyen / nuit</p>
                <p className="mt-2 text-3xl font-bold">145 €</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-gray-300">Avis voyageurs</p>
                <p className="mt-2 text-3xl font-bold">4,92</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
