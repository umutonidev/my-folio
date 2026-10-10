import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin } from '@phosphor-icons/react'

const projects = [
  {
    number: '01',
    title: 'Campus Manager',
    type: 'Web development',
    featured: false,
    description:
      'A web application for keeping digital records of people entering and leaving campus, spanning the frontend, backend, database, and API testing.',
    tools: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'Postman'],
  },
  {
    number: '02',
    title: 'Electronics Shop',
    type: 'E-commerce platform',
    featured: true,
    description:
      'Currently developing an online platform for selling electronic devices, focused on giving customers a place to browse and purchase electronics.',
    tools: [],
  },
  {
    number: '03',
    title: 'IoT-Based Counterfeit Certificate Detection System',
    type: 'IoT & image classification',
    featured: false,
    description:
      'A prototype that uses image classification and a microcontroller to distinguish valid and invalid certificates, with LED indicators for the result.',
    tools: ['Edge Impulse', 'Image classification', 'Microcontroller'],
  },
  {
    number: '04',
    title: 'Automatic Motion-Based Water Tap System',
    type: 'Embedded systems',
    featured: false,
    description:
      'Contributed to an automatic tap system designed to control water flow in response to motion detected by a PIR sensor.',
    tools: ['PIR sensor', 'Relay', 'LED indicator', 'Water pump'],
  },
  {
    number: '05',
    title: 'Security Door Access Control System',
    type: 'Embedded systems',
    featured: false,
    description:
      'Contributed to a UNIPOD door-access project. The prototype moved from Arduino Uno to ESP32 after GPIO limitations were identified, alongside teammates working on software and SolidWorks design.',
    tools: ['Arduino Uno', 'ESP32', 'Access control'],
  },
]

const experiences = [
  {
    period: 'September 2026 — Present',
    role: 'Electrical Intern',
    organization: 'Central Electricals International Limited (CEIL)',
    location: 'Kigali, Rwanda',
    points: [
      'Participate in electrical and ELV building-system activities across IP CCTV, access control, fire alarm, and public address systems.',
      'Read engineering drawings and relate designs to on-site installation activities.',
      'Install and terminate Cat6 Ethernet cables with RJ45 connectors using T568B wiring; work with switches, routers, PoE, and NVR-based CCTV.',
      'Participate in access control and hotel room energy management installations involving card readers, magnetic locks, exit buttons, emergency exits, breakers, and contactors.',
    ],
  },
  {
    period: 'July 2025 — September 2025',
    role: 'Embedded Systems and IoT Intern',
    organization: 'UNIPOD, University of Rwanda',
    location: 'Rwanda',
    points: [
      'Contributed to an automatic motion-based water tap system using a PIR sensor, relay, LED indicator, and water pump.',
      'Contributed to a security door access system that moved from Arduino Uno to ESP32 after GPIO limitations were identified.',
      'Collaborated with teammates responsible for software development and SolidWorks design.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Embedded Systems & IoT',
    skills: ['Arduino Uno', 'ESP32', 'Embedded Systems', 'Internet of Things (IoT)', 'Edge Impulse', 'Proteus'],
  },
  {
    title: 'Electrical & Networking',
    skills: ['Access Control', 'IP CCTV', 'Power over Ethernet (PoE)', 'Networking', 'Electrical Engineering Drawings'],
  },
  {
    title: 'Software Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'C++', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Postman'],
  },
  {
    title: 'Design & Development Tools',
    skills: ['AutoCAD — currently learning', 'Visual Studio Code (VS Code)', 'Figma'],
  },
  {
    title: 'Working With Others',
    skills: ['Teamwork', 'Problem-solving', 'Research'],
  },
]

const training = ['KORA Coaching and Business Academy', 'EF Education First', 'Software Development — kLab']

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#about" aria-label="Fridaus, home">F<span>.</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills &amp; Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="about" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Embedded Systems · IoT · Software</p>
            <h1 id="hero-title">Hello, I’m<br /><span>Fridaus.</span></h1>
            <p className="hero-intro">
              Hello! I’m Fridaus and I enjoy learning new things, working with others, and finding ways to turn ideas into something useful. I believe in teamwork, staying curious, and learning from every experience. I’m always happy to take on new challenges, share ideas, and grow both personally and professionally.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my projects <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-location"><span aria-hidden="true" className="location-mark" /> Kigali, Rwanda</p>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src="/profile_pic.jpg" alt="Fridaus smiling for her profile portrait" width="1294" height="1536" />
            </div>
            <span className="portrait-note">Kigali, Rwanda</span>
          </div>
          <a className="scroll-cue" href="#projects"><span aria-hidden="true">↓</span> Scroll to explore</a>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" eyebrow="Selected work" title="Projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`} key={project.number}>
                <div className="project-meta">
                  <span className="project-number" aria-label={`Project ${project.number}`}>{project.number}</span>
                  <p className="project-type">{project.type}</p>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tools.length > 0 && (
                  <ul className="tag-list" aria-label={`${project.title} technologies and components`}>
                    {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap">
            <SectionHeading id="experience-title" eyebrow="Learning by doing" title="Experience" />
            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-entry" key={experience.role}>
                  <p className="experience-period">{experience.period}</p>
                  <div className="experience-detail">
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.organization}<span> · </span>{experience.location}</p>
                    <ul>
                      {experience.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
          <SectionHeading id="skills-title" eyebrow="What I work with" title="Skills & Certifications" />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className={`skill-group ${index === 2 ? 'skill-group-wide' : ''}`} key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="training-block">
            <h3>Training &amp; Certifications</h3>
            <ul className="training-list">
              {training.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-title">Let’s connect.</h2>
              <p className="contact-copy">I’m glad you stopped by. Reach out through the channels below.</p>
            </div>
            <dl className="contact-list">
              <div>
                <dt><EnvelopeSimple size={18} aria-hidden="true" />Email</dt>
                <dd><a href="mailto:ufridaus52@gmail.com">ufridaus52@gmail.com</a></dd>
              </div>
              <div>
                <dt><LinkedinLogo size={18} aria-hidden="true" />LinkedIn</dt>
                <dd><a href="https://www.linkedin.com/in/fridaus-umutoniwase-266816239" target="_blank" rel="noreferrer">View LinkedIn profile</a></dd>
              </div>
              <div>
                <dt><GithubLogo size={18} aria-hidden="true" />GitHub</dt>
                <dd><a href="https://github.com/umutonidev" target="_blank" rel="noreferrer">github.com/umutonidev</a></dd>
              </div>
              <div>
                <dt><MapPin size={18} aria-hidden="true" />Location</dt>
                <dd>Kigali, Rwanda</dd>
              </div>
            </dl>
          </div>
          <footer className="site-footer section-wrap">
            <span>Fridaus</span>
            <span>Embedded Systems · IoT · Software</span>
            <a href="#about">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}

export default App