import { motion } from "framer-motion";
import { Sparkles, Zap, Eye, Brain, Heart, Cpu, Mic, Speaker } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import React from "react"; // ✅ Añadir esta importación

export default function Chapter1() {
  const [activeDiscovery, setActiveDiscovery] = useState(null);

  const aiDiscoveries = useMemo(() => [
    { 
      id: "whales", 
      emoji: "🐋", 
      name: "PROYECTO CETI", 
      subtitle: "IA Decodifica Ballenas", 
      description: "Inteligencia artificial analiza millones de clicks de cachalotes para descifrar su 'alfabeto'",
      aiPower: "🧠 Machine Learning + 15 años de grabaciones",
      breakthrough: "La IA identificó patrones que los humanos jamás detectamos: ¡las ballenas tienen gramática!",
      realImpact: "Primera traducción IA-animal exitosa en 2024",
      color: "from-blue-600 via-cyan-500 to-teal-600",
      bgPattern: "radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, rgba(6,182,212,0.2) 80%)",
      facts: ["🎵 +100,000 horas de audio procesadas", "📊 Redes neuronales detectan 150+ patrones únicos", "🌊 Predicen conversaciones antes que ocurran"]
    },
    { 
      id: "elephants", 
      emoji: "🐘", 
      name: "ELEPHANT LISTENING", 
      subtitle: "IA Sísmica Revolucionaria", 
      description: "Algoritmos procesan vibraciones terrestres para traducir conversaciones de elefantes a kilómetros",
      aiPower: "📡 Sensores + Deep Learning sísmico",
      breakthrough: "La IA descubrió que elefantes tienen 'nombres propios' y conversaciones familiares complejas",
      realImpact: "Previene conflictos humano-elefante con 94% precisión",
      color: "from-emerald-600 via-green-500 to-teal-500",
      bgPattern: "radial-gradient(ellipse, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.2) 70%)",
      facts: ["🌍 Detecta comunicación hasta 32km de distancia", "🤖 Procesa 24/7 sin descanso", "⚡ Alerta en tiempo real de movimientos de manadas"]
    },
    { 
      id: "bees", 
      emoji: "🐝", 
      name: "BEE SPEECH AI", 
      subtitle: "Traductor de Danzas Cuánticas", 
      description: "Visión computacional + IA traduce danzas de abejas en mapas GPS precisos",
      aiPower: "👁️ Computer Vision + Algoritmos de navegación",
      breakthrough: "La IA puede predecir qué flores visitarán las abejas 3 días antes que ellas",
      realImpact: "Optimiza polinización y salva ecosistemas agrícolas",
      color: "from-yellow-500 via-amber-500 to-orange-500",
      bgPattern: "radial-gradient(circle, rgba(245,158,11,0.4) 0%, rgba(249,115,22,0.2) 60%)",
      facts: ["📐 Convierte danzas en coordenadas GPS exactas", "🎯 97% precisión en predicción de rutas", "🌻 Mapea 50,000+ flores por colmena"]
    },
    { 
      id: "primates", 
      emoji: "🐒", 
      name: "PRIMATE AI", 
      subtitle: "Descifrando Gestos Ancestrales", 
      description: "IA analiza comunicación gestual de primates revelando proto-lenguajes complejos",
      aiPower: "🎥 Análisis de video + Neural Networks",
      breakthrough: "Descubrió que chimpancés usan 'sintaxis' y 'gramática' similar al lenguaje humano primitivo",
      realImpact: "Revoluciona teorías sobre el origen del lenguaje humano",
      color: "from-purple-600 via-pink-500 to-rose-500",
      bgPattern: "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.2) 50%)",
      facts: ["✋ Reconoce +200 gestos únicos", "🧬 Conecta evolución con lenguaje humano", "📱 App traduce gestos en tiempo real"]
    }
  ], []);

  const comicBubbles = useMemo(() => [
    { text: "¡IA GENIUS!", pos: "top-10 left-10", color: "bg-cyan-400", size: "text-sm" },
    { text: "FUTURO YA", pos: "top-20 right-20", color: "bg-purple-400", size: "text-xs" },
    { text: "TRADUCCIÓN REAL!", pos: "bottom-32 left-16", color: "bg-green-400", size: "text-sm" },
    { text: "INCREÍBLE!", pos: "bottom-20 right-12", color: "bg-pink-400", size: "text-lg" }
  ], []);

  // OPTIMIZACIÓN: Reducir partículas y simplificar animaciones
  const circuitParticles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3, // Animaciones más lentas
      delay: Math.random() * 3
    }))
  , []);

  const handleDiscoveryToggle = useCallback((id) => {
    setActiveDiscovery(activeDiscovery === id ? null : id);
  }, [activeDiscovery]);

  return (
    <div className="relative w-full bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 overflow-hidden min-h-screen">
      
      {/* 🌟 Fondo tech cósmico OPTIMIZADO */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ 
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(147,51,234,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 90%, rgba(16,185,129,0.2) 0%, transparent 50%)
            `
          }} 
        />
        
        {/* Circuitos de IA flotantes OPTIMIZADOS - Menos partículas */}
        {circuitParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity, 
              delay: particle.delay,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
          </motion.div>
        ))}
      </div>

      {/* Burbujas de cómic tech OPTIMIZADAS - Animaciones más simples */}
      {comicBubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.pos} ${bubble.color} ${bubble.size} px-3 py-1 rounded-full font-bold text-black border-2 border-black shadow-lg z-20`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.8 }}
        >
          {bubble.text}
        </motion.div>
      ))}

      {/* 🎭 ENCABEZADO IA + ANIMALES */}
      <section className="relative z-10 py-16 px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="relative"
        >
          {/* Badge tech */}
          <motion.div className="relative mx-auto w-fit" whileHover={{ scale: 1.02 }}>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-2xl font-bold border-4 border-yellow-400 shadow-2xl">
              🤖 CAPÍTULO 1: IA + COMUNICACIÓN ANIMAL
            </div>
          </motion.div>

          {/* Título IA REVOLUTION */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="block bg-gradient-to-r from-cyan-300 via-green-400 to-yellow-300 bg-clip-text text-transparent">
                IA TRADUCE
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                ANIMALES!
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-black bg-opacity-60 px-6 py-3 rounded-2xl border-2 border-cyan-400 inline-block">
                🤖 La revolución tecnológica que está rompiendo la barrera entre especies 🔬
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* 🚀 DISCOVERIES IA REALES OPTIMIZADO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-center mb-8 text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          🔬 4 AVANCES REALES DE IA EN 2024
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {aiDiscoveries.map((discovery, index) => (
            <DiscoveryCard
              key={discovery.id}
              discovery={discovery}
              index={index}
              isActive={activeDiscovery === discovery.id}
              onToggle={handleDiscoveryToggle}
            />
          ))}
        </div>

        {/* Mensaje final tech */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 p-6 rounded-3xl border-4 border-white shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-3">
              🚀 EL FUTURO DE LA COMUNICACIÓN INTERESPECIES
            </h3>
            <p className="text-lg text-white font-semibold max-w-2xl">
              La IA está revolucionando nuestra comprensión del reino animal, 
              traduciendo lenguajes que llevan millones de años evolucionando.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// ✅ CORREGIDO: Ahora React está importado correctamente
const DiscoveryCard = React.memo(({ discovery, index, isActive, onToggle }) => {
  const particles = useMemo(() => 
    isActive ? Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    })) : []
  , [isActive]);

  const handleClick = useCallback(() => {
    onToggle(discovery.id);
  }, [onToggle, discovery.id]);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
    >
      {/* Tarjeta principal */}
      <div 
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${discovery.color} p-5 border-4 border-white border-opacity-30 shadow-2xl`}
        style={{ background: discovery.bgPattern }}
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <motion.div 
            className="text-5xl"
            animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {discovery.emoji}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-black text-white mb-1 drop-shadow-lg">
              {discovery.name}
            </h3>
            <p className="text-md text-yellow-300 font-bold italic">
              {discovery.subtitle}
            </p>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-white text-md mb-3 leading-relaxed">
          {discovery.description}
        </p>

        {/* Poder IA */}
        <div className="bg-black bg-opacity-50 p-3 rounded-xl mb-3 border-2 border-cyan-400">
          <p className="text-cyan-300 font-bold text-center flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4" />
            TECNOLOGÍA IA: {discovery.aiPower}
          </p>
        </div>

        {/* Información expandible */}
        <motion.div
          animate={{ height: isActive ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3 pt-3 border-t-2 border-white border-opacity-30">
            <div className="bg-purple-900 bg-opacity-70 p-3 rounded-xl">
              <h4 className="text-green-300 font-bold mb-1 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                BREAKTHROUGH:
              </h4>
              <p className="text-gray-200 text-sm">{discovery.breakthrough}</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-xl border-2 border-yellow-400">
              <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                IMPACTO REAL:
              </h4>
              <p className="text-white font-semibold text-sm">{discovery.realImpact}</p>
            </div>

            {/* Facts técnicos */}
            <div className="grid grid-cols-1 gap-2">
              {discovery.facts.map((fact, factIndex) => (
                <motion.div
                  key={factIndex}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-2 rounded-lg border border-cyan-400 border-opacity-50"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: factIndex * 0.05 }}
                >
                  <p className="text-cyan-200 text-xs font-semibold">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Efectos de partículas OPTIMIZADOS - Menos partículas */}
        {isActive && (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute"
                animate={{ 
                  y: [0, -60], 
                  opacity: [0, 0.8, 0], 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 1.5 }}
                style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
              >
                <div className="w-1 h-1 bg-cyan-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
});