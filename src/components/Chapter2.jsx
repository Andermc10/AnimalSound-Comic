import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Zap, Network, Brain, Camera, Eye, Activity } from "lucide-react";
import { useState } from "react";

export default function Chapter2() {
  const [activeTech, setActiveTech] = useState(null);

  const aiTechnologies = [
    {
      id: "nlp",
      icon: <Brain className="text-purple-400 w-8 h-8" />,
      name: "NLP ANIMAL",
      subtitle: "Procesamiento de Lenguaje Natural Adaptado",
      description: "Transformers y modelos de lenguaje entrenados específicamente en patrones de comunicación animal",
      realExample: "GPT adaptado para analizar secuencias en comportamientos de ballenas",
      howItWorks: "Tokeniza comportamientos animales como 'palabras', identifica sintaxis y semántica en secuencias",
      impact: "Descubrió gramática compleja en comunicación gestual de primates",
      color: "from-purple-600 via-pink-500 to-indigo-600",
      techSpecs: ["Transformer architecture", "50M+ parámetros especializados", "Multi-species training", "Sequence-to-sequence models"]
    },
    {
      id: "computer-vision",
      icon: <Camera className="text-green-400 w-8 h-8" />,
      name: "VISION IA",
      subtitle: "Reconocimiento de Comunicación Visual",
      description: "Computer vision que decodifica gestos, colores, movimientos y posturas como lenguaje estructurado",
      realExample: "Sistema que traduce danzas de abejas a coordenadas GPS exactas",
      howItWorks: "Rastreo de movimiento + análisis gestual + mapeo semántico + reconocimiento de patrones",
      impact: "Permite comunicación bidireccional con abejas mediante robots que imitan danzas",
      color: "from-green-600 via-emerald-500 to-lime-600",
      techSpecs: ["YOLO para detección", "Pose estimation", "Tracking temporal", "Semantic mapping"]
    },
    {
      id: "pattern-analysis",
      icon: <Activity className="text-cyan-400 w-8 h-8" />,
      name: "ANÁLISIS DE PATRONES",
      subtitle: "Detección de Secuencias Complejas",
      description: "Algoritmos que identifican patrones ocultos en comportamientos animales y señales químicas",
      realExample: "IA que detecta 'conversaciones' químicas entre plantas y su impacto en animales",
      howItWorks: "Análisis temporal de datos + detección de anomalías + clustering inteligente",
      impact: "Reveló redes de comunicación química que afectan comportamiento animal",
      color: "from-cyan-600 via-blue-500 to-teal-600",
      techSpecs: ["Time series analysis", "Anomaly detection", "Unsupervised learning", "Chemical pattern mapping"]
    },
    {
      id: "reinforcement",
      icon: <Zap className="text-yellow-400 w-8 h-8" />,
      name: "RL INTERACTIVO",
      subtitle: "Aprendizaje por Refuerzo Adaptativo",
      description: "IA que aprende comunicación animal mediante interacción directa y retroalimentación comportamental",
      realExample: "Sistema que estableció protocolo de comunicación gestual con chimpancés",
      howItWorks: "Prueba respuestas gestuales, mide reacciones animales, optimiza comunicación iterativamente",
      impact: "Estableció diálogos gestuales de 15+ intercambios con primates en cautiverio",
      color: "from-yellow-600 via-orange-500 to-red-600",
      techSpecs: ["Q-learning adaptativo", "Multi-agent systems", "Reward shaping biológico", "Behavioral modeling"]
    }
  ];

  const realProjects = [
    {
      year: "2024",
      project: "CETI - Sperm Whale Behavior",
      tech: "Transformer + Behavioral Analysis",
      result: "Primera gramática conductual identificada",
      funding: "$40M+ inversión"
    },
    {
      year: "2023",
      project: "Elephant AI Communication",
      tech: "Computer Vision + Pattern Recognition",
      result: "Reconoce estados emocionales con 94% precisión",
      funding: "Google AI Partnership"
    },
    {
      year: "2024",
      project: "Bee++ Robotic Interface",
      tech: "Computer Vision + Robotics",
      result: "Robot que 'baila' con abejas exitosamente",
      funding: "EU Science Foundation"
    },
    {
      year: "2023",
      project: "Primate Gesture Decoder",
      tech: "Deep Learning + Motion Capture",
      result: "Traduce 200+ gestos únicos de chimpancés",
      funding: "National Geographic + MIT"
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 overflow-hidden min-h-screen">
      {/* Fondo tech con circuitos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(59,130,246,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(6,182,212,0.2) 0%, transparent 50%),
              linear-gradient(45deg, rgba(99,102,241,0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Elementos tech flotantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            {i % 3 === 0 ? (
              <Cpu className="w-4 h-4 text-cyan-400" />
            ) : i % 3 === 1 ? (
              <Network className="w-3 h-3 text-blue-400" />
            ) : (
              <div className="w-2 h-2 bg-cyan-300 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      {/* HEADER */}
      <section className="relative z-10 py-20 px-6 text-center">
        {/* ... TU HEADER ORIGINAL AQUÍ ... */}
      </section>

      {/* TECNOLOGÍAS PRINCIPALES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          🚀 4 TECNOLOGÍAS QUE CAMBIAN TODO
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {aiTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 80, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.02, rotateY: 3, transition: { duration: 0.3 } }}
              onClick={() => setActiveTech(activeTech === tech.id ? null : tech.id)}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tech.color} p-6 border-4 border-white border-opacity-20 shadow-2xl`}>
                
                {/* HEADER DE TARJETA */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div className="bg-black bg-opacity-30 p-3 rounded-full" whileHover={{ scale: 1.1 }}>
                    {tech.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-1 drop-shadow-lg">{tech.name}</h3>
                    <p className="text-lg text-yellow-200 font-bold italic">{tech.subtitle}</p>
                  </div>

                  {activeTech === tech.id && (
                    <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="text-3xl">
                      💡
                    </motion.div>
                  )}
                </div>

                <p className="text-white text-lg mb-4 leading-relaxed">{tech.description}</p>

                <div className="bg-black bg-opacity-40 p-4 rounded-xl mb-4 border-2 border-yellow-300">
                  <p className="text-yellow-200 font-bold text-center flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" /> EJEMPLO REAL: {tech.realExample}
                  </p>
                </div>

                {/* CONTENIDO EXPANDIBLE CON AnimatePresence */}
                <AnimatePresence>
                  {activeTech === tech.id && (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-4 border-t-2 border-white border-opacity-30">
                        <div className="bg-blue-900 bg-opacity-60 p-4 rounded-xl">
                          <h4 className="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                            <Cpu className="w-5 h-5" /> CÓMO FUNCIONA:
                          </h4>
                          <p className="text-gray-200 text-sm">{tech.howItWorks}</p>
                        </div>

                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl border-2 border-yellow-300">
                          <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                            <Eye className="w-5 h-5" /> IMPACTO REAL:
                          </h4>
                          <p className="text-white font-semibold">{tech.impact}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          <h5 className="text-purple-200 font-bold text-sm mb-2">ESPECIFICACIONES TÉCNICAS:</h5>
                          {tech.techSpecs.map((spec, specIndex) => (
                            <div key={specIndex} className="bg-gradient-to-r from-gray-700 to-gray-800 p-2 rounded-lg border border-cyan-300 border-opacity-40">
                              <p className="text-cyan-100 text-sm font-mono">• {spec}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROYECTOS REALES + MENSAJE FINAL (igual que tu original) */}
      {/* ... resto de tu código sin cambios ... */}
    </div>
  );
}
