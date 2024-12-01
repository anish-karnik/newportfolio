import React from 'react';
import { Github, Mail, FileText, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ParticlesBackground } from '../ui/ParticlesBackground';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pt-16 relative overflow-hidden animate-gradient"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Anish Karnik
            </h1>
            <div className="text-xl text-gray-600 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Programmer',
                  2000,
                  'ML Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/anish-karnik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/anish-karnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/15YQ7yRnsIDw70mQRcMv3d3sODyYowCid/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                <FileText size={20} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="https://drive.google.com/file/d/1LlTGNnkARTdEq4f6JfLIpY0vr5BPvyoz/view?usp=drive_link"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
