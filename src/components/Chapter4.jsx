import { useMemo } from "react";
import { Star, TrendingUp, Target, Globe, Heart, Brain, Lightbulb, Users, Shield, Zap, AlertTriangle, Rocket } from "lucide-react";

export default function Chapter4() {
  const futureTimeline = [
    { 
      year: "2025", 
      event: "Primeros prototipos comerciales de traducción básica", 
      impact: "Investigación científica y zoológicos implementan sistemas piloto", 
      icon: "🔬",
      status: "En desarrollo"
    },
    { 
      year: "2027", 
      event: "Sistemas de alerta temprana con comunicación animal", 
      impact: "Predicción de desastres naturales con 85% precisión", 
      icon: "🌊",
      status: "Proyectado"
    },
    { 
      year: "2030", 
      event: "Red global de conservación asistida por IA", 
      impact: "Protección de especies en tiempo real a escala planetaria", 
      icon: "🛡️",
      status: "Visionario"
    },
    { 
      year: "2035", 
      event: "Primera 'conversación' bidireccional documentada", 
      impact: "Revolución en la comprensión y ética animal", 
      icon: "💬",
      status: "Objetivo"
    }
  ];

  const realApplications = [
    {
      title: "Conservación Inteligente",
      description: "IA que traduce señales de alerta de animales para prevenir extinción masiva y monitorear ecosistemas en tiempo real",
      impact: "Salvar 500+ especies en peligro",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      progress: "75%"
    },
    {
      title: "Medicina Veterinaria",
      description: "Diagnóstico temprano mediante análisis de vocalizaciones de dolor y comportamiento animal",
      impact: "Reducir sufrimiento animal 80%",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      progress: "60%"
    },
    {
      title: "Agricultura Sostenible",
      description: "Comunicación con abejas y otros polinizadores para optimizar cultivos y biodiversidad",
      impact: "Aumentar producción alimentaria 35%",
      icon: Target,
      color: "from-yellow-500 to-orange-600",
      progress: "40%"
    },
    {
      title: "Turismo Ético",
      description: "Monitoreo del bienestar animal en tiempo real para experiencias turísticas responsables",
      impact: "Crear experiencias sin estrés animal",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      progress: "25%"
    }
  ];

  const challenges = [
    {
      title: "Diversidad Lingüística",
      description: "Más de 8.7 millones de especies con sistemas de comunicación únicos",
      icon: Brain
    },
    {
      title: "Contexto Cultural",
      description: "Variaciones regionales y culturales en patrones de comunicación animal",
      icon: Globe
    },
    {
      title: "Dilemas Éticos",
      description: "¿Tenemos derecho a acceder a conversaciones privadas entre animales?",
      icon: Shield
    },
    {
      title: "Riesgo de Malinterpretación",
      description: "Interpretaciones erróneas que podrían causar daño a los animales",
      icon: AlertTriangle
    }
  ];

  const opportunities = [
    {
      title: "Revolución Científica",
      description: "Transformar completamente la biología, etología y ciencias ambientales",
      icon: Lightbulb
    },
    {
      title: "Red Inter-especies",
      description: "Primera red de comunicación global entre humanos y animales",
      icon: Users
    },
    {
      title: "Medicina Avanzada",
      description: "Desarrollar tratamientos basados en conocimiento animal ancestral",
      icon: Heart
    },
    {
      title: "Coexistencia Harmoniosa",
      description: "Establecer acuerdos reales de convivencia con fauna salvaje",
      icon: Star
    }
  ];

  const stars = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      })),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative">
      {/* Fondo con estrellas */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold border-2 border-white/50 shadow-lg">
              🚀 CAPÍTULO 4 - FINAL
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              EL FUTURO
            </span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              YA ESTÁ AQUÍ
            </span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-200 mb-6">
              La comunicación entre especies no es ciencia ficción.
            </p>
            <p className="text-3xl text-yellow-300 font-bold">
              Es el siguiente paso evolutivo de la humanidad.
            </p>
          </div>
        </header>

        {/* Timeline del Futuro */}
        <section className="mb-24">
          <h2 className="text-5xl font-black text-center mb-16 text-white">
            📅 CRONOLOGÍA DEL FUTURO INMEDIATO
          </h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 h-full rounded-full"></div>

            {futureTimeline.map((item, index) => (
              <div key={index} className="flex items-start mb-16 relative">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-4xl">
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1 ml-10">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-bold">
                        {item.year}
                      </div>
                      <div className="bg-blue-500/20 text-blue-200 px-4 py-1 rounded-full text-sm font-medium border border-blue-400/30">
                        {item.status}
                      </div>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">{item.event}</h3>
                    <p className="text-gray-300 text-lg">
                      <span className="text-green-400 font-bold">Impacto:</span> {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Aplicaciones Reales */}
        <section className="mb-24">
          <h2 className="text-5xl font-black text-center mb-16 text-white">
            🎯 APLICACIONES REALES EN DESARROLLO
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {realApplications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${app.color} p-8 rounded-3xl border-2 border-white/20 shadow-2xl`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-black/30 p-4 rounded-full">
                      <IconComponent className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-white">{app.title}</h3>
                  </div>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">{app.description}</p>
                  <div className="bg-black/40 p-4 rounded-2xl mb-4">
                    <p className="text-yellow-200 font-bold text-lg">📈 {app.impact}</p>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-300 to-green-400 rounded-full transition-all duration-1000"
                      style={{ width: app.progress }}
                    ></div>
                  </div>
                  <p className="text-white/80 text-sm mt-2">Progreso de desarrollo: {app.progress}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Desafíos y Oportunidades */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Desafíos */}
            <div>
              <h2 className="text-4xl font-black mb-10 text-red-400 flex items-center gap-3">
                🚧 DESAFÍOS PRINCIPALES
              </h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => {
                  const IconComponent = challenge.icon;
                  return (
                    <div key={index} className="bg-red-900/20 border-l-4 border-red-400 p-6 rounded-r-2xl backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <IconComponent className="text-red-400 w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2">{challenge.title}</h3>
                          <p className="text-gray-300">{challenge.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Oportunidades */}
            <div>
              <h2 className="text-4xl font-black mb-10 text-green-400 flex items-center gap-3">
                ✨ OPORTUNIDADES ÚNICAS
              </h2>
              <div className="space-y-6">
                {opportunities.map((opportunity, index) => {
                  const IconComponent = opportunity.icon;
                  return (
                    <div key={index} className="bg-green-900/20 border-l-4 border-green-400 p-6 rounded-r-2xl backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <IconComponent className="text-green-400 w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2">{opportunity.title}</h3>
                          <p className="text-gray-300">{opportunity.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}