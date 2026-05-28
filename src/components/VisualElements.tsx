import { motion } from 'framer-motion'

export function GradientOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-neura-blue/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-neura-cyan/10 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function AnimatedGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(0, 107, 255, 0.3)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

export function FloatingParticles() {
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-neura-cyan rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(0, 217, 255, 0.8)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function RoboticArm() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 107, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(0, 217, 255, 0.4)" />
        </linearGradient>
      </defs>

      {/* Base */}
      <motion.circle
        cx="100"
        cy="150"
        r="15"
        fill="url(#armGradient)"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Upper arm */}
      <motion.line
        x1="100"
        y1="150"
        x2="120"
        y2="90"
        stroke="url(#armGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ transformOrigin: '100px 150px' }}
      />

      {/* Joint */}
      <motion.circle
        cx="120"
        cy="90"
        r="8"
        fill="rgba(0, 217, 255, 0.8)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />

      {/* Forearm */}
      <motion.line
        x1="120"
        y1="90"
        x2="140"
        y2="40"
        stroke="url(#armGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        animate={{ rotate: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
        style={{ transformOrigin: '120px 90px' }}
      />

      {/* End effector */}
      <motion.circle
        cx="140"
        cy="40"
        r="10"
        fill="rgba(0, 217, 255, 0.9)"
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: ['0 0 10px rgba(0, 217, 255, 0.5)', '0 0 30px rgba(0, 217, 255, 1)', '0 0 10px rgba(0, 217, 255, 0.5)'],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  )
}

export function HolographicPanel() {
  return (
    <motion.div
      className="absolute w-32 h-24 glass rounded-lg border border-neura-cyan/50 p-3"
      animate={{
        y: [0, -20, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="space-y-2">
        <div className="h-2 bg-gradient-to-r from-neura-blue to-neura-cyan rounded opacity-75" />
        <div className="h-1 bg-neura-cyan/50 rounded w-2/3" />
        <div className="h-1 bg-neura-cyan/30 rounded w-1/2" />
      </div>
    </motion.div>
  )
}

export function DataStreamLine() {
  return (
    <svg className="absolute w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 107, 255, 0)" />
          <stop offset="50%" stopColor="rgba(0, 217, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(0, 107, 255, 0)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 100 Q 250 50, 500 100"
        stroke="url(#streamGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  )
}
