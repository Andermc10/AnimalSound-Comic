import { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Translator from './components/Translator';
import Chapter4 from './components/Chapter4';


export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mainContainerRef = useRef();
  const scrollTimeoutRef = useRef();

  const sections = [
    { 
      id: 'hero',
      component: HeroSection, 
      bg: 'from-indigo-900 via-purple-900 to-black',
      title: 'Inicio Cósmico'
    },
    { 
      id: 'chapter1',
      component: Chapter1, 
      bg: 'from-purple-900 via-blue-900 to-purple-900',
      title: 'Mentes Alienígenas'
    },
    { 
      id: 'chapter2',
      component: Chapter2, 
      bg: 'from-blue-900 via-indigo-900 to-blue-900',
      title: 'Idiomas Secretos'
    },
    { 
      id: 'chapter3',
      component: Chapter3, 
      bg: 'from-emerald-900 via-green-800 to-emerald-900',
      title: 'Códigos Naturales'
    },
    { 
      id: 'translator',
      component: Translator, 
      bg: 'from-gray-900 via-black to-gray-900',
      title: 'Traductor Cósmico'
    },
    { 
      id: 'chapter4',
      component: Chapter4, 
      bg: 'from-orange-900 via-red-800 to-orange-900',
      title: 'Misterios Profundos'
    },
  ];

  // Calculo de progreso de scroll simplificado
  const [scrollProgress, setScrollProgress] = useState(0);

  // Manejo del scroll optimizado
  const handleScroll = (e) => {
    if (!e.target) return;
    
    const container = e.target;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const totalScrollHeight = container.scrollHeight - containerHeight;
    
    if (totalScrollHeight <= 0) return;
    
    // Calcula progreso y sección actual
    const progress = Math.min(Math.max(scrollTop / totalScrollHeight, 0), 1);
    const newSection = Math.min(Math.floor(progress * sections.length), sections.length - 1);
    
    setScrollProgress(progress);
    
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
    }

    // Manejo del estado de scroll
    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };

  // Navegación a sección específica
  const scrollToSection = (index) => {
    if (!mainContainerRef.current || index < 0 || index >= sections.length) return;
    
    const container = mainContainerRef.current;
    const containerHeight = container.clientHeight;
    const sectionHeight = containerHeight;
    const targetScroll = index * sectionHeight;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(Math.min(currentSection + 1, sections.length - 1));
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(Math.max(currentSection - 1, 0));
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, sections.length]);

  // Inicialización de la app
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Cargando experiencia cósmica...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Barra de progreso superior */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black bg-opacity-50 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Contenedor principal */}
      <div
        ref={mainContainerRef}
        className="h-full overflow-y-auto scroll-smooth"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.3) transparent'
        }}
      >
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          
          return (
            <section
              key={section.id}
              className={`relative w-full min-h-screen bg-gradient-to-br ${section.bg} flex items-center justify-center`}
              id={section.id}
            >
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-5" />

              {/* Contenido de la sección */}
              <div className="relative z-10 w-full">
                <SectionComponent
                  isActive={currentSection === index}
                  sectionIndex={index}
                />
              </div>

              {/* Indicador de sección */}
              <div className="absolute top-6 left-6 bg-black bg-opacity-40 px-4 py-2 rounded-full border border-white border-opacity-20 backdrop-blur-sm">
                <span className="text-white font-semibold text-sm">
                  {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
                </span>
                <span className="text-gray-300 text-xs block mt-1">
                  {section.title}
                </span>
              </div>
            </section>
          );
        })}
      </div>

      {/* Navegador lateral */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-full p-4 border border-white border-opacity-20">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`block w-3 h-3 rounded-full my-3 transition-all duration-300 ${
                currentSection === index
                  ? 'bg-gradient-to-r from-cyan-400 to-pink-400 scale-150 shadow-lg shadow-cyan-400/30'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-70 hover:scale-125'
              }`}
              title={section.title}
              aria-label={`Ir a ${section.title}`}
            />
          ))}
        </div>
      </div>

      {/* Indicador de scroll activo */}
      {isScrolling && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gradient-to-r from-cyan-400 to-pink-400 px-6 py-3 rounded-full backdrop-blur-sm border border-white border-opacity-30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">Explorando...</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Controles de navegación */}
      <div className="fixed bottom-6 right-6 z-50 opacity-70 hover:opacity-100 transition-opacity">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
          <div className="text-white text-xs text-center space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <span>↑↓</span>
              <span className="text-gray-300">Navegar</span>
            </div>
            <div className="text-gray-400">Click • Saltar</div>
          </div>
        </div>
      </div>

      {/* Botones de navegación rápida (móvil) */}
      <div className="fixed bottom-6 left-6 z-50 flex space-x-2 md:hidden">
        <button
          onClick={() => scrollToSection(Math.max(currentSection - 1, 0))}
          disabled={currentSection === 0}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full border border-white border-opacity-20 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Sección anterior"
        >
          ↑
        </button>
        <button
          onClick={() => scrollToSection(Math.min(currentSection + 1, sections.length - 1))}
          disabled={currentSection === sections.length - 1}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full border border-white border-opacity-20 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Siguiente sección"
        >
          ↓
        </button>
      </div>
    </div>
  );
}