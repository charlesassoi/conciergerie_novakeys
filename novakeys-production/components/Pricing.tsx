const plans = [
  {
    title: 'Essentiel',
    price: '18%',
    description: 'Pour démarrer avec une gestion locative simplifiée.',
    features: ['Création annonce', 'Messagerie voyageurs', 'Check-in / check-out', 'Coordination ménage'],
  },
  {
    title: 'Premium',
    price: '22%',
    description: 'Notre formule la plus demandée pour déléguer à 100%.',
    features: ['Yield management', 'Support 7j/7', 'Maintenance légère', 'Reporting propriétaire', 'Suivi qualité'],
    highlighted: true,
  },
  {
    title: 'Sur-mesure',
    price: 'Sur devis',
    description: 'Pour plusieurs biens ou besoins spécifiques.',
    features: ['Multi-biens', 'Pack photo', 'Fournitures', 'Interventions urgentes', 'Processus personnalisé'],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-gray-50 py-20">
      <div className="container-page">
        <h2 className="section-title">Des tarifs transparents</h2>
        <p className="section-subtitle">Nous alignons notre rémunération sur vos performances locatives.</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`rounded-3xl border p-8 ${plan.highlighted ? 'border-brand-500 bg-white shadow-xl' : 'border-gray-200 bg-white shadow-sm'}`}
            >
              {plan.highlighted && (
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">Le plus choisi</span>
              )}
              <h3 className="mt-4 text-2xl font-bold">{plan.title}</h3>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <p className="mt-6 text-4xl font-black text-gray-900">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block rounded-2xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-black">
                Parler à un expert
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
