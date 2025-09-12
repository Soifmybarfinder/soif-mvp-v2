import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');

  // Initialize Google Analytics
  useEffect(() => {
    const trackingId = 'G-504861389';
    
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);
    
    // Configure Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId);
    
    // Track initial page view
    gtag('event', 'page_view', {
      page_title: 'Splash Page',
      page_location: window.location.href
    });
  }, []);

  // Track page changes
  const trackPageView = (pageName) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  // Track custom events
  const trackEvent = (action, category = 'User Interaction') => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: 'SOIF MVP'
      });
    }
  };

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
      <p style={{fontSize: '16px', marginBottom: '40px'}}>
        L'appli qui t'aide à trouver ton bar idéal !
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.2)', 
        padding: '8px 20px', 
        borderRadius: '20px', 
        marginBottom: '40px'
      }}>
        🚀 Station F Fighter Edition
      </div>
      <button 
        onClick={() => {
          trackEvent('splash_to_home', 'Navigation');
          trackPageView('Home Page');
          setCurrentPage('home');
        }}
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
        <h2>🚀 MVP Fonctionnel avec Analytics !</h2>
        <p>✅ Splash page violette</p>
        <p>✅ Navigation fonctionnelle</p>
        <p>✅ Design SOIF authentique</p>
        <p>✅ Google Analytics intégré</p>
        <p>✅ Métriques temps réel</p>
        <p>✅ Prêt pour Station F</p>
      </div>

      <div style={{marginTop: '20px'}}>
        <h3>📊 Test des Métriques :</h3>
        <button 
          onClick={() => trackEvent('test_button_clicked', 'Engagement')}
          style={{
            background: '#10B981',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          Test Analytics
        </button>
        
        <button 
          onClick={() => trackEvent('feature_explored', 'User Journey')}
          style={{
            background: '#F59E0B',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            margin: '5px',
            cursor: 'pointer'
          }}
        >
          Explorer
        </button>
      </div>

      <button 
        onClick={() => {
          trackEvent('back_to_splash', 'Navigation');
          trackPageView('Splash Page');
          setCurrentPage('splash');
        }}
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
