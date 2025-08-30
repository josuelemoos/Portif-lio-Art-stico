import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  // Ícones simples em SVG (substitutos do lucide-react)
  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  // Dados do artista
  const artistInfo = {
    name: "Josué Lemos",
    title: "Artista Digital",
    bio: "Josué Lemos Mesquita nasceu em 2004, desde criança foi o desenhista da turma. Ao crescer levou o hobby consigo, incentivado por sua Mãe, Valda, que pintava panos de pratos, e aos 20 anos se tornou professor de desenho no projeto RascunhosUFC",
    location: "Ceará, Brasil",
    email: "josuemesquita29@gmail.com",
    instagram: "@josuelemoos"
  };

  // Dados sobre as obras
  const artworks = [
    {
      id: 1,
      title: "Antinua",
      year: "2025",
      medium: "Pintura Digital",
      dimensions: "A4",
      description: "Personagem criada para um RPG D&D chamada Antinua, uma alta elfa",
      image: "https://ibb.co/fVTjLJkW"
    },
    {
      id: 2,
      title: "Rupestro",
      year: "2025",
      medium: "Pintura Digital",
      dimensions: "A4",
      description: "Personagem criado para um RPG D&D chamado Rupestro, uma Mago Tiefling",
      image: "https://ibb.co/2YSNQNPK"
    },
    {
      id: 3,
      title: "Paisagem inpirada em LOTR",
      year: "2024",
      medium: "Pintura digital",
      dimensions: "A4",
      description: "titulo ta auto explicativo",
      image: "https://ibb.co/4nQ8vBHH"
    },
    {
      id: 4,
      title: "Spaw",
      year: "2024",
      medium: "Arte digital ",
      dimensions: "A4",
      description: "Grande spaw.",
      image: "https://ibb.co/zHL74tsc"
    },
    {
      id: 5,
      title: "Horizontes Perdidos",
      year: "2022",
      medium: "pintura digital ",
      dimensions: "110 x 80 cm",
      description: " serie de tentativas de pintura no inicio do digital",
      image: "https://ibb.co/nqqCY6Nc"
    },
    /*{
      id: 6,
      title: "Reflexos Interiores",
      year: "2024",
      medium: "Técnica mista",
      dimensions: "90 x 90 cm",
      description: "Autoretrato abstrato que explora os múltiplos aspectos da identidade feminina. Espelhos fragmentados e cores complementares criam um diálogo entre o interno e o externo.",
      image: "/public/imagens/leticia.png"
    }*/
  ];

  const HomePage = () => {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Hero Section */}
        <div style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 10
          }}></div>
          <div style={{ position: 'absolute', inset: '0' }}>
            <img 
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a04?w=1920&h=1080&fit=crop" 
              alt="Arte" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            position: 'relative',
            zIndex: 20,
            textAlign: 'center',
            color: 'white',
            padding: '0 24px'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '300',
              marginBottom: '16px',
              letterSpacing: '0.05em'
            }}>
              {artistInfo.name}
            </h1>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: '300',
              opacity: 0.9,
              marginBottom: '32px'
            }}>
              {artistInfo.title}
            </p>
            <button 
              onClick={() => setCurrentPage('gallery')}
              style={{
                padding: '12px 32px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '25px',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              Explorar Obras
            </button>
          </div>
        </div>

        {/* About Section */}
        <div style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '80px 24px',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="https://i.ibb.co/mf5G8fT/eu.jpg" 
              alt="Artista" 
              style={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              marginBottom: '24px',
              color: '#1e293b'
            }}>
              Sobre a Artista
            </h2>
            <p style={{
              color: '#64748b',
              lineHeight: '1.7',
              marginBottom: '32px',
              fontSize: '18px'
            }}>
              {artistInfo.bio}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
                <MapPinIcon />
                <span style={{ marginLeft: '12px' }}>{artistInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
                <MailIcon />
                <span style={{ marginLeft: '12px' }}>{artistInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
                <InstagramIcon />
                <span style={{ marginLeft: '12px' }}>{artistInfo.instagram}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GalleryPage = () => {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <div style={{ padding: '48px 0' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '32px',
            color: '#1e293b',
            padding: '0 24px'
          }}>
            Exposição Virtual
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#64748b',
            marginBottom: '64px',
            padding: '0 24px'
          }}>
            Deslize horizontalmente para explorar as obras
          </p>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              paddingBottom: '24px',
              padding: '0 24px',
              gap: '32px',
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}>
              {artworks.map((artwork) => (
                <div 
                  key={artwork.id}
                  style={{
                    flexShrink: 0,
                    width: '320px',
                    cursor: 'pointer',
                    scrollSnapAlign: 'start',
                    transition: 'transform 0.5s ease, boxShadow 0.5s ease'
                  }}
                  onClick={() => setSelectedArtwork(artwork)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white'
                  }}>
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        style={{ width: '100%', height: '384px', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: '0',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
                      >
                        <div style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          right: '0',
                          padding: '24px',
                          color: 'white'
                        }}>
                          <h3 style={{
                            fontSize: '20px',
                            fontWeight: '500',
                            marginBottom: '4px'
                          }}>
                            {artwork.title}
                          </h3>
                          <p style={{
                            fontSize: '14px',
                            opacity: 0.9
                          }}>
                            {artwork.year} • {artwork.medium}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '24px', padding: '0 8px' }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '500',
                      color: '#1e293b',
                      marginBottom: '8px'
                    }}>
                      {artwork.title}
                    </h3>
                    <p style={{
                      color: '#64748b',
                      fontSize: '14px',
                      marginBottom: '8px'
                    }}>
                      {artwork.medium}
                    </p>
                    <p style={{
                      color: '#94a3b8',
                      fontSize: '14px'
                    }}>
                      {artwork.dimensions} • {artwork.year}
                    </p>
                  </div>
                </div>
              ))}
              
              <div style={{ flexShrink: 0, width: '24px' }}></div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32px',
              gap: '8px'
            }}>
              {artworks.map((_, index) => (
                <div 
                  key={index} 
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#cbd5e1',
                    borderRadius: '50%'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '0 24px'
          }}>
            <p style={{
              color: '#94a3b8',
              fontSize: '14px'
            }}>
              💡 Toque em uma obra para ver detalhes completos
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ArtworkModal = ({ artwork, onClose }: { artwork: any, onClose: () => void }) => {
    return (
      <div style={{
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}>
        <div style={{
          position: 'relative',
          maxWidth: '1152px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <XIcon />
          </button>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
            gap: '32px',
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={artwork.image} 
                alt={artwork.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: '400px'
                }}
              />
            </div>
            
            <div style={{ padding: '32px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '300',
                marginBottom: '16px',
                color: '#1e293b'
              }}>
                {artwork.title}
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px',
                color: '#64748b'
              }}>
                <p><span style={{ fontWeight: '500' }}>Ano:</span> {artwork.year}</p>
                <p><span style={{ fontWeight: '500' }}>Técnica:</span> {artwork.medium}</p>
                <p><span style={{ fontWeight: '500' }}>Dimensões:</span> {artwork.dimensions}</p>
              </div>
              
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
                <h3 style={{
                  fontWeight: '500',
                  marginBottom: '12px',
                  color: '#1e293b'
                }}>
                  Sobre a Obra
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>
                  {artwork.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Navigation = () => {
    return (
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 
            onClick={() => setCurrentPage('home')}
            style={{
              fontSize: '1.5rem',
              fontWeight: '300',
              cursor: 'pointer',
              color: '#1e293b',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#64748b'}
            onMouseOut={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            {artistInfo.name}
          </h1>
          
          <div style={{ display: 'flex', gap: '32px' }}>
            <button 
              onClick={() => setCurrentPage('home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === 'home' ? '#1e293b' : '#64748b',
                fontWeight: currentPage === 'home' ? '500' : '400',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#64748b'}
              onMouseOut={(e) => e.currentTarget.style.color = currentPage === 'home' ? '#1e293b' : '#64748b'}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentPage('gallery')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === 'gallery' ? '#1e293b' : '#64748b',
                fontWeight: currentPage === 'gallery' ? '500' : '400',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#64748b'}
              onMouseOut={(e) => e.currentTarget.style.color = currentPage === 'gallery' ? '#1e293b' : '#64748b'}
            >
              Galeria
            </button>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .flex.overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          .flex.overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `
      }} />
      
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'gallery' && <GalleryPage />}
      
      {selectedArtwork && (
        <ArtworkModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      )}
    </div>
  );
};

export default App;