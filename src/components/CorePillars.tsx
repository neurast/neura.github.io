'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Boxes, Network } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: 'Heritage & Validation',
    description: 'Spin-off from the prestigious ARAS lab backed by decades of peer-reviewed AI and robotics research.',
    color: 'from-neura-blue/20 to-neura-cyan/10',
  },
  {
    icon: Brain,
    title: 'Cognitive AI Layers',
    description: 'Advanced computer vision and context-aware large language models for high-dimensional data processing.',
    color: 'from-neura-cyan/20 to-neura-blue/10',
  },
  {
    icon: Boxes,
    title: 'Domain Agnostic Systems',
    description: 'Scalable architectures adaptable across MedTech, automation, and enterprise ecosystems.',
    color: 'from-neura-blue/20 to-neura-cyan/10',
  },
  {
    icon: Network,
    title: 'Cyber-Physical Integration',
    description: 'Deep MLOps expertise connecting robotics, sensors, edge devices, and cloud infrastructures.',
    color: 'from-neura-cyan/20 to-neura-blue/10',
  },
]

export function CorePillars() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="section-container relative">
      {/* Background gradient */}
      <motion.div
        className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-neura-blue/5 to-transparent opacity-30 pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-6">
            <span className="text-gradient">Core Enterprise Pillars</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The foundation of Neura's differentiation and market leadership
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0, 217, 255, 0.15)' }}
                className="group glass rounded-xl p-6 border border-white/10 hover:border-neura-cyan/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="mb-4 inline-block"
                  >
                    <div className="p-3 bg-gradient-to-br from-neura-blue/20 to-neura-cyan/20 rounded-lg group-hover:from-neura-blue/40 group-hover:to-neura-cyan/40 transition-all">
                      <Icon className="w-6 h-6 text-neura-cyan" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white font-bold mb-3 group-hover:text-neura-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover indicator line */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-neura-blue to-neura-cyan"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Decorative lines connecting pillars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '-100px' }}>
          <defs>
            <linearGradient id="pillarLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 107, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(0, 217, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 107, 255, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
