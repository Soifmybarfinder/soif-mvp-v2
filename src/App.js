import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');
  const [searchFilters, setSearchFilters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Données des bars de Montpellier
  const bars = [
    { id: 1, name: "Le Broc Bar", quartier: "Écusson", type: "Bar à cocktails", ambiance: "Cosy", rating: 4.5, terrasse: true },
    { id: 2, name: "Palace Beer", quartier: "Comédie", type: "Pub", ambiance: "Festif", rating: 4.2, terrasse: false },
    { id: 3, name: "Comptoir des Arts", quartier: "Beaux-Arts", type: "Bar à vins", ambiance: "Chic", rating: 4.6, terrasse: true },
    { id: 4, name: "Black Sheep", quartier: "Antigone", type: "Pub Irlandais", ambiance: "Décontracté", rating: 4.3, terrasse: true }
  ];

  // Filtres disponibles
  const filterCategories = {
    "Quartiers": ["Écusson", "Comédie", "Beaux-Arts", "Antigone", "Port Marianne"],
    "Type de bar": ["Bar à cocktails", "Pub", "Bar à vins", "Pub Irlandais", "Brasserie"],
    "Ambiance": ["Cosy", "Festif", "Chic", "Décontracté", "Romantique"],
    "Caractéristiques": ["Terrasse", "WiFi", "Happy Hour", "Jeux de société", "Musique live"]
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
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        fontSize: '80px',
        marginBottom: '20px',
        animation: 'pulse 2s infinite'
      }}>🍷</div>
      
      <h1 style={{
        fontSize: '56px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>SOIF</h1>
      
      <p style={{
        fontSize: '20px',
        marginBottom: '30px',
        opacity: 0.9
      }}>My BarFinder</p>
      
      <p style={{
        fontSize: '18px',
        marginBottom: '30px',
        maxWidth: '300px',
        lineHeight: '1.4'
      }}>
        L'appli qui t'aide à trouver ton bar idéal à Montpellier !
      </p>
      
      <div style={{
        background: 'rgba(255,255,255,0.2)',
        padding: '10px 25px',
        borderRadius: '25px',
        marginBottom: '40px',
        fontSize: '16px',
        backdropFilter: 'blur(10px)'
      }}>
        🚀 Station F Fighter Edition
      </div>
      
      <button 
        onClick={() => setCurrentPage('home')}
        style={{
          background: 'white',
          color: '#6B46C1',
          border: 'none',
          padding: '18px 70px',
          borderRadius: '30px',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        Entrer
      </button>
      
      <p style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '14px',
        opacity: '0.7'
      }}>
        Montpellier • 750+ bars référencés
      </p>
    </div>
  );

  const HomePage = () => (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #6B46C1, #7C3AED)',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '24px', margin: '0'}}>🍷 SOIF BarFinder</h1>
        <p style={{margin: '5px 0', opacity: '0.9'}}>Station F Fighter Edition</p>
      </div>

      {/* Navigation Modules */}
      <div style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px'
      }}>
        {[
          { name: 'Rechercher', icon: '🔍', page: 'search', color: '#EF4444' },
          { name: 'Explorer', icon: '🗺️', page: 'explore', color: '#F59E0B' },
          { name: 'Favoris', icon: '❤️', page: 'favorites', color: '#EF4444' },
          { name: 'Scanner', icon: '📱', page: 'scanner', color: '#8B5CF6' },
          { name: 'Événements', icon: '🎉', page: 'events', color: '#10B981' },
          { name: 'Profil', icon: '👤', page: 'profile', color: '#6366F1' }
        ].map((module) => (
          <button
            key={module.name}
            onClick={() => setCurrentPage(module.page)}
            style={{
              background: 'white',
              border: `3px solid ${module.color}`,
              borderRadius: '15px',
              padding: '25px 15px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{fontSize: '32px', marginBottom: '8px'}}>{module.icon}</div>
            <div style={{color: '#1f2937', fontWeight: '600'}}>{module.name}</div>
          </button>
        ))}
      </div>

      {/* Bars récents */}
      <div style={{padding: '0 20px 20px'}}>
        <h3 style={{color: '#374151', marginBottom: '15px'}}>🔥 Bars Populaires</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {bars.slice(0, 3).map(bar => (
            <div key={bar.id} style={{
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{fontWeight: '600', color: '#1f2937'}}>{bar.name}</div>
                <div style={{fontSize: '14px', color: '#6b7280'}}>{bar.quartier} • {bar.type}</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div>⭐ {bar.rating}</div>
                {bar.terrasse && <div style={{fontSize: '12px'}}>🌤️ Terrasse</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setCurrentPage('splash')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#6B46C1',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer'
        }}
      >
        🏠 Accueil
      </button>
    </div>
  );

  const SearchPage = () => (
    <div style={{minHeight: '100vh', background: '#f8fafc', padding: '20px'}}>
      <div style={{
        background: 'linear-gradient(135deg, #6B46C1, #7C3AED)',
        color: 'white',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{margin: '0'}}>🔍 Recherche Avancée</h2>
        <p style={{margin: '10px 0 0', opacity: '0.9'}}>20+ filtres pour trouver ton bar idéal</p>
      </div>

      {/* Barre de recherche */}
      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <input 
          type="text"
          placeholder="Rechercher un bar..."
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Catégories de filtres */}
      <div>
        <h3 style={{color: '#374151', marginBottom: '15px'}}>📂 Catégories</h3>
        {Object.entries(filterCategories).map(([category, items]) => (
          <details key={category} style={{
            background: 'white',
            marginBottom: '10px',
            borderRadius: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <summary style={{
              padding: '15px',
              cursor: 'pointer',
              fontWeight: '600',
              color: '#374151'
            }}>
              {category} ({items.length})
            </summary>
            <div style={{padding: '0 15px 15px'}}>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {items.map(item => (
                  <span key={item} style={{
                    background: '#f3f4f6',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* Résultats */}
      <div style={{marginTop: '20px'}}>
        <h3 style={{color: '#374151'}}>📍 {bars.length} bars trouvés</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {bars.map(bar => (
            <div key={bar.id} style={{
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div style={{fontWeight: '600', color: '#1f2937'}}>{bar.name}</div>
                  <div style={{fontSize: '14px', color: '#6b7280'}}>{bar.quartier} • {bar.ambiance}</div>
                </div>
                <div style={{textAlign: 'right'}}>
                  <div>⭐ {bar.rating}</div>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}>
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setCurrentPage('home')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#6B46C1',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer'
        }}
      >
        🏠 Accueil
      </button>
    </div>
  );

  const GenericPage = ({ title, icon, content }) => (
    <div style={{minHeight: '100vh', background: '#f8fafc', padding: '20px'}}>
      <div style={{
        background: 'linear-gradient(135deg, #6B46C1, #7C3AED)',
        color: 'white',
        padding: '20px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <div style={{fontSize: '48px', marginBottom: '10px'}}>{icon}</div>
        <h2 style={{margin: '0'}}>{title}</h2>
        <p style={{margin: '10px 0 0', opacity: '0.9'}}>Station F Fighter Edition</p>
      </div>

      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        {content}
      </div>

      <button 
        onClick={() => setCurrentPage('home')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#6B46C1',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer'
        }}
      >
        🏠 Accueil
      </button>
    </div>
  );

  // Pages avec contenu spécifique
  const pageContent = {
    explore: {
      title: "Explorer Montpellier",
      icon: "🗺️",
      content: (
        <div>
          <h3>Découverte par catégories</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '20px'}}>
            {["Par Quartier", "Par Ambiance", "Par Cuisine", "Suggestions"].map(cat => (
              <div key={cat} style={{
                background: '#f3f4f6',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                {cat}
              </div>
            ))}
          </div>
        </div>
      )
    },
    favorites: {
      title: "Mes Favoris",
      icon: "❤️",
      content: (
        <div>
          <p>Tes bars préférés t'attendent ici !</p>
          <div style={{marginTop: '20px'}}>
            {favorites.length === 0 ? (
              <p style={{color: '#6b7280'}}>Aucun favori pour le moment.<br/>Explore et ajoute tes bars préférés !</p>
            ) : (
              <div>Favoris: {favorites.length}</div>
            )}
          </div>
        </div>
      )
    },
    scanner: {
      title: "Scanner QR",
      icon: "📱",
      content: (
        <div>
          <p>Scanne les menus, étiquettes et QR codes des bars</p>
          <div style={{
            border: '3px dashed #6B46C1',
            padding: '40px',
            borderRadius: '15px',
            marginTop: '20px'
          }}>
            <div style={{fontSize: '64px', marginBottom: '15px'}}>📷</div>
            <p>Fonctionnalité de scan<br/>en développement</p>
          </div>
        </div>
      )
    },
    events: {
      title: "Événements",
      icon: "🎉",
      content: (
        <div>
          <p>Découvre les événements dans les bars de Montpellier</p>
          <div style={{marginTop: '20px'}}>
            <div style={{background: '#f3f4f6', padding: '15px', borderRadius: '10px', marginBottom: '10px'}}>
              🎵 Soirée Jazz - Le Broc Bar - Ce soir 20h
            </div>
            <div style={{background: '#f3f4f6', padding: '15px', borderRadius: '10px', marginBottom: '10px'}}>
              🍺 Happy Hour - Palace Beer - 17h-19h
            </div>
            <div style={{background: '#f3f4f6', padding: '15px', borderRadius: '10px'}}>
              🎤 Karaoké - Black Sheep - Vendredi 21h
            </div>
          </div>
        </div>
      )
    },
    profile: {
      title: "Mon Profil",
      icon: "👤",
      content: (
        <div>
          <div style={{fontSize: '64px', marginBottom: '15px'}}>👤</div>
          <h3>Sophie L.</h3>
          <p>Membre depuis mars 2025</p>
          <div style={{marginTop: '20px', textAlign: 'left'}}>
            <p>📊 Statistiques:</p>
            <p>• Bars visités: 12</p>
            <p>• Avis donnés: 8</p>
            <p>• Favoris: {favorites.length}</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div style={{maxWidth: '400px', margin: '0 auto', background: 'white', minHeight: '100vh'}}>
      {currentPage === 'splash' && <SplashPage />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchPage />}
      {pageContent[currentPage] && (
        <GenericPage 
          title={pageContent[currentPage].title}
          icon={pageContent[currentPage].icon}
          content={pageContent[currentPage].content}
        />
      )}
    </div>
  );
}

export default App;
