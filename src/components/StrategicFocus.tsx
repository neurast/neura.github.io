'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Cpu } from 'lucide-react'

export function StrategicFocus() {
  const floatingVariants = {
    initial: { y: 0, opacity: 0.8 },
    animate: {
      y: [0, -20, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="section-container relative">
      <div className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-md mb-6">
            <span className="text-gradient">Strategic Focus & Technological Breadth</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The company develops AI-powered decision-support engines built on computer vision and large language models. While Neura is recognized as an innovation hub in Medical AI and surgical data science, its modular and domain-agnostic architectures enable deployment across industrial automation and enterprise integration ecosystems.
          </p>
        </motion.div>

        {/* Animated Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 107, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(0, 217, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(0, 107, 255, 0.3)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="33%"
              y1="50%"
              x2="66%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.line
              x1="66%"
              y1="50%"
              x2="99%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            />
          </svg>

          {/* Card 1 */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass rounded-xl p-6 border-l-2 border-neura-blue hover:border-neura-cyan transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neura-blue/20 rounded-lg">
                <Brain className="w-6 h-6 text-neura-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">Computer Vision</h3>
                <p className="text-gray-400 text-sm">Advanced perception engines for real-world understanding</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 border-l-2 border-neura-cyan hover:border-neura-blue transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neura-cyan/20 rounded-lg">
                <Zap className="w-6 h-6 text-neura-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">LLM Systems</h3>
                <p className="text-gray-400 text-sm">Context-aware language models for enterprise intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-6 border-l-2 border-neura-blue hover:border-neura-cyan transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neura-blue/20 rounded-lg">
                <Cpu className="w-6 h-6 text-neura-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">MLOps</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade ML infrastructure and deployment</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data Stream Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-32 glass rounded-xl p-6 overflow-hidden"
        >
          {/* SVG Data Stream */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 107, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 217, 255, 0.8)" />
                <stop offset="100%" stopColor="rgba(0, 107, 255, 0)" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="50"
              cy="64"
              r="8"
              fill="rgba(0, 217, 255, 0.6)"
              animate={{ r: [8, 15, 8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M 60 64 Q 150 20, 240 64"
              stroke="url(#dataStreamGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
          <div className="relative z-10 text-sm text-gray-300">
            Real-time AI data processing pipeline
          </div>
        </motion.div>
      </div>
    </section>
  )
}
