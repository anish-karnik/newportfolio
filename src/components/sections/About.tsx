import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and innovation
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed mb-12"
          >
            I am a fourth-year undergraduate student at the Indian Institute of Technology pursuing Computer Science and Engineering. 
            I am eager to learn new things and motivated for applying my knowledge to relevant solutions. I want to explore this 
            diverse field, where there is always something new to uncover and evolving technology to explore.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">BTech in Computer Science and Engineering</p>
                  <p className="text-gray-600">Indian Institute of Technology Gandhinagar</p>
                  <p className="text-sm text-gray-500">2021 - Present</p>
                  <p className="text-sm text-blue-600 font-medium">CGPA: 8.93/10</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Advanced Application Engineering Intern</p>
                  <p className="text-gray-600">Accenture India</p>
                  <p className="text-sm text-gray-500">May-July 2024</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
                    <li>Developed Full Stack MERN App with Kubernetes deployment</li>
                    <li>Implemented CI/CD pipeline using Jenkins</li>
                    <li>Set up monitoring with Prometheus and Grafana</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}