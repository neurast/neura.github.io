'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl mx-auto"
      >
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="heading-md text-center">
            <span className="text-gradient">Foundation & Mission</span>
          </h2>
        </div>

        {/* Glassmorphism Card */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8 md:p-12 relative group overflow-hidden"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neura-blue/0 via-neura-cyan/10 to-neura-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Neura Smart Technologies is a <span className="text-neura-cyan font-semibold">deep-tech spin-off</span> from the Applied Robotics and AI Solutions (ARAS) group at K. N. Toosi University of Technology. Backed by over <span className="text-neura-blue font-semibold">25 years of continuous R&D</span> at the frontiers of knowledge, Neura's mission is the industrial-scale commercialization of intelligent solutions for domestic and international markets.
            </p>

            {/* Stats below */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-neura-blue">25+</div>
                <div className="text-sm text-gray-400 mt-2">Years Heritage</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-neura-cyan">100%</div>
                <div className="text-sm text-gray-400 mt-2">Research-Backed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-neura-blue">Global</div>
                <div className="text-sm text-gray-400 mt-2">Vision</div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 bg-neura-blue/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-neura-cyan/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
