export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container-page flex flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <p>© 2026 Nova Keys — Conciergerie immobilière</p>
        <div className="flex gap-6">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">CGV</a>
        </div>
      </div>
    </footer>
  );
}
