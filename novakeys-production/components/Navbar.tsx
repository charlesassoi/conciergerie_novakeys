export default function Navbar() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Pourquoi nous', href: '#pourquoi-nous' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between">
        <div>
          <span className="text-xl font-extrabold text-brand-900">Nova Keys</span>
          <p className="text-xs text-gray-500">Conciergerie immobilière</p>
        </div>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition hover:text-brand-500">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Demander un rappel
        </a>
      </nav>
    </header>
  );
}
