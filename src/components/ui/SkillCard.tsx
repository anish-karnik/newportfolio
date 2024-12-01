import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}