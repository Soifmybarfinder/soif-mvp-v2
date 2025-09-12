import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');

  const SplashPage = () => (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6B46C1, #7C3AED, #8B5CF6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{fontSize: '60px', marginBottom: '20px'}}>🍷</div>
      <h1 style={{fontSize: '48px', marginBottom: '10px'}}>SOIF</h1>
      <p style={{fontSize: '18px', marginBottom: '40px'}}>My BarFinder</p>
      <p style={{fontSize: '16px', marginBottom: '40px'}}>L'appli qui t'aide à trouver ton bar idéal !</p>
      <div style={{background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '20px', marginBottom: '40px'}}>
        🚀 Station F Fighter Edition
      </div>
      <button 
        onClick={() => setCurrentPage('home')}
        style={{
          background: 'white',
          color: '#6B46C1',
          border: 'none',
          padding: '15px 60px',
          borderRadius: '25px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Entrer
      </button>
    </div>
  );

  const HomePage = () => (
    <div style={{padding: '20px', background: '#f9fafb', minHeight: '100vh'}}>
      <h1 style={{color: '#6B46C1', fontSize: '24px'}}>🍷 SOIF BarFinder</h1>
      <p>Station F Fighter Edition</p>
      
      <div style={{marginTop: '30px'}}>
        <h2>🚀 MVP Fonctionnel !</h2>
        <p>✅ Splash page</p>
        <p>✅ Navigation</p>
        <p>✅ Design SOIF</p>
        <p>✅ Déployé sur Vercel</p>
      </div>

      <button 
        onClick={() => setCurrentPage('splash')}
        style={{
          background: '#6B46C1',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Retour Splash
      </button>
    </div>
  );

  return (
    <div style={{maxWidth: '400px', margin: '0 auto'}}>
      {currentPage === 'splash' && <SplashPage />}
      {currentPage === 'home' && <HomePage />}
    </div>
  );
}

export default App;
