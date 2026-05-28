'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-neura-cyan' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-neura-blue' },
    { icon: Mail, href: 'mailto:hello@neura.tech', label: 'Email', color: 'hover:text-neura-cyan' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-neura-dark to-neura-darker">
      {/* Subtle background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-neura-blue/5 to-transparent opacity-30 pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Neura</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Smart Technologies
            </p>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">
              Engineering intelligence for the real world. Building next-generation AI systems powered by decades of research.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors flex items-center gap-2">
                  Documentation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors flex items-center gap-2">
                  API Reference
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-neura-cyan transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Neura Smart Technologies. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`text-gray-400 transition-colors ${link.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs text-center mt-4 italic"
        >
          Engineered for excellence. Built for scale. Powered by decades of research.
        </motion.p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neura-blue/20 to-transparent" />
    </footer>
  )
}
