'use client'

import { motion } from 'framer-motion'
import { Eye, Bot, Cpu, Network, Zap, Radio } from 'lucide-react'

const technologies = [
  { icon: Eye, label: 'Computer Vision', accent: 'from-blue-400 to-blue-600' },
  { icon: Bot, label: 'Medical AI', accent: 'from-cyan-400 to-blue-500' },
  { icon: Bot, label: 'Robotics', accent: 'from-purple-400 to-pink-600' },
  { icon: Cpu, label: 'MLOps', accent: 'from-emerald-400 to-teal-600' },
  { icon: Zap, label: 'LLM Systems', accent: 'from-yellow-400 to-orange-600' },
  { icon: Radio, label: 'Edge AI', accent: 'from-indigo-400 to-purple-600' },
  { icon: Network, label: 'Industrial Automation', accent: 'from-red-400 to-pink-500' },
]

export function Technologies() {
  return (
    <section className="section-container relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <h2 className="heading-md mb-6">
          <span className="text-gradient">Core Technologies</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Cutting-edge AI and robotics expertise across diverse domains
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group glass rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer border border-white/10 hover:border-neura-cyan/50 transition-all"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                <Icon className="w-6 h-6 mb-2 text-neura-cyan group-hover:text-neura-blue transition-colors" />
              </motion.div>
              <p className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors">
                {tech.label}
              </p>
              <motion.div
                className="mt-2 h-1 bg-gradient-to-r from-neura-blue to-neura-cyan"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: '-50px' }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 mb-4">
          Full-stack solutions combining multiple technologies
        </p>
        <button className="button-primary">
          Learn About Our Tech Stack
        </button>
      </motion.div>
    </section>
  )
}
