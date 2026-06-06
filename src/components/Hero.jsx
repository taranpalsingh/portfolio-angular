import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-6xl mx-auto w-full pt-16">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
        <motion.p variants={item} className="text-sm text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-6">
          Technical Lead Developer · ~7 Years
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-8"
        >
          I build platforms,
          <br />
          <span className="italic font-light text-neutral-400 dark:text-neutral-600">design systems</span>
          <br />
          &amp; fast experiences.
        </motion.h1>

        <motion.p variants={item} className="text-base md:text-lg text-neutral-400 dark:text-neutral-500 max-w-lg leading-relaxed mb-12">
          Specialized in Angular, React, and TypeScript — leading engineering teams, architecting
          scalable frontends, and championing AI-assisted development workflows.
        </motion.p>

        <motion.div variants={item} className="flex items-center gap-6">
          <a
            href="#work"
            className="text-sm text-neutral-900 dark:text-white border border-neutral-900 dark:border-white px-5 py-2.5 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-all duration-200"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Resume ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
