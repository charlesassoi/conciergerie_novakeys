import {
  BedDouble,
  Brush,
  CalendarDays,
  KeyRound,
  MessageCircle,
  Wrench
} from "lucide-react";

const services = [
  {
    title: 'Création et optimisation des annonces',
    description: 'Rédaction persuasive, shooting, SEO plateformes et stratégie tarifaire.',
    icon: BedDouble,
  },
  {
    title: 'Gestion des réservations',
    description: 'Réponses rapides, qualification des voyageurs et suivi des séjours.',
    icon: CalendarDays,
  },
  {
    title: 'Accueil et remise des clés',
    description: 'Check-in, check-out, consignes d’arrivée et accompagnement.',
    icon: KeyRound,
  },
  {
    title: 'Ménage hôtelier',
    description: 'Nettoyage professionnel, blanchisserie et contrôle qualité.',
    icon: Brush,
  },
  {
    title: 'Support voyageur 7j/7',
    description: 'Assistance avant, pendant et après séjour.',
    icon: MessageCircle,
  },
  {
    title: 'Maintenance et interventions',
    description: 'Petites réparations, coordination prestataires et urgences.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-page">
        <h2 className="section-title">Nos services de conciergerie</h2>
        <p className="section-subtitle">
          Une offre complète pour les propriétaires qui veulent déléguer la gestion opérationnelle tout en maximisant la rentabilité.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-3xl border border-gray-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
