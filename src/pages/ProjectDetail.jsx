import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

function ImageModal({ src, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={src}
          alt=""
          className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <p className="text-neutral-500">Project not found.</p>
        <Link to="/" className="text-sm underline underline-offset-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          ← Back home
        </Link>
      </div>
    )
  }

  const images = project.images ?? [project.image]
  const bullets = Array.isArray(project['description-full'])
    ? project['description-full']
    : [project['description-full'] ?? project.description]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {lightbox && <ImageModal src={lightbox} onClose={() => setLightbox(null)} />}

      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            ← Back
          </Link>
          <span className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
            {project.company}
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">{project.title}</h1>
            <span className="text-sm text-neutral-400 dark:text-neutral-600 mt-1 sm:mt-0">{project.year}</span>
          </div>

          <p className="text-sm text-neutral-400 dark:text-neutral-600 mb-6">{project.company}</p>

          <ul className="space-y-2 max-w-2xl">
            {bullets.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                {point}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image catalogue */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h2 className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-3">
            Gallery
          </h2>

          {images.length === 1 ? (
            <div
              className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-zoom-in"
              onClick={() => setLightbox(images[0])}
            >
              <img
                src={images[0]}
                alt={project.title}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  className={`rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-zoom-in hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors${i === 0 && images.length % 2 !== 0 ? ' sm:col-span-2' : ''}`}
                  onClick={() => setLightbox(src)}
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
