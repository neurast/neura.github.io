'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '1998',
    title: 'ARAS Lab Founded',
    description: 'Establishment of the Applied Robotics and AI Solutions laboratory at K. N. Toosi University of Technology',
    status: 'complete',
  },
  {
    year: '2010s',
    title: 'Research Excellence',
    description: 'Decades of peer-reviewed research and groundbreaking publications in AI and robotics',
    status: 'complete',
  },
  {
    year: '2020-2022',
    title: 'Medical AI Innovation',
    description: 'Recognition as innovation hub in Medical AI and surgical data science',
    status: 'complete',
  },
  {
    year: '2023',
    title: 'Neura Founded',
    description: 'Official spin-off and commercialization of ARAS research',
    status: 'complete',
  },
  {
    year: 'Now',
    title: 'Enterprise Scale',
    description: 'Global deployment of national-scale and enterprise-grade intelligent systems',
    status: 'active',
  },
]

export function ResearchHeritage() {
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
          <span className="text-gradient">From Academic Excellence to Enterprise Scale</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          25+ years of continuous research and innovation
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Center line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neura-blue via-neura-cyan to-neura-blue"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        {/* Timeline items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-lg p-6 border border-white/10 hover:border-neura-cyan/50 transition-all"
                >
                  <div className="text-sm font-bold text-neura-cyan mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 z-10"
              >
                <motion.div
                  animate={milestone.status === 'active' ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-6 h-6 rounded-full border-4 border-neura-darker flex items-center justify-center ${
                    milestone.status === 'complete'
                      ? 'bg-neura-cyan'
                      : 'bg-neura-blue'
                  }`}
                >
                  {milestone.status === 'active' && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </motion.div>
              </motion.div>

              {/* Empty space */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
