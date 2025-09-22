import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function DevenirSocietaire() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    try {
      // Envoi vers ton Google Script pour suivi interne
      const response = await fetch('https://script.google.com/macros/s/AKfycby1t6ZzRKyQG9AX-MmZ7384PaM9wZtJRLLhSx0JtF5mryZf-eG9NoFYaYHWx_8oYuxtpA/exec', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Erreur lors de l’envoi du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Erreur lors de l’envoi du formulaire. Veuillez réessayer.');
      console.error(error);
    }
  };

  return (
    <Layout title="Devenir Sociétaire" description="Prenez des parts de notre coopérative TiBillet">
      <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center' }}>Devenir Sociétaire</h1>

        <p>Vous pouvez désormais rejoindre <strong>TiBillet</strong> en souscrivant des parts sociales et soutenir le développement de notre coopérative 🎉</p>

        <h2>Comment ça marche ?</h2>
        <ol>
          <li><strong>Téléchargez le bon de souscription :</strong> <a href="/chemin/vers/Bon_de_souscription.pdf" target="_blank" style={{ color: '#0078d4', fontWeight: 'bold' }}>Télécharger le PDF</a> et remplissez-le.</li>
          <li><strong>Effectuez votre paiement :</strong> par virement bancaire ou via Stripe.</li>
	  <li><strong>Renvoyer-nous le pdf complété et signé à l'adresse suivante :</strong>  contact@tibillet.re</li>
          <li><strong>Répondez au formulaire ci-dessous</strong> pour faciliter notre suivi interne.</li>
          <li><strong>Vous recevrez un certificat de parts sociales</strong> confirmant votre statut de sociétaire.</li>
        </ol>

        <h2>Par virement bancaire</h2>
        <div style={{
          border: '1px solid var(--ifm-color-emphasis-200)',
          padding: '1rem',
          borderRadius: '6px',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          color: 'var(--ifm-color-emphasis-900)',
          marginBottom: '2rem' // <-- espace avant Stripe
        }}>
          <ul>
            <li><strong>IBAN :</strong> FR76 1695 8000 0129 9207 8155 587</li>
            <li><strong>BIC :</strong> QNTOFRP1XXX</li>
            <li><strong>Titulaire :</strong> Coopérative Code Commun Coop</li>
          </ul>
        </div>

        <h2>Paiement en ligne (Stripe)</h2>
        <p>Vous pouvez également payer directement en ligne :</p>
        <a href="https://donate.stripe.com/28o6oPg8Ad7T3Sg5kk" target="_blank">
          <button style={{
            padding: '0.75rem',
            backgroundColor: '#6772e5',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Payer avec Stripe
          </button>
        </a>

        {/* Espace entre Stripe et formulaire */}
        <div style={{ marginTop: '2rem' }} />

        <h2>Formulaire rapide (pour nous faciliter la vie, merci !)</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <input name="nom" placeholder="Nom" required style={{ padding: '0.5rem' }} />
            <input name="prenom ou structure" placeholder="Prénom ou nom de votre structure" required style={{ padding: '0.5rem' }} />
            <input name="email" type="email" placeholder="Email" required style={{ padding: '0.5rem' }} />
            <input name="parts" type="number" placeholder="Nombre de parts" required min="1" style={{ padding: '0.5rem' }} />
            <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0078d4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Envoyer
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold', color: 'green' }}>
            Merci pour votre souscription ! Nous avons bien reçu vos informations.
          </div>
        )}

        {/* Espace après formulaire avant Pourquoi devenir sociétaire */}
        <div style={{ marginTop: '2rem' }} />

        <h2>Pourquoi devenir sociétaire ?</h2>
        <ul>
          <li>Soutenir le développement d’une solution coopérative de billetterie et cashless</li>
          <li>Participer à une gouvernance démocratique (<strong>1 personne = 1 voix</strong>)</li>
          <li>Contribuer à renforcer l’indépendance de l’outil au service des acteurs culturels et commerciaux</li>
        </ul>

        <p>⚠️ La valeur nominale d’une part est <strong>1 €</strong>. Vous choisissez librement le nombre de parts que vous souhaitez prendre.</p>
      </div>
    </Layout>
  );
}
