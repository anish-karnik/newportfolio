import React from 'react';
import { SkillCard } from '../ui/SkillCard';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = {
    "Languages": ["Python", "C++", "C", "JavaScript", "SQL", "HTML/CSS", "Verilog"],
    "Technologies": ["React", "Node.js", "Docker", "Kubernetes", "Jenkins", "Git", "Linux"],
    "Cloud & Databases": ["Microsoft Azure", "AWS", "Google Cloud", "MySQL"],
    "Developer Tools": ["VS Code", "Bootstrap", "Postman", "GitLab", "Prometheus"]
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCard
              key={category}
              category={category}
              skills={skillList}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}