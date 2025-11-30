import React, { useState } from "react";
import "./App.css";

export default function App() {
  // Base de datos completa de preguntas
  const flashcardsData = [
    // Sección 1
    {
      id: 1,
      category: "Conceptos Básicos",
      question: "¿Qué es la Patogenicidad?",
      answer:
        "Es la CUALIDAD de un agente infeccioso de causar una enfermedad. Si no produce enfermedad, se considera 'apatógeno'.",
    },
    {
      id: 2,
      category: "Conceptos Básicos",
      question: "¿Qué es la Virulencia?",
      answer:
        "Es el GRADO o medida de la patogenicidad (qué tan grave es el daño que causa).",
    },
    {
      id: 3,
      category: "Conceptos Básicos",
      question: "¿Todos los microorganismos causan enfermedades?",
      answer:
        "No. Muchos participan en actividades vitales como la digestión (rumen), ciclos de nutrientes o biotecnología.",
    },
    {
      id: 4,
      category: "Conceptos Básicos",
      question:
        "¿Cuál es el rol de hongos y bacterias en el ciclo del Nitrógeno (N₂)?",
      answer:
        "Utilizan compuestos nitrogenados para su desarrollo y, a la vez, entregan alimento a la cadena trófica, ciclando el nitrógeno.",
    },
    {
      id: 5,
      category: "Conceptos Básicos",
      question: "¿Qué son los biodescomponedores?",
      answer:
        "Microorganismos (ej. bacterias marinas) que descomponen desechos de otros organismos (zooplancton) para usarlos como nutrientes.",
    },
    {
      id: 6,
      category: "Conceptos Básicos",
      question: "Menciona 3 funciones biotecnológicas de los microorganismos.",
      answer:
        "1. Producción de alimentos.\n2. Fabricación de fármacos (vacunas).\n3. Síntesis de enzimas y hormonas.",
    },
    {
      id: 7,
      category: "Conceptos Básicos",
      question: "¿Qué es una relación de 'Comensalismo'?",
      answer:
        "Una relación donde un organismo se beneficia y el otro no se ve afectado (ni beneficio ni daño).",
    },
    {
      id: 8,
      category: "Conceptos Básicos",
      question: "¿Qué es una relación de 'Simbiosis'?",
      answer:
        "Una relación estrecha donde ambos organismos se benefician mutuamente (ej. bacterias del rumen).",
    },

    // Sección 2
    {
      id: 9,
      category: "Cadena de Infección",
      question: "¿Qué es un Reservorio?",
      answer:
        "Es el hábitat natural (animado o inanimado) donde el agente infeccioso vive, se multiplica y del cual depende para sobrevivir.",
    },
    {
      id: 10,
      category: "Cadena de Infección",
      question: "¿Qué es una Fuente de Infección?",
      answer:
        "Es el lugar, objeto o ser vivo desde donde el agente pasa directamente al huésped susceptible.",
    },
    {
      id: 11,
      category: "Cadena de Infección",
      question: "¿Qué es la Transmisión Horizontal?",
      answer:
        "Transmisión lateral entre individuos de una misma población (vecinos). Puede ser directa o indirecta.",
    },
    {
      id: 12,
      category: "Cadena de Infección",
      question: "¿Qué es la Transmisión Vertical?",
      answer:
        "Transmisión de una generación a la siguiente (madre a hijo). Ej: Transplacentaria, calostro, huevo.",
    },
    {
      id: 13,
      category: "Cadena de Infección",
      question: "¿Qué es el Contacto Directo?",
      answer: "Transmisión física inmediata (mordeduras, coito, lamido, roce).",
    },
    {
      id: 14,
      category: "Cadena de Infección",
      question: "¿Qué es un Fómite?",
      answer:
        "Objeto inanimado que transporta patógenos (botas, agujas, vehículos, ropa).",
    },
    {
      id: 15,
      category: "Cadena de Infección",
      question: "¿Qué es un Vector Mecánico?",
      answer:
        "Organismo que transporta el patógeno externamente (patas/cuerpo) SIN que el patógeno se multiplique en él.",
    },
    {
      id: 16,
      category: "Cadena de Infección",
      question: "¿Qué es un Vector Biológico?",
      answer:
        "Organismo donde el patógeno SE MULTIPLICA o cumple una fase de su ciclo antes de ser transmitido (ej. garrapatas).",
    },
    {
      id: 17,
      category: "Cadena de Infección",
      question: "¿Qué es una Zoonosis?",
      answer:
        "Enfermedad transmitida de forma natural de los animales vertebrados al ser humano (y viceversa).",
    },

    // Sección 3
    {
      id: 18,
      category: "Medidas de Bioseguridad",
      question: "¿Qué función cumple el Cerco Perimetral?",
      answer:
        "Controlar el ingreso de vehículos y personas (filtro sanitario: duchas, cambio de ropa).",
    },
    {
      id: 19,
      category: "Medidas de Bioseguridad",
      question: "¿Cuál es la zona crítica a lavar en los camiones?",
      answer:
        "Al menos las RUEDAS, ya que contactan suelos externos contaminados.",
    },
    {
      id: 20,
      category: "Medidas de Bioseguridad",
      question: "¿Por qué los desechos orgánicos en el suelo son un riesgo?",
      answer:
        "Atraen otros animales (aves, roedores) o contaminan a personas al pisarlos, diseminando enfermedades.",
    },
    {
      id: 21,
      category: "Medidas de Bioseguridad",
      question: "¿Qué riesgo específico presenta el semen en bovinos?",
      answer:
        "Si es importado/no controlado, es vía de entrada de patógenos (transmisión venérea).",
    },
    {
      id: 22,
      category: "Medidas de Bioseguridad",
      question: "¿Cómo tratar equipos no desechables (agujas)?",
      answer:
        "Deben esterilizarse o pasar por desinfección (ej. luz UV) para no diseminar virus entre animales.",
    },
    {
      id: 23,
      category: "Medidas de Bioseguridad",
      question: "¿Qué hacer con las 'Carcasas' (cadáveres)?",
      answer:
        "Enviar a rendering o eliminar seguramente. NO dejar expuestas para evitar carroñeros.",
    },

    // Sección 4
    {
      id: 24,
      category: "Principios Específicos",
      question: "¿Qué es el 'Vacío Sanitario'?",
      answer:
        "Lapso de tiempo sin animales o sin contacto entre granjas para romper el ciclo de patógenos.",
    },
    {
      id: 25,
      category: "Principios Específicos",
      question: "¿En qué consiste el 'Principio Danés'?",
      answer:
        "Si visitas una granja hoy, debes esperar un tiempo (ej. 3 días) antes de entrar a otra distinta.",
    },
    {
      id: 26,
      category: "Principios Específicos",
      question: "¿Qué rol juega el agua en bioseguridad?",
      answer:
        "Puede ser vehículo de patógenos importantes, como el virus de la influenza aviar.",
    },
    {
      id: 27,
      category: "Principios Específicos",
      question: "¿Quiénes son los principales diseminadores en la granja?",
      answer:
        "Las PERSONAS (operarios, visitas, veterinarios) si no siguen protocolos.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcardsData[currentIndex];

  const handleNext = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((prev) => prev - 1), 150);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReset = () => {
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  // Progress calculation
  const progress = ((currentIndex + 1) / flashcardsData.length) * 100;

  // Get category color
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Conceptos Básicos":
        return "blue";
      case "Cadena de Infección":
        return "purple";
      case "Medidas de Bioseguridad":
        return "green";
      case "Principios Específicos":
        return "orange";
      default:
        return "gray";
    }
  };

  const categoryColor = getCategoryColor(currentCard.category);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="title">
          <span className="book-icon">📚</span>
          BioFlashcards
        </h1>
        <p className="subtitle">Aprende bioseguridad de forma interactiva</p>
      </header>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-info">
          <span>Progreso</span>
          <span>
            {currentIndex + 1} / {flashcardsData.length}
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
              backgroundColor:
                categoryColor === "blue"
                  ? "#3b82f6"
                  : categoryColor === "purple"
                  ? "#8b5cf6"
                  : categoryColor === "green"
                  ? "#10b981"
                  : categoryColor === "orange"
                  ? "#f59e0b"
                  : "#6b7280",
            }}
          ></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="card-container" onClick={handleFlip}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          {/* Front of Card */}
          <div className="card-front">
            <div className={`category-badge category-${categoryColor}`}>
              {currentCard.category}
            </div>
            <div className="question-mark">?</div>
            <h2 className="question-text">{currentCard.question}</h2>
            <div className="instruction">
              <span className="info-icon">💡</span>
              Haz clic para revelar la respuesta
            </div>
          </div>

          {/* Back of Card */}
          <div className={`card-back card-back-${categoryColor}`}>
            <div className="answer-label">
              <span className="check-icon">✅</span>
              RESPUESTA
            </div>
            <div className="exclamation-mark">!</div>
            <p className="answer-text">{currentCard.answer}</p>
            <div className="instruction-back">
              <span className="info-icon">💡</span>
              Haz clic para ver la pregunta
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`control-btn ${currentIndex === 0 ? "disabled" : ""}`}
        >
          <span className="arrow">←</span>
          Anterior
        </button>

        <button onClick={handleReset} className="reset-btn">
          <span className="reset-icon">🔄</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === flashcardsData.length - 1}
          className={`control-btn ${
            currentIndex === flashcardsData.length - 1 ? "disabled" : ""
          }`}
        >
          Siguiente
          <span className="arrow">→</span>
        </button>
      </div>

      {/* Completion Message */}
      {currentIndex === flashcardsData.length - 1 && (
        <div className="completion-message">
          <span className="celebration-icon">🎉</span>
          <div>
            <p className="completion-title">¡Completado!</p>
            <p className="completion-subtitle">
              Has revisado todas las flashcards
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
