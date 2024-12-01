import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Projects() {
  const projects = [
    {
      title: 'Volumetric Rendering using MLP for NeRF Models',
      description:
        "Modified NeRF Model's volumetric function with 8-layer MLP architecture, achieving 3x time reduction while maintaining comparable results.",
      technologies: ['Neural Networks', 'Computer Vision', 'Python'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'ACE Programming Language',
      description:
        'Developed a new programming language with custom compiler, parser, and code generator supporting various programming constructs.',
      technologies: ['Compiler Design', 'WASM', 'Language Design'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'Smart Proxy Server',
      description:
        'Built an intelligent proxy server with load balancing, TinyLFU caching, and gzip compression for optimized network performance.',
      technologies: ['Networking', 'Caching', 'Load Balancing'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'Laboratory Management Application',
      description:
        'Created an open-source lab management system using Flask and MySQL with Google OAuth integration.',
      technologies: ['Flask', 'MySQL', 'OAuth', 'Golang'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'Realtime Chat App using MERN Stack',
      description:
        'Designed and implemented a full-stack chat application using JavaScript, React for the frontend, and Node.js with Express for the backend. Developed secure registration, login functionalities, and avatar selection. Integrated Socket.io for real-time communication.',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'Socket.io'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'Sentiment Analysis using Natural Language Processing',
      description:
        'Employed a pre-trained NLP model from Hugging Face for sentiment analysis on comments from subreddits. Utilized AutoTokenizer for preprocessing, conducted exploratory data analysis, and performed model inference.',
      technologies: ['NLP', 'Hugging Face', 'AutoTokenizer', 'Python'],
      github: 'https://github.com/anish-karnik',
    },
    {
      title: 'Algorithmic Trading using SmartAPI',
      description:
        'Developed a smart stock trading program using broker APIs and TA-lib. Achieved approximately 75% returns on prominent stocks like Reliance, delivering an alpha of 43% and surpassing market performance.',
      technologies: ['Algorithmic Trading', 'SmartAPI', 'TA-lib'],
      github: 'https://github.com/anish-karnik',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.div className="flex gap-4" whileHover={{ scale: 1.05 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
