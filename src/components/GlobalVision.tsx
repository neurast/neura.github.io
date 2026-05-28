'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Shield } from 'lucide-react'

export function GlobalVision() {
  return (
    <section className="section-container relative">
      {/* Animated background */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-neura-blue/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
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
            <span className="text-gradient">Global Vision, Enterprise Ready</span>
          </h2>
        </motion.div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <div className="glass rounded-lg p-8 border border-neura-blue/50 hover:border-neura-cyan/50 transition-all">
              <motion.div className="mb-4 inline-block p-3 bg-neura-blue/20 rounded-lg">
                <Globe className="w-6 h-6 text-neura-cyan" />
              </motion.div>
              <h3 className="text-white font-bold mb-3">International Scalability</h3>
              <p className="text-gray-400 text-sm">
                Designed for global deployment across diverse markets and regulatory frameworks
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-neura-blue/10 to-neura-cyan/5 rounded-lg p-6 border border-white/10"
            >
              <div className="text-sm text-gray-300">
                <span className="text-neura-cyan font-bold">50+ Countries</span>
                <p className="mt-2 text-xs text-gray-400">
                  Infrastructure ready for multi-region deployment
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <div className="glass rounded-lg p-8 border border-neura-cyan/50 hover:border-neura-blue/50 transition-all">
              <motion.div className="mb-4 inline-block p-3 bg-neura-cyan/20 rounded-lg">
                <Zap className="w-6 h-6 text-neura-blue" />
              </motion.div>
              <h3 className="text-white font-bold mb-3">Enterprise Integration</h3>
              <p className="text-gray-400 text-sm">
                Seamless APIs and deployment options for existing enterprise systems
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-neura-cyan/10 to-neura-blue/5 rounded-lg p-6 border border-white/10"
            >
              <div className="text-sm text-gray-300">
                <span className="text-neura-blue font-bold">Fortune 500 Ready</span>
                <p className="mt-2 text-xs text-gray-400">
                  Enterprise SLAs and dedicated support
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <div className="glass rounded-lg p-8 border border-neura-blue/50 hover:border-neura-cyan/50 transition-all">
              <motion.div className="mb-4 inline-block p-3 bg-neura-blue/20 rounded-lg">
                <Shield className="w-6 h-6 text-neura-cyan" />
              </motion.div>
              <h3 className="text-white font-bold mb-3">Compliance & Security</h3>
              <p className="text-gray-400 text-sm">
                ISO 27001, GDPR, HIPAA, and industry-specific certifications
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-neura-blue/10 to-neura-cyan/5 rounded-lg p-6 border border-white/10"
            >
              <div className="text-sm text-gray-300">
                <span className="text-neura-cyan font-bold">Data Sovereignty</span>
                <p className="mt-2 text-xs text-gray-400">
                  Multi-region compliance and local data residency
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-200">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
