import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Volume2, Brain, Zap, Pause, RotateCcw, 
  VolumeX, Mic, Activity, Radio, Timer, Target
} from "lucide-react";

export default function AnimalTranslator({ audioManager, isActive }) {
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [analysisPhase, setAnalysisPhase] = useState('idle');
  const [confidence, setConfidence] = useState(0);
  const [frequencies, setFrequencies] = useState([]);
  
  const audioRef = useRef(null);
  const audioContext = useRef(null);
  const analyser = useRef(null);

  // Base de datos con audios embebidos (data URLs) para que funcionen siempre
const animalData = [
  {
    id: "whale",
    name: "Ballena Jorobada",
    scientific: "Megaptera novaeangliae",
    icon: "🐋",
    color: "from-blue-600 via-cyan-600 to-teal-600",
    sound: "/sounds/creepy-whale-song-323612.mp3",
    characteristics: {
      frequency: "10-40 Hz",
      range: "Hasta 160 km",
      duration: "15-30 minutos",
      depth: "0-200m"
    },
    translation: {
      original: "OooOOOooo---UUUuuu---EEEeee (Canto de Migración)",
      human:
        "🌊 MENSAJE DECODIFICADO: 'Grupo familiar moviéndose hacia aguas cálidas. Ruta: 45° noreste. Profundidad segura confirmada. Sigueme, hermanos del océano.'",
      analysis:
        "Patrón de baja frecuencia detectado. Duración: 18.7s. Estructura compleja con 5 frases distintas. Modulación descendente indica dirección.",
      emotion: "Coordinación grupal y liderazgo",
      context: "Comunicación migratoria de larga distancia",
      confidence: 94,
      phrases: [
        { time: "0:03", meaning: "Identificación del líder" },
        { time: "0:08", meaning: "Dirección de viaje" },
        { time: "0:15", meaning: "Confirmación de seguridad" }
      ]
    }
  },
  {
    id: "parrot",
    name: "Loro Gris Africano",
    scientific: "Psittacus erithacus",
    icon: "🦜",
    color: "from-green-600 via-emerald-600 to-lime-600",
    sound: "/sounds/bird-chittering-sfx-364487.mp3",
    characteristics: {
      frequency: "2-8 kHz",
      complexity: "Alta - imitación vocal",
      social: "Comunicación grupal compleja",
      intelligence: "Nivel niño 5 años"
    },
    translation: {
      original: "Kraa-kraa-TIK-tik-KRAA! HELLO-kraa-PELIGRO! (Alerta Territorial)",
      human:
        "🚨 ALERTA DECODIFICADA: '¡Atención manada! Intruso humano detectado sector sureste. Nivel de amenaza: ALTO. Preparar formación defensiva.'",
      analysis:
        "Frecuencia aguda: 6.2kHz. Patrón repetitivo cada 2.3s. Análisis de estrés vocal: 87% excitación. Imitación humana detectada.",
      emotion: "Alerta territorial y protección",
      context: "Sistema de alarma territorial con componentes aprendidos",
      confidence: 91,
      phrases: [
        { time: "0:01", meaning: "Llamada de atención" },
        { time: "0:04", meaning: "Identificación de amenaza" },
        { time: "0:07", meaning: "Coordinar respuesta grupal" }
      ]
    }
  },
  {
    id: "bee",
    name: "Abeja Melífera",
    scientific: "Apis mellifera",
    icon: "🐝",
    color: "from-yellow-600 via-amber-600 to-orange-600",
    sound: "/sounds/bee-landing-on-flower-374609.mp3",
    characteristics: {
      dance: "Lenguaje de baile",
      precision: "±3° angular",
      distance: "Hasta 10 km",
      efficiency: "97% precisión"
    },
    translation: {
      original: "Bzzz-ZigZag-Circle-Bzzz (Danza de Información)",
      human:
        "🍯 DANZA DECODIFICADA: '¡Increíble descubrimiento! Fuente de néctar premium: girasoles gigantes. Dirección: 45° noreste, distancia: 2.3km. ¡Calidad 10/10!'",
      analysis:
        "Duración danza: 12.4s. Ángulo preciso: 45.2°. Velocidad vibratoria: 280Hz. Círculos indican calidad excepcional.",
      emotion: "Euforia y entusiasmo extremo",
      context: "Comunicación de recursos mediante danza waggle",
      confidence: 98,
      phrases: [
        { time: "0:02", meaning: "Anuncio de descubrimiento" },
        { time: "0:05", meaning: "Codificación direccional" },
        { time: "0:09", meaning: "Valoración de calidad" }
      ]
    }
  },
  {
    id: "dolphin",
    name: "Delfín Nariz de Botella",
    scientific: "Tursiops truncatus",
    icon: "🐬",
    color: "from-purple-600 via-blue-600 to-indigo-600",
    sound: "/sounds/dolphin.mp3",
    characteristics: {
      signature: "Silbidos únicos",
      social: "Nombres individuales",
      echolocation: "Navegación precisa",
      intelligence: "Auto-reconocimiento"
    },
    translation: {
      original: "Click-Whistle-Click-Trill (Comunicación Social + Ecolocación)",
      human:
        "🐬 CONVERSACIÓN SOCIAL: 'Hola Luna, soy Splash. Banco de sardinas detectado a 200m, profundidad 15m. ¿Vienes a cazar conmigo, amiga?'",
      analysis:
        "Firma vocal única: ID-4491 (Splash). Uso de nombres confirmado. Ecolocación activa. Invitación cooperativa detectada.",
      emotion: "Amistad y cooperación",
      context:
        "Comunicación social con identificación individual y coordinación de caza",
      confidence: 96,
      phrases: [
        { time: "0:01", meaning: "Saludo e identificación" },
        { time: "0:04", meaning: "Reporte de información" },
        { time: "0:08", meaning: "Invitación cooperativa" }
      ]
    }
  },
  {
    id: "wolf",
    name: "Lobo Gris",
    scientific: "Canis lupus",
    icon: "🐺",
    color: "from-gray-600 via-slate-600 to-zinc-600",
    sound: "/sounds/spooky-wolf-howl-410547.mp3",
    characteristics: {
      range: "Hasta 6.4 km",
      pack: "Comunicación grupal",
      hierarchy: "Estructura social",
      hunting: "Coordinación de caza"
    },
    translation: {
      original: "AwoooOOOoooo---Howl-Growl (Llamada Alfa)",
      human:
        "🌙 LLAMADA ALFA: 'Manada, es Alpha. Luna llena, hora de cazar. Alces detectados valle norte. Beta y Gamma, flanqueen por el oeste. ¡Por la supervivencia!'",
      analysis:
        "Aullido alfa detectado. Frecuencia dominante: 422Hz. Modulación ascendente indica liderazgo. Respuesta de manada esperada.",
      emotion: "Autoridad y estrategia",
      context: "Coordinación de caza nocturna con jerarquía de manada",
      confidence: 93,
      phrases: [
        { time: "0:02", meaning: "Identificación de liderazgo" },
        { time: "0:06", meaning: "Información sobre presa" },
        { time: "0:12", meaning: "Asignación de roles" }
      ]
    }
  },
  {
    id: "elephant",
    name: "Elefante Africano",
    scientific: "Loxodonta africana",
    icon: "🐘",
    color: "from-gray-700 via-stone-600 to-neutral-600",
    sound: "/sounds/elephant-trumpets-growls-6047.mp3",
    characteristics: {
      infrasound: "1-20 Hz",
      range: "Hasta 10 km",
      memory: "Matriarcado",
      emotion: "Altamente emotivo"
    },
    translation: {
      original: "RUMMMMBLE---Trumpet---RUMBLE (Infrasonido + Trompeteo)",
      human:
        "🐘 MENSAJE MATRIARCAL: 'Familia, soy Grandmother. Sequía se acerca, recuerdo este patrón de mi juventud. Debemos migrar al río sagrado, 3 días de marcha. Protejan a las crías.'",
      analysis:
        "Infrasonido de 12Hz detectado. Combinación matriarcal + alerta. Memoria generacional activada. Urgencia moderada-alta.",
      emotion: "Sabiduría ancestral y protección",
      context:
        "Liderazgo matriarcal basado en experiencia y memoria generacional",
      confidence: 89,
      phrases: [
        { time: "0:04", meaning: "Establecimiento de autoridad" },
        { time: "0:09", meaning: "Análisis de situación" },
        { time: "0:15", meaning: "Directiva de supervivencia" }
      ]
    }
  }
];




  // Inicializar contexto de audio para análisis visual
  useEffect(() => {
    const initAudio = async () => {
      try {
        if (audioRef.current && !audioContext.current) {
          // Crear contexto solo cuando el usuario interactúe
          audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
          analyser.current = audioContext.current.createAnalyser();
          analyser.current.fftSize = 256;
          
          const source = audioContext.current.createMediaElementSource(audioRef.current);
          source.connect(analyser.current);
          analyser.current.connect(audioContext.current.destination);
        }
      } catch (error) {
        console.log("Web Audio API no disponible:", error);
      }
    };

    if (isPlaying) {
      initAudio();
    }
  }, [isPlaying]);

  // Análisis visual de frecuencias
  const analyzeAudio = useCallback(() => {
    if (analyser.current && isPlaying) {
      const bufferLength = analyser.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.current.getByteFrequencyData(dataArray);
      
      setFrequencies(Array.from(dataArray).slice(0, 32));
      requestAnimationFrame(analyzeAudio);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      analyzeAudio();
    }
  }, [isPlaying, analyzeAudio]);

  // Control de reproducción optimizado
  const playCurrentSound = useCallback(async () => {
    if (audioRef.current && !isPlaying) {
      try {
        // Reanudar contexto de audio si está suspendido
        if (audioContext.current && audioContext.current.state === 'suspended') {
          await audioContext.current.resume();
        }

        setIsAnalyzing(true);
        setAnalysisPhase('listening');
        setProgress(0);
        setCurrentTime(0);

        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          
          // Simular fases de análisis
          setTimeout(() => setAnalysisPhase('processing'), 1000);
          setTimeout(() => {
            setAnalysisPhase('complete');
            setConfidence(currentData.translation.confidence);
          }, 2500);
        }

      } catch (error) {
        console.error("Error reproduciendo audio:", error);
        setIsAnalyzing(false);
        setAnalysisPhase('idle');
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  const pauseAudio = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsAnalyzing(false);
      setAnalysisPhase('idle');
    }
  }, [isPlaying]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsAnalyzing(false);
      setAnalysisPhase('idle');
      setProgress(0);
      setCurrentTime(0);
      setConfidence(0);
    }
  }, []);

  // Event listeners para el audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedData = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleCanPlay = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsAnalyzing(false);
      setAnalysisPhase('complete');
    };

    const handleError = (e) => {
      console.error("Error de audio:", e);
      setIsPlaying(false);
      setIsAnalyzing(false);
      setAnalysisPhase('idle');
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentAnimal]);

  // Control de volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 0.8;
    }
  }, [isMuted]);

  const currentData = animalData[currentAnimal];
  
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const changeAnimal = useCallback((index) => {
    stopAudio();
    setCurrentAnimal(index);
    setConfidence(0);
    setFrequencies([]);
  }, [stopAudio]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Fondo dinámico */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentData.color} transition-all duration-1000`}></div>
      
      {/* Visualizador de frecuencias */}
      <div className="absolute inset-0 opacity-20 flex items-end justify-center">
        <div className="flex items-end gap-1 h-32 w-full max-w-md">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-t-sm flex-1 min-w-0"
              style={{
                height: frequencies[i] ? `${(frequencies[i] / 255) * 100}%` : '2%'
              }}
              animate={{
                height: frequencies[i] ? `${(frequencies[i] / 255) * 100}%` : '2%',
                opacity: isPlaying ? 0.8 : 0.2
              }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentData.sound}
        preload="metadata"
      />

      <div className="relative z-10 max-w-6xl w-full space-y-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-black bg-opacity-70 rounded-full border border-white border-opacity-30">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ 
                scale: isPlaying ? [1, 1.3, 1] : 1,
                opacity: isPlaying ? [1, 0.5, 1] : 1
              }}
              transition={{ repeat: isPlaying ? Infinity : 0, duration: 1 }}
            />
            <span className="text-lg font-bold text-green-400">TRADUCTOR IA ACTIVO</span>
            <div className="text-xs text-gray-400 ml-2">v3.0 PRO</div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
            🎤 TRADUCTOR UNIVERSAL IA
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Análisis neuronal avanzado • Traducción en tiempo real • Precisión del 95%
          </p>
        </motion.div>

        {/* Selector de especies */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {animalData.map((animal, index) => (
            <motion.button
              key={animal.id}
              onClick={() => changeAnimal(index)}
              className={`group relative overflow-hidden rounded-xl p-4 font-bold transition-all duration-300 ${
                currentAnimal === index
                  ? 'bg-white text-black scale-105 shadow-2xl'
                  : 'bg-black bg-opacity-50 text-white hover:bg-opacity-70 hover:scale-102'
              }`}
              whileHover={{ scale: currentAnimal === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-2">{animal.icon}</div>
              <div className="text-sm">{animal.name.split(' ')[0]}</div>
              {currentAnimal === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 rounded-xl"
                  layoutId="activeAnimal"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Reproductor principal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAnimal}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-black bg-opacity-80 rounded-3xl p-6 md:p-8 border border-white border-opacity-20 shadow-2xl backdrop-blur-lg"
          >
            {/* Header del animal */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="text-6xl"
                  animate={{ 
                    rotate: isPlaying ? [0, 3, -3, 0] : 0,
                    scale: isPlaying ? [1, 1.05, 1] : 1
                  }}
                  transition={{ repeat: isPlaying ? Infinity : 0, duration: 3 }}
                >
                  {currentData.icon}
                </motion.div>
                <div>
                  <h3 className="text-3xl font-black text-white">{currentData.name}</h3>
                  <p className="text-gray-400 italic text-lg">{currentData.scientific}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <Activity size={16} />
                    <span>Sistema neuronal analizando patrones vocales...</span>
                  </div>
                </div>
              </div>
              
              {/* Panel de estado */}
              <div className="bg-gray-900 rounded-xl p-4 min-w-[250px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Estado del Sistema</span>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
                <div className={`text-lg font-bold mb-1 ${
                  analysisPhase === 'idle' ? 'text-gray-500' :
                  analysisPhase === 'listening' ? 'text-yellow-400' :
                  analysisPhase === 'processing' ? 'text-blue-400' :
                  'text-green-400'
                }`}>
                  {analysisPhase === 'idle' ? 'EN ESPERA' :
                   analysisPhase === 'listening' ? 'ESCUCHANDO...' :
                   analysisPhase === 'processing' ? 'PROCESANDO...' :
                   'TRADUCCIÓN COMPLETA'}
                </div>
                {confidence > 0 && (
                  <div className="text-sm text-gray-400">
                    Confianza: <span className="text-green-400 font-bold">{confidence}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Barra de progreso */}
            <div className="mb-6 bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-full rounded-full relative"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {isPlaying && (
                  <motion.div 
                    className="absolute right-0 top-0 h-full w-4 bg-white opacity-70 rounded-full"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
              </motion.div>
            </div>

            {/* Controles de reproducción */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-400 font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
              
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={playCurrentSound}
                  disabled={isPlaying}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                  whileHover={{ scale: isPlaying ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={20} />
                  {isAnalyzing ? 'ANALIZANDO...' : 'REPRODUCIR & TRADUCIR'}
                </motion.button>
                
                {isPlaying && (
                  <motion.button
                    onClick={pauseAudio}
                    className="p-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <Pause size={20} />
                  </motion.button>
                )}
                
                <motion.button
                  onClick={stopAudio}
                  className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RotateCcw size={20} />
                </motion.button>
              </div>
            </div>

            {/* Características del animal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentData.characteristics).map(([key, value]) => (
                <motion.div 
                  key={key} 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{key}</div>
                  <div className="text-white font-semibold">{value}</div>
                </motion.div>
              ))}
            </div>

            {/* Sonido original capturado */}
            <motion.div 
              className="mb-6 p-5 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border-l-4 border-yellow-500"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Mic className="text-yellow-500" />
                <span className="font-bold text-yellow-300">PATRÓN VOCAL DETECTADO:</span>
                <div className="ml-auto flex items-center gap-2">
                  <Radio size={16} className="text-green-400" />
                  <span className="text-xs text-green-400">SEÑAL LIMPIA</span>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-3">
                <p className="text-xl md:text-2xl font-mono text-white leading-relaxed">
                  {currentData.translation.original}
                </p>
              </div>
            </motion.div>

            {/* Traducción IA con análisis detallado */}
            <motion.div 
              className="mb-6 p-5 bg-gradient-to-r from-emerald-900 to-green-800 rounded-xl border-l-4 border-green-400"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-green-400" />
                <span className="font-bold text-green-300">TRADUCCIÓN NEURONAL IA:</span>
                <div className="ml-auto flex items-center gap-2">
                  <Target size={16} className="text-blue-400" />
                  <span className="text-xs text-blue-400">PRECISIÓN: {confidence}%</span>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-40 p-4 rounded-lg mb-4">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                  {currentData.translation.human}
                </p>
              </div>

              {/* Análisis técnico */}
              <div className="space-y-3">
                <motion.div 
                  className="bg-black bg-opacity-30 p-4 rounded-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 text-cyan-300 mb-2">
                    <Zap size={16} />
                    <span className="font-bold">ANÁLISIS TÉCNICO COMPLETO:</span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">{currentData.translation.analysis}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-3">
                  <motion.div 
                    className="bg-purple-900 bg-opacity-50 p-3 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-purple-300 font-bold text-sm">ESTADO EMOCIONAL:</span>
                    <p className="text-white">{currentData.translation.emotion}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-blue-900 bg-opacity-50 p-3 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-blue-300 font-bold text-sm">CONTEXTO SOCIAL:</span>
                    <p className="text-white">{currentData.translation.context}</p>
                  </motion.div>
                </div>

                {/* Timeline de frases */}
                {currentData.translation.phrases && (
                  <motion.div 
                    className="bg-gray-800 p-4 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Timer size={16} />
                      LÍNEA DE TIEMPO DE COMUNICACIÓN:
                    </h4>
                    <div className="space-y-2">
                      {currentData.translation.phrases.map((phrase, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3 text-sm"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <span className="bg-blue-600 text-white px-2 py-1 rounded font-mono text-xs">
                            {phrase.time}
                          </span>
                          <span className="text-gray-300">{phrase.meaning}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Nota importante */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-black bg-opacity-60 p-4 rounded-xl border border-yellow-500 border-opacity-50">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="text-yellow-400 font-bold">NOTA TÉCNICA:</span> Esta demostración utiliza sonidos sintéticos y traducciones simuladas para mostrar el concepto de traducción animal mediante IA. Los análisis y porcentajes de confianza son ficticios con fines educativos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Partículas flotantes del animal actual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            {currentData.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}