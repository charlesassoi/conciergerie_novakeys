'use client';

import { useState } from 'react';
import { clean, submitLead } from './formUtils';

const initialForm = { fullName: '', email: '', phone: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.website) return;

    setIsSubmitting(true);
    setStatus('Envoi en cours...');

    try {
      await submitLead({
        fullName: clean(form.fullName),
        email: clean(form.email).toLowerCase(),
        phone: clean(form.phone),
        message: clean(form.message),
        source: 'contact-form',
      });

      setStatus('Message envoyé. Nous revenons vers vous rapidement.');
      setForm(initialForm);
    } catch {
      setStatus('Une erreur est survenue lors de l’envoi. Réessayez ou contactez-nous directement.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Parlons de votre bien</h2>
          <p className="mt-4 max-w-xl text-gray-300">
            Confiez-nous votre logement et recevez une réponse rapide pour estimer son potentiel locatif.
          </p>
          <div className="mt-8 space-y-3 text-gray-200">
            <p>📍 Paris, Île-de-France</p>
            <p>📞 01 80 00 00 00</p>
            <p>✉️ contact@novakeys.fr</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 text-gray-900 shadow-xl">
          <input
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Nom complet
              <input className="rounded-2xl border border-gray-300 px-4 py-3" autoComplete="name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Email
              <input className="rounded-2xl border border-gray-300 px-4 py-3" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Téléphone
              <input className="rounded-2xl border border-gray-300 px-4 py-3" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </label>
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Votre message
              <textarea className="min-h-32 rounded-2xl border border-gray-300 px-4 py-3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className="mt-4 rounded-2xl bg-brand-500 px-6 py-4 font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
          </button>
          {status && <p className="mt-4 text-sm text-gray-600" role="status" aria-live="polite">{status}</p>}
        </form>
      </div>
    </section>
  );
}
