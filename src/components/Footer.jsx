export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 px-6 md:px-10 max-w-6xl mx-auto w-full py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
        {/* MAIN */}
        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Main</p>
          <div className="flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Resume ↗
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="mailto:taranpal.singh23@gmail.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              taranpal.singh23@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/taran-pal-singh-221659121/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              LinkedIn ↗
            </a>
            <a href="https://github.com/taranpalsingh" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Name */}
        <div className="md:text-right">
          <p className="text-2xl font-light text-neutral-200 dark:text-neutral-800 leading-tight">
            Taran Pal
            <br />
            Singh
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-neutral-300 dark:text-neutral-700">
        <span>© {year} Taran Pal Singh</span>
        <span>Built with React &amp; Tailwind</span>
      </div>
    </footer>
  )
}
