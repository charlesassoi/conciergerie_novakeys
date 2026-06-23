const questions = [
  {
    q: 'Travaillez-vous uniquement avec Airbnb ?',
    a: 'Non. La structure peut être étendue à plusieurs plateformes et à un PMS centralisé.',
  },
  {
    q: 'Comment êtes-vous rémunérés ?',
    a: 'Principalement via une commission sur les revenus locatifs encaissés.',
  },
  {
    q: 'Puis-je suivre mes performances ?',
    a: 'Oui. L’architecture prévoit un futur espace propriétaire avec reporting.',
  },
  {
    q: 'Gérez-vous le ménage et la maintenance ?',
    a: 'Oui. Ce sont deux briques essentielles de l’exploitation opérationnelle.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container-page">
        <h2 className="section-title">Questions fréquentes</h2>
        <div className="mt-10 grid gap-4">
          {questions.map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">{item.q}</h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
