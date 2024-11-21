import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const transition = { duration: 0.5 };

const Home = () => {
  const [links] = useState([
    {
      title: 'GitHub',
      url: 'https://github.com/matiasbongiovanni',
      icon: '🌐'
    },
    {
      title: 'Portfolio', 
      url: 'https://matiasbongiovanni.vercel.app',
      icon: '📝'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/matiasbongiovanni',
      icon: '💼'
    }
  ]);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#191919] text-white py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://github.com/matiasbongiovanni.png"
            alt="Matias Bongiovanni profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold mb-2"
          >
            Matias Bongiovanni
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.6 }}
            className="text-gray-300"
          >
            FrontEnd Developer
          </motion.p>
        </motion.header>

        <nav className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-lg p-4 text-center"
              aria-label={`Visit ${link.title}`}
            >
              <span className="mr-2" role="img" aria-label={link.title}>{link.icon}</span>
              <span className="font-medium">{link.title}</span>
            </motion.a>
          ))}
        </nav>

        <motion.footer 
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          <p>© 2024 |  Matias Bongiovanni</p>
        </motion.footer>
      </div>
    </motion.main>
  );
};

export default Home;