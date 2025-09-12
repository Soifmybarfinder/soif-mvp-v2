') => {
  const [friendsNearby, setFriendsNearby] = useState([]);

  const bars = [
    {
      id: 1,
      name: "Le Brewster Café",
      address: "12 Rue de l'Université, Montpellier",
      rating: 4.5,
      distance: "0.3 km",
      tags: ["startup-friendly", "wifi", "terrasse", "afterwork"],
      price: "€€",
      hours: "Ouvert jusqu'à 23h",
      friends: ["Sophie", "Marc"],
      currentGuests: 8
    },
    {
      id: 2,
      name: "Station Cocktails",
      address: "25 Avenue de la Gare, Montpellier",
      rating: 4.7,
      distance: "0.5 km",
      tags: ["cocktails", "entrepreneur", "tendance"],
      price: "€€€",
      hours: "Ouvert jusqu'à 2h",
      friends: ["Julie", "Thomas"],
      currentGuests: 15
    }
  ];

  const friends = [
    { id: 1, name: "Sophie Martin", status: "En ligne", location: "Le Brewster Café", avatar: "👩", type: "Entrepreneur" },
    { id: 2, name: "Marc Dubois", status: "En ligne", location: "Station Cocktails", avatar: "👨", type: "Développeur" }
  ];

  const filterCategories = {
    "Caractéristiques": ["Terrasse", "WiFi", "Happy Hour"],
    "Quartiers": ["Écusson", "Antigone", "Comédie"],
    "Prix": ["Pas cher", "Modéré", "Luxe"],
    "Ambiance": ["Cosy", "Tendance", "Afterwork"]
  };

  useEffect(() => {
    setFriendsNearby(friends.filter(f => f.status === "En ligne"));
    
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const SplashPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <div className="mb-8">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-white mx-auto">
            <path d="M20 10 C20 25, 30 35, 40 35 C50 35, 60 25, 60 10 Z" fill="currentColor"/>
            <rect x="38" y="35" width="4" height="25" fill="currentColor"/>
            <rect x="30" y="60" width="20" height="4" rx="2" fill="currentColor"/>
            <circle cx="40" cy="22" r="3" fill="white" opacity="0.8"/>
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold mb-2">SOIF</h1>
        <div className="text-xl tracking-widest opacity-90 mb-8">M Y  B A R F I N D E R</div>
        
        <p className="text-lg opacity-80 mb-12">L'appli qui t'aide à trouver ton bar idéal !</p>
        
        <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 mb-8">
          <span className="text-sm">🚀 Station F Fighter Edition</span>
        </div>
        
        <button 
          onClick={() => setCurrentPage('home')}
          className="w-64 bg-white text-purple-700 py-4 rounded-full font-semibold text-lg"
        >
          Entrer
        </button>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🍷</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-purple-600">SOIF</h1>
            <p className="text-gray-600 text-sm">My BarFinder</p>
          </div>
        </div>
        <Bell size={24} className="text-gray-600" />
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 mb-6 text-white">
        <h2 className="text-lg font-semibold mb-2">🚀 Station F Fighter Edition</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{friendsNearby.length}</div>
            <div className="text-sm opacity-90">Entrepreneurs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{bars.length}</div>
            <div className="text-sm opacity-90">Bars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm opacity-90">Événements</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => setCurrentPage('search')}
          className="bg-white border border-purple-200 rounded-lg p-4"
        >
          <Search className="text-purple-600 mx-auto mb-2" size={24} />
          <div className="font-semibold text-purple-800">Recherche</div>
        </button>
        <button 
          onClick={() => setCurrentPage('social')}
          className="bg-white border border-blue-200 rounded-lg p-4"
        >
          <Users className="text-blue-600 mx-auto mb-2" size={24} />
          <div className="font-semibold text-blue-800">Social</div>
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">🌟 Réseau entrepreneur</h3>
        <div className="space-y-3">
          {friendsNearby.map(friend => (
            <div key={friend.id} className="flex items-center space-x-3 bg-white rounded-lg p-3">
              <div className="text-2xl">{friend.avatar}</div>
              <div className="flex-1">
                <div className="font-medium">{friend.name}</div>
                <div className="text-sm text-gray-600">📍 {friend.location}</div>
              </div>
              <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                Rejoindre
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SearchPage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un bar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 border rounded-lg bg-white"
          >
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {bars.map(bar => (
          <div key={bar.id} className="bg-white border rounded-lg p-4">
            <h4 className="font-semibold text-lg">{bar.name}</h4>
            <p className="text-gray-600 text-sm">{bar.address}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <span className="flex items-center">
                <Star className="text-yellow-500 mr-1" size={16} />
                {bar.rating}
              </span>
              <span>{bar.distance}</span>
              <span className="text-purple-600">{bar.price}</span>
            </div>
            
            {bar.friends && (
              <div className="mt-3 p-2 bg-blue-50 rounded">
                <div className="text-sm text-blue-800">
                  👥 {bar.friends.join(', ')} sont ici
                </div>
              </div>
            )}
            
            <button className="w-full bg-purple-600 text-white py-2 rounded mt-3">
              Voir détails
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const SocialPage = () => (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">🚀 Réseau</h2>
      <div className="space-y-3">
        {friends.map(friend => (
          <div key={friend.id} className="bg-white rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{friend.avatar}</div>
              <div>
                <div className="font-medium">{friend.name}</div>
                <div className="text-sm text-gray-600">{friend.type}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      {[
        { icon: Home, label: 'Accueil', page: 'home' },
        { icon: Search, label: 'Recherche', page: 'search' },
        { icon: Users, label: 'Social', page: 'social' }
      ].map(({ icon: Icon, label, page }) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`flex flex-col items-center p-2 ${currentPage === page ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Icon size={24} />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen relative">
      {currentPage === 'splash' && <SplashPage />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchPage />}
      {currentPage === 'social' && <SocialPage />}
      
      {currentPage !== 'splash' && <BottomNav />}
    </div>
  );
};

export default SOIFApp;
