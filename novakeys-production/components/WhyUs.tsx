const items = [
  'Stratégie de rentabilité pilotée par la donnée',
  'Expérience premium pour améliorer les avis voyageurs',
  'Interlocuteur unique pour le propriétaire',
  'Processus standardisés et suivi opérationnel',
  'Prestataires qualifiés pour ménage et maintenance',
  'Reporting simple sur les revenus et les séjours',
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="section-title">Pourquoi choisir notre conciergerie ?</h2>
          <p className="section-subtitle">
            Notre objectif n'est pas seulement de gérer votre bien, mais de construire une machine opérationnelle rentable, propre et rassurante.
          </p>
          <div className="mt-8 grid gap-4">
            {items.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 p-5 text-gray-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-brand-900 p-10 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Owner dashboard vision</p>
          <h3 className="mt-4 text-3xl font-bold">Ce que le propriétaire doit voir</h3>
          <ul className="mt-8 space-y-4 text-brand-50">
            <li>• Revenus mensuels par bien</li>
            <li>• Taux d'occupation</li>
            <li>• Réservations à venir</li>
            <li>• Incidents en cours</li>
            <li>• Avis clients</li>
            <li>• Historique d'interventions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
