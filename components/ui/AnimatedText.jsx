'use client';

import { motion } from 'framer-motion';

export default function AnimatedText({
  text,
  el: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.035,
  once = true,
}) {
  const words = text ? text.split(' ') : [];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-10%' }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="word-wrap inline-block overflow-hidden align-top mr-[0.28em]"
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.28em' }}
          >
            <motion.span
              className="word-inner inline-block"
              style={{ display: 'inline-block' }}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
