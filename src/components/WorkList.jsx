import { motion } from 'framer-motion'
import WorkCard from './WorkCard'
import { projects } from '../data/projects'

export default function WorkList() {
  return (
    <section id="work" className="px-6 md:px-10 max-w-6xl mx-auto w-full py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-12 border-b border-neutral-900 dark:border-neutral-700 pb-4"
      >
        <h2 className="text-xs tracking-widest uppercase text-neutral-900 dark:text-white font-medium">
          My Work
        </h2>
        <span className="text-xs text-neutral-400 dark:text-neutral-600">{projects.length} projects</span>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <WorkCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
