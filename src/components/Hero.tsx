'use client'

import { motion } from 'framer-motion'
import { GradientOrb, AnimatedGrid, FloatingParticles, RoboticArm, HolographicPanel } from './VisualElements'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-neura-darker via-neura-dark to-neura-darker">
      <AnimatedGrid />
      <GradientOrb />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <div className="glass px-4 py-2 rounded-full w-fit border border-neura-cyan/30">
                <span className="text-neura-cyan text-sm font-semibold">
                  AI • Robotics • MLOps • Computer Vision
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="heading-lg text-white"
            >
              Engineering Intelligence for the{' '}
              <span className="text-gradient">Real World</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Neura Smart Technologies builds next-generation AI systems, medical intelligence platforms, and cyber-physical infrastructures powered by computer vision, large language models, and advanced MLOps.
            </motion.p>

            {/* Supporting Line */}
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-400 leading-relaxed max-w-xl"
            >
              A deep-tech spin-off from the ARAS research group at K. N. Toosi University of Technology with 25+ years of AI and robotics research heritage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="button-primary flex items-center justify-center gap-2 group">
                Explore Technologies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="button-secondary flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0">
              <FloatingParticles />
              
              <div className="absolute top-1/3 right-1/4 w-48 h-48">
                <RoboticArm />
              </div>

              <div className="absolute top-20 right-20">
                <HolographicPanel />
              </div>

              <motion.div
                className="absolute bottom-32 left-1/4 w-24 h-24 glass rounded-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="p-4 space-y-2">
                  <div className="text-2xl font-bold text-neura-cyan">98%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-10 w-20 h-20 glass rounded-lg flex items-center justify-center"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-neura-blue">25+</div>
                  <div className="text-xs text-gray-400">Years R&D</div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neura-blue/5 to-neura-cyan/5 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
