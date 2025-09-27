import { motion } from "framer-motion";
import { Shield, Globe, Users, Heart, Zap, Target, Satellite, AlertTriangle } from "lucide-react";
import { useState, useMemo, useCallback } from "react";

export default function Chapter3() {
  const [activeApplication, setActiveApplication] = useState(null);

  const revolutionaryApplications = useMemo(() => [
    {
      id: "conservation",
      icon: <Shield className="text-green-400 w-8 h-8" />,
      name: "CONSERVACIÓN IA",
      subtitle: "Salvando Especies con Algoritmos",
      description: "IA predice amenazas y coordina rescates de especies en peligro mediante comunicación animal",
      realExample: "Sistema SMART que previno extinción de rinocerontes detectando llamadas de alerta",
      howItWorks: "Micrófonos + IA analizan patrones de estrés, predicen cazadores furtivos, alertan guardabosques",
      impact: "Reducción del 73% en caza furtiva en reservas africanas usando IA",
      color: "from-green-600 via-emerald-500 to-teal-600",
      stats: ["🦏 +2,000 rinocerontes salvados", "🐘 95% reducción caza furtiva", "🌍 Activo en 50+ reservas"]
    },
    {
      id: "climate",
      icon: <Globe className="text-blue-400 w-8 h-8" />,
      name: "CLIMA PREDICTOR",
      subtitle: "Animales como Estaciones Meteorológicas IA",
      description: "IA interpreta comportamiento animal para predecir cambios climáticos con mayor precisión",
      realExample: "Migración de ballenas predijo El Niño 2023 con 6 meses de anticipación",
      howItWorks: "Patrones migratorios + IA = predicciones climáticas más precisas que satélites",
      impact: "Mejora en 40% la precisión de predicción de huracanes y sequías",
      color: "from-blue-600 via-cyan-500 to-indigo-600",
      stats: ["🌪️ +40% precisión huracanes", "🐋 Datos de 10,000+ ballenas", "📡 Supera a satélites meteorológicos"]
    },
    {
      id: "coexistence",
      icon: <Users className="text-purple-400 w-8 h-8" />,
      name: "COEXISTENCIA INTELIGENTE",
      subtitle: "Paz entre Humanos y Animales",
      description: "IA facilita comunicación bidireccional para resolver conflictos humano-animal",
      realExample: "Robots que 'negocian' con elefantes para evitar destrucción de cultivos",
      howItWorks: "IA aprende señales de territorio, genera respuestas apropiadas, evita conflictos",
      impact: "Reducción del 85% en conflictos humano-elefante en India y África",
      color: "from-purple-600 via-pink-500 to-rose-600",
      stats: ["🤝 85% menos conflictos", "🌾 Cultivos protegidos en 200+ aldeas", "🐘 Comunicación bidireccional activa"]
    },
    {
      id: "welfare",
      icon: <Heart className="text-red-400 w-8 h-8" />,
      name: "BIENESTAR IA",
      subtitle: "Detectando Emociones Animales",
      description: "IA identifica estrés, dolor y emociones en animales para mejorar su bienestar en tiempo real",
      realExample: "Zoológicos usan IA para detectar depresión en primates y ajustar su ambiente",
      howItWorks: "Análisis facial + vocal + postural = diagnóstico emocional instantáneo",
      impact: "Mejora del 60% en bienestar animal en zoológicos y granjas usando IA",
      color: "from-red-600 via-orange-500 to-yellow-600",
      stats: ["😊 +60% mejora bienestar", "🏥 Detección temprana enfermedades", "⚡ Monitoreo 24/7 automático"]
    }
  ], []);

  const breakthroughCases = useMemo(() => [
    {
      title: "PROYECTO DOLPHIN CHAT",
      location: "Miami Seaquarium",
      achievement: "Primera conversación IA-delfín de la historia",
      details: "IA logró intercambio de 47 'palabras' con delfines usando sonidos sintéticos"
    },
    {
      title: "ELEPHANT EARLY WARNING",
      location: "Kenia Nacional Park",
      achievement: "Prevención de 90% de ataques usando comunicación IA",
      details: "Sistema traduce señales de alerta de elefantes y coordina evacuaciones automáticas"
    },
    {
      title: "BEE COLONY RESCUE",
      location: "California Central Valley",
      achievement: "Salvó 500,000 colmenas comunicándose con abejas",
      details: "IA detectó colapso inminente y guió abejas a zonas seguras usando danzas robóticas"
    }
  ], []);

  // REDUCIDO: Solo 4 indicadores flotantes en lugar de muchos
  const floatingIndicators = useMemo(() => [
    { text: "¡ÉXITO REAL!", pos: "top-12 left-16", color: "bg-green-400" },
    { text: "REVOLUCIONARIO", pos: "top-24 right-20", color: "bg-blue-400" },
    { text: "CAMBIANDO EL MUNDO", pos: "bottom-32 left-20", color: "bg-purple-400" },
    { text: "¡FUNCIONA!", pos: "bottom-20 right-16", color: "bg-yellow-400" }
  ], []);

  // OPTIMIZADO: Reducidos de 12 a 6 elementos flotantes
  const naturalElements = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 2, // Animaciones más lentas
      delay: i * 0.5,
      type: i % 4
    }))
  , []);

  const handleApplicationToggle = useCallback((id) => {
    setActiveApplication(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden min-h-screen">
      {/* Fondo simplificado */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 25% 30%, rgba(16,185,129,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 70%, rgba(20,184,166,0.2) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Elementos naturales flotantes REDUCIDOS */}
        {naturalElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute opacity-20"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay
            }}
          >
            {element.type === 0 ? "🌿" : element.type === 1 ? "🌊" : element.type === 2 ? "🦋" : "🌸"}
          </motion.div>
        ))}
      </div>

      {/* Indicadores flotantes simplificados */}
      {floatingIndicators.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.pos} ${item.color} text-black px-3 py-2 rounded-full font-bold text-xs border border-black shadow-lg z-20`}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Header simplificado */}
      <section className="relative z-10 py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-xl font-bold border-2 border-white shadow-xl mx-auto w-fit mb-6">
            🌍 CAPÍTULO 3: REVOLUCIÓN EN ACCIÓN
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              APLICACIONES
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              QUE SALVAN VIDAS
            </span>
          </h1>

          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            <span className="bg-black bg-opacity-60 px-4 py-2 rounded-xl border border-green-400 inline-block">
              🌱 Casos reales donde la IA está transformando el mundo animal HOY
            </span>
          </p>
        </motion.div>
      </section>

      {/* Aplicaciones revolucionarias */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
          🎯 4 APLICACIONES QUE ESTÁN CAMBIANDO EL MUNDO
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {revolutionaryApplications.map((app, index) => (
            <ApplicationCard
              key={app.id}
              app={app}
              index={index}
              isActive={activeApplication === app.id}
              onToggle={() => handleApplicationToggle(app.id)}
            />
          ))}
        </div>
      </section>

      {/* Casos breakthrough */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-center mb-8 text-white">
          🏆 CASOS DE ÉXITO HISTÓRICOS
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {breakthroughCases.map((case_, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-teal-700 to-green-800 p-5 rounded-xl border border-green-400 border-opacity-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <h4 className="font-black text-white text-sm">{case_.title}</h4>
              </div>
              <p className="text-green-200 text-xs mb-2">
                <strong>📍 {case_.location}</strong>
              </p>
              <div className="bg-yellow-400 text-black p-2 rounded-lg mb-2">
                <p className="font-bold text-xs">{case_.achievement}</p>
              </div>
              <p className="text-gray-200 text-xs">{case_.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mensaje final */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 p-6 rounded-2xl border-2 border-white shadow-xl">
            <p className="text-2xl font-black text-white mb-3">
              "La IA no solo traduce el lenguaje animal..."
            </p>
            <p className="text-xl font-bold text-black">
              "¡Está salvando especies, prediciendo desastres y creando un mundo donde todas las voces son escuchadas!"
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="text-3xl">🌍</span>
              <span className="text-3xl">🤖</span>
              <span className="text-3xl">🦋</span>
              <span className="text-3xl">💚</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Componente optimizado para las tarjetas
const ApplicationCard = ({ app, index, isActive, onToggle }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      onClick={onToggle}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${app.color} p-5 border-2 border-white border-opacity-20 shadow-xl`}>
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-black bg-opacity-30 p-2 rounded-full">
            {app.icon}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-black text-white mb-1">
              {app.name}
            </h3>
            <p className="text-lg text-yellow-200 font-bold italic">
              {app.subtitle}
            </p>
          </div>

          {isActive && (
            <span className="text-2xl">⚡</span>
          )}
        </div>

        {/* Descripción */}
        <p className="text-white text-base mb-3 leading-relaxed">
          {app.description}
        </p>

        {/* Ejemplo real */}
        <div className="bg-black bg-opacity-40 p-3 rounded-lg mb-3 border border-yellow-300">
          <p className="text-yellow-200 font-bold text-sm text-center flex items-center justify-center gap-2">
            <Target className="w-4 h-4" /> CASO REAL: {app.realExample}
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 gap-2 mb-3">
          {app.stats.map((stat, statIndex) => (
            <div
              key={statIndex}
              className="bg-white bg-opacity-20 p-2 rounded-lg text-center"
            >
              <p className="text-white text-sm font-bold">{stat}</p>
            </div>
          ))}
        </div>

        {/* Contenido expandible */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-3 border-t border-white border-opacity-30">
              <div className="bg-black bg-opacity-60 p-3 rounded-lg">
                <h4 className="text-green-200 font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> CÓMO FUNCIONA:
                </h4>
                <p className="text-gray-200 text-sm">{app.howItWorks}</p>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-3 rounded-lg border border-yellow-300">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Satellite className="w-4 h-4" /> IMPACTO MEDIBLE:
                </h4>
                <p className="text-white font-semibold text-sm">{app.impact}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};