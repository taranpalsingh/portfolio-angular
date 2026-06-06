import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ImagePlaceholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
      <p className="text-sm text-neutral-300 dark:text-neutral-600 tracking-widest uppercase">{title}</p>
    </div>
  )
}

function TitleBar({ title, company }) {
  return (
    <div className="relative flex items-center px-4 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-t-xl border-b border-neutral-300 dark:border-neutral-700 shrink-0">
      {/* Traffic lights */}
      <div className="flex items-center gap-2 z-10">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>

      {/* Centered window title */}
      <span className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500 dark:text-neutral-400 pointer-events-none">
        {company} — {title}
      </span>
    </div>
  )
}

export default function WorkCard({ project, index }) {
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 mb-6 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-neutral-950/60 transition-shadow duration-300 cursor-pointer"
    >
      <TitleBar title={project.title} company={project.company} />

      {/* Window content */}
      <div className="p-6 md:p-8">
        {/* Banner image */}
        <div className="overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          {imgError ? (
            <ImagePlaceholder title={project.title} />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>

        {/* Card meta */}
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
              <span className="text-sm text-neutral-400 dark:text-neutral-600">{project.year}</span>
            </div>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              <span className="text-neutral-400 dark:text-neutral-600">{project.company}</span>
              {' — '}
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
