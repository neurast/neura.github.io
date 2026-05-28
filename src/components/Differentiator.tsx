'use client'

import { motion } from 'framer-motion'
import { Layers, Shield, Zap } from 'lucide-react'

export function Differentiator() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="heading-md mb-6">
          <span className="text-gradient">The Neura Differentiator</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          What distinguishes Neura is its <span className="text-neura-blue font-semibold">full-stack AI development capability</span> and maturity in MLOps. The company bridges robotic hardware with cloud and on-premise AI infrastructures, enabling reliable deployment of national-scale and enterprise-grade intelligent systems.
        </p>
      </motion.div>

      {/* Feature Cards with 3D Effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Full-Stack */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 107, 255, 0.2)' }}
          className="glass rounded-xl p-8 border border-neura-blue/50 hover:border-neura-cyan/50 transition-all duration-300 group"
        >
          <div className="mb-6">
            <div className="p-4 bg-neura-blue/20 rounded-lg w-fit group-hover:bg-neura-cyan/20 transition-colors">
              <Layers className="w-8 h-8 text-neura-cyan group-hover:text-neura-blue transition-colors" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Full-Stack Mastery</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            End-to-end AI system development from perception to decision, hardware to cloud deployment.
          </p>
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-neura-blue to-neura-cyan"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Card 2: MLOps Maturity */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.2)' }}
          className="glass rounded-xl p-8 border border-neura-cyan/50 hover:border-neura-blue/50 transition-all duration-300 group"
        >
          <div className="mb-6">
            <div className="p-4 bg-neura-cyan/20 rounded-lg w-fit group-hover:bg-neura-blue/20 transition-colors">
              <Zap className="w-8 h-8 text-neura-blue group-hover:text-neura-cyan transition-colors" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">MLOps Excellence</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Production-ready systems with robust CI/CD, monitoring, scaling, and reliability frameworks.
          </p>
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-neura-cyan to-neura-blue"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Card 3: Enterprise Ready */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 107, 255, 0.2)' }}
          className="glass rounded-xl p-8 border border-neura-blue/50 hover:border-neura-cyan/50 transition-all duration-300 group"
        >
          <div className="mb-6">
            <div className="p-4 bg-neura-blue/20 rounded-lg w-fit group-hover:bg-neura-cyan/20 transition-colors">
              <Shield className="w-8 h-8 text-neura-cyan group-hover:text-neura-blue transition-colors" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Enterprise Grade</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Security, scalability, and compliance-ready infrastructure for mission-critical deployments.
          </p>
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-neura-blue to-neura-cyan"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Glowing border effect */}
      <motion.div
        className="absolute -bottom-20 right-0 w-96 h-96 bg-neura-cyan/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  )
}
