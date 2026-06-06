import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'D3.js', 'AmCharts', 'Tailwind', 'SCSS', 'Material UI', 'PrimeNG'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs', '.NET'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD Pipelines'],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'Nx Monorepo', 'Storybook', 'ElasticSearch', 'Cypress', 'Jest'],
  },
]

const experience = [
  {
    company: 'Eckler',
    role: 'Technical Lead Developer',
    period: 'Oct 2023 – Present',
    logo: '/assets/companies/Eckler.svg',
    url: 'https://www.eckler.ca/',
  },
  {
    company: 'Falcon',
    role: 'Lead Frontend Developer',
    period: 'May 2020 – Oct 2023',
    logo: '/assets/companies/Kite1.png',
    url: 'https://falconfs.com/',
  },
  {
    company: 'Reach',
    role: 'Frontend Developer',
    period: 'Aug 2021 – Apr 2022',
    logo: '/assets/companies/reach.svg',
    url: 'https://www.reachhq.com/',
  },
  {
    company: 'Cybergroup',
    role: 'Full Stack Developer',
    period: 'Jan 2019 – May 2020',
    logo: '/assets/companies/Cybergroup.png',
    url: 'https://www.cygrp.com/',
  },
  {
    company: 'Alchem Synergy',
    role: 'Full-Stack Developer',
    period: 'Freelance',
    logo: '/assets/companies/alchem.jfif',
    url: 'https://www.linkedin.com/company/alchem-synergy/',
  }
]

const education = [
  {
    school: 'University of Windsor',
    degree: 'MEng — Electrical & Computer Engineering',
    period: 'May 2022 – Aug 2023',
    note: "Selected for Epic Founder's Program · CAD $2,000 award",
  },
  {
    school: 'Shiv Nadar University',
    degree: 'BTech — Electrical & Electronics Engineering',
    period: 'Apr 2015 – Jan 2019',
    note: '100% scholarship · CAD $50,000',
  },
]

function CompanyInitials({ name }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="w-9 h-9 bg-neutral-900 dark:bg-white flex items-center justify-center shrink-0">
      <span className="text-white dark:text-neutral-900 text-xs font-medium">{initials}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="px-6 md:px-10 max-w-6xl mx-auto w-full py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4"
        >
          About
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — bio + skills + education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">
              Technical Lead Developer with about 7 years building enterprise-scale platforms,
              analytics tools, and cross-platform applications.
            </p>
            <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed mb-10">
              Specialized in Angular, React, and TypeScript with a strong focus on performance
              optimization and design systems. I champion AI-assisted development workflows
              using GitHub Copilot and Claude, and have a proven track record of leading
              engineering teams in agile environments.
            </p>

            {/* Skills by category */}
            <div className="space-y-5 mb-12">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-5">Education</p>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.school}>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">{edu.school}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{edu.degree}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-0.5">{edu.period} · {edu.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + contact + experience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 max-w-xs overflow-hidden">
              <img
                src="/assets/profile.jpeg"
                alt="Taran Pal Singh"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 dark:text-neutral-700 w-4">@</span>
                <a href="mailto:taranpal.singh23@gmail.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  taranpal.singh23@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 dark:text-neutral-700 w-4">in</span>
                <a href="https://www.linkedin.com/in/taran-pal-singh-221659121/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 dark:text-neutral-700 w-4">gh</span>
                <a href="https://github.com/taranpalsingh" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  GitHub ↗
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 dark:text-neutral-700 w-4">lc</span>
                <a href="https://leetcode.com/u/tptaran/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  LeetCode · tptaran ↗
                </a>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-5">Experience</p>
              <div className="flex flex-col gap-4">
                {experience.map((exp) => (
                  <a
                    key={exp.company}
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    {exp.logo ? (
                      <div className="w-9 h-9 bg-white border border-neutral-200 dark:border-neutral-600 flex items-center justify-center overflow-hidden shrink-0">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
                      </div>
                    ) : (
                      <CompanyInitials name={exp.company} />
                    )}
                    <div>
                      <p className="text-sm text-neutral-900 dark:text-white group-hover:underline leading-tight">{exp.company}</p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-600">{exp.role} · {exp.period}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
