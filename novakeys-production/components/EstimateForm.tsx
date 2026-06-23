'use client';

import { useState } from 'react';
import { clean, submitLead } from './formUtils';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  propertyType: '',
  rooms: '',
  message: '',
  website: '',
};

export default function EstimateForm() {
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
        city: clean(form.city),
        propertyType: clean(form.propertyType),
        rooms: clean(form.rooms),
        message: clean(form.message),
        source: 'estimate-form',
      });

      setStatus('Demande envoyée avec succès. Nous vous recontactons rapidement.');
      setForm(initialForm);
    } catch {
      setStatus("Impossible d'envoyer la demande pour le moment. Réessayez ou contactez-nous directement.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="estimation" className="bg-gray-50 py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Obtenez une estimation de votre bien</h2>
          <p className="section-subtitle">
            Dites-nous où se situe votre logement et nous vous aidons à estimer son potentiel en location courte durée.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-lg">
          <input
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
          <div className="grid gap-4 md:grid-cols-2">
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
              Ville
              <input className="rounded-2xl border border-gray-300 px-4 py-3" autoComplete="address-level2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Type de bien
              <input className="rounded-2xl border border-gray-300 px-4 py-3" value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })} />
            </label>
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Nombre de pièces
              <input className="rounded-2xl border border-gray-300 px-4 py-3" inputMode="numeric" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-medium text-gray-700">
            Parlez-nous de votre bien
            <textarea className="min-h-32 w-full rounded-2xl border border-gray-300 px-4 py-3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit" disabled={isSubmitting} className="mt-4 rounded-2xl bg-brand-500 px-6 py-4 font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Envoi...' : 'Recevoir mon estimation'}
          </button>
          {status && <p className="mt-4 text-sm text-gray-600" role="status" aria-live="polite">{status}</p>}
        </form>
      </div>
    </section>
  );
}
