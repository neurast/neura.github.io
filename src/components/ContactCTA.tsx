'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-container relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-96 left-0 w-96 h-96 bg-neura-cyan/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-96 right-0 w-96 h-96 bg-neura-blue/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 max-w-4xl mx-auto text-center py-16 md:py-24"
      >
        {/* Large heading */}
        <h2 className="heading-lg mb-6">
          <span className="text-gradient">Building the Future of Intelligent Systems</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with Neura to transform your organization with enterprise-grade AI, medical intelligence, and robotics solutions.
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="button-primary px-8 py-4 text-lg flex items-center gap-2 group">
            Start Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="button-secondary px-8 py-4 text-lg">
            Schedule Demo
          </button>
        </motion.div>

        {/* Email contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="text-gray-400">
            Questions? Reach out to{' '}
            <a href="mailto:hello@neura.tech" className="text-neura-cyan hover:text-neura-blue transition-colors font-semibold">
              hello@neura.tech
            </a>
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-transparent via-neura-cyan/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-neura-blue">25+</div>
            <div className="text-sm text-gray-400">Years Research Heritage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neura-cyan">ISO Certified</div>
            <div className="text-sm text-gray-400">Enterprise Security</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neura-blue">Global</div>
            <div className="text-sm text-gray-400">Multi-Region Ready</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
