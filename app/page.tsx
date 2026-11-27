

"use client";

import { useEffect, useState } from "react";

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Formación", href: "#education" },
  { name: "Contacto", href: "#contact" },
];

const projects = [
  {
    name: "Nombre del proyecto",
    description: "[Descripción del proyecto]",
    problem: "[Problema que busca resolver]",
    objective: "[Objetivo de la actividad]",
    technologies: "[Tecnologías utilizadas]",
    solution: "[Explicación de la solución implementada]",
    results: "[Resultados obtenidos]",
    image: "",
    repository: "",
  },
  {
    name: "Nombre del proyecto",
    description: "[Descripción del proyecto]",
    problem: "[Problema que busca resolver]",
    objective: "[Objetivo de la actividad]",
    technologies: "[Tecnologías utilizadas]",
    solution: "[Explicación de la solución implementada]",
    results: "[Resultados obtenidos]",
    image: "",
    repository: "",
  },
  {
    name: "Nombre del proyecto",
    description: "[Descripción del proyecto]",
    problem: "[Problema que busca resolver]",
    objective: "[Objetivo de la actividad]",
    technologies: "[Tecnologías utilizadas]",
    solution: "[Explicación de la solución implementada]",
    results: "[Resultados obtenidos]",
    image: "",
    repository: "",
  },
];

const skillCategories = [
  "HTML, JS Y CSS",
  "Creacion de pagina web Ingenia, pagina que buscaba ayudar a los albañiles a conseguir más empleos",
  "Bases de datos: MySQL para la creación de una base de datos para la pagina web Ingenia",
 "Habilidades Personales: Creatividad, trabajo en equipo, liderazgo, comunicación efectiva y resolución de problemas",
];

const experiences = [
  {
    number: "01",
    title: "Experiencia académica",
    description: "Desarrollo de página web en Expo Técnica del Instituto Técnico Emiliani",
    date: "[Año 2024]",
  },
  {
    number: "02",
    title: "Proyectos colaborativos",
    description: "[Desarrollo de página web en Expo de Logros del Centro !Supérate! Fundacion Frech. Encargado de presentar la APP delante de invitados especiales y desarrollo de pitch y material visual]",
    date: "[Agosto-Septiembre de 2025]",
  },
  {
    number: "03",
    title: "Actividades complementarias",
    description: "Visita a Casa de Adultos Mayores, realización de actividades recreativas con personas de la tercer edaad",
    date: "[Octubre de 2025]",
  },
];

const education = [
  {
    number: "01",
    title: "Estudios actuales",
    institution: "Instituto Técnico Emiliani",
    detail: "Bachillerato General",
    date: "Año 2024-2025",
  },
  {
    number: "02",
    title: "Cursos y certificaciones",
    institution: "Curso de Idioma Inglés en programa de la Universidad de El Salvador, Certificación MOS Excel, Certificación MOS Expert Excel y Certifiaciones TOEIC l/r and S/W",
    detail: "[Universidad de El Salvador, ¡Supérate! con apoyo de Microsoft y ETS Global]",
    date: "[2024, 2025 y 2026]",
  },
  {
    number: "03",
    title: "Reconocimientos",
    institution: "Diploma por mejor promedio en 9no Grado",
    detail: "Instituto Técnico Emiliani",
    date: "2023",
  },
];

const accent = "text-[#f48b5e]";
const buttonStyle =
  "inline-flex items-center justify-center rounded-lg bg-[#f48b5e] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/10 transition duration-300 hover:-translate-y-1 hover:bg-[#e8794b]";
const sectionTitle =
  "mb-5 text-center text-4xl font-extrabold tracking-tight text-[#0d3b66] dark:text-white sm:text-5xl";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop - 150;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-[#faf0ca] text-[#0d3b66] transition-colors duration-300 dark:bg-[#0b1220] dark:text-white">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-[#0d3b66]/5 bg-[#faf0ca]/90 px-5 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/90 sm:px-10 lg:px-[7%]">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-widest text-[#f48b5e]"
        >
          PORTAFOLIO<span className="text-[#0d3b66] dark:text-white">.</span>
        </a>

        <nav
          className={`absolute left-0 top-full w-full flex-col border-b border-[#0d3b66]/10 bg-[#faf0ca] px-8 py-5 shadow-xl dark:border-white/10 dark:bg-[#0b1220] md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:md:bg-transparent ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`py-3 text-sm font-medium transition hover:text-[#f48b5e] md:py-0 ${
                activeSection === item.href.substring(1)
                  ? "text-[#f48b5e]"
                  : "text-[#0d3b66] dark:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
            className="text-3xl transition hover:scale-110 hover:text-[#f48b5e]"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="text-3xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-20 items-center px-6 pb-16 pt-32 sm:px-10 lg:px-[7%]"
      >
        <div className="relative z-10 w-full lg:max-w-[58%]">
          <p className="mb-3 text-xl font-semibold sm:text-2xl">
            Hola, bienvenido a mi
          </p>

          <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            Portafolio<span className={accent}>.</span>
          </h1>

          <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
            <span className={accent}>[Angel Eduardo 
              Acosta Escamilla]</span>
          </h2>

          <p className="max-w-xl text-base leading-8 opacity-80 sm:text-lg">
            [Mi nombre es Angel Acosta, soy estudiante de Licenciatura en Idiomas con Especialidad
            en Adquisicón de Lenguas extranjeras y me apasiona el Inglés y la enseñanza y busco ser una 
            maestro de inglés]
          </p>

          <div className="my-8 flex gap-4">
            <a
              href="#contact"
              aria-label="Contacto"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f48b5e] text-xl font-bold text-[#f48b5e] transition hover:bg-[#f48b5e] hover:text-white"
            >
              @
            </a>
            <a
              href="#projects"
              aria-label="Proyectos"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f48b5e] text-xl font-bold text-[#f48b5e] transition hover:bg-[#f48b5e] hover:text-white"
            >
              &lt;/&gt;
            </a>
            <a
              href="#about"
              aria-label="Sobre mí"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f48b5e] text-xl font-bold text-[#f48b5e] transition hover:bg-[#f48b5e] hover:text-white"
            >
              i
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className={buttonStyle}>
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#f48b5e] px-7 py-3.5 text-sm font-semibold text-[#f48b5e] transition hover:-translate-y-1 hover:bg-[#f48b5e] hover:text-white"
            >
              Contactarme
            </a>
          </div>
        </div>

        {/* ELEMENTO CIRCULAR ANIMADO */}
        <div className="pointer-events-none absolute -right-44 top-1/2 hidden h-[650px] w-[650px] -translate-y-1/2 items-center justify-center lg:flex">
          <div className="absolute h-[430px] w-[430px] rounded-full border-2 border-dashed border-[#f48b5e]/50" />

          <div className="relative flex h-full w-full animate-[spin_24s_linear_infinite] items-center justify-center">
            {[
              "Especialidad",
              "Programación",
              "Proyectos",
              "Innovación",
            ].map((word, index) => (
              <div
                key={word}
                className="absolute flex h-24 w-44 flex-col items-center justify-center rounded-xl border border-[#f48b5e]/30 bg-[#fff9e9] text-[#f48b5e] shadow-lg dark:bg-[#17243a]"
                style={{
                  transform: `rotate(${index * 90}deg) translateX(235px)`,
                }}
              >
                <span className="text-xs font-bold">0{index + 1}</span>
                <span className="text-base font-bold">{word}</span>
              </div>
            ))}
          </div>
        </div>

      {/* ESPACIO PARA FOTO */}
<div className="relative z-10 mt-12 hidden h-[380px] w-[280px] shrink-0 items-center justify-center overflow-hidden rounded-t-[150px] rounded-b-3xl border-4 border-[#f48b5e] bg-[#fff9e9] shadow-2xl dark:bg-[#17243a] lg:absolute lg:bottom-0 lg:right-[8%] lg:flex">

  <img
    src="/images/FOTO.jpeg"
    alt="Fotografía profesional"
    className="h-full w-full object-cover object-center"
  />


</div>

        <a
          href="#about"
          aria-label="Continuar"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-4xl text-[#f48b5e] md:block"
        >
          ↓
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#fff9e9] px-6 py-24 dark:bg-[#111d30] sm:px-10 lg:px-[10%]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* IMAGEN ABOUT */}
          <div className="h-[350px] overflow-hidden rounded-3xl border-2 border-[#f48b5e] shadow-xl">
            <img
              src="/images/FOTO.jpeg"
              alt="Fotografía de About"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* TEXTO ABOUT */}
          <div>
            <h2 className="mb-8 text-4xl font-extrabold sm:text-5xl">
              Sobre <span className={accent}>mí</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold">¿Quién soy?</h3>
                <p className="text-sm leading-8 opacity-80 sm:text-base">
                  [Mi nombre es Angel Acosta. Me gusta mucho el Inglés y soy 
                  bastante apasionado a la música y a la enseñanza. Me gusta mucho
                  aprender cosas nuevas.]
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Mis objetivos</h3>
                <p className="text-sm leading-8 opacity-80 sm:text-base">
                  [Uno de mis objetivos personales es poder vivir en paz mi vida, poder 
                  ayudar a mis papás y poder tener mi propio hogar. En cuanto a mis objetivos
                  académicos, quiero graduarme de mi carrera con reconocimientos y poder tener la oportundiad de
                  estudiar afuera si es posible. En cuanto a mis objetivos profesionales, quiero poder trabajar
                  en un colegio con buen prestigio e impartir clases de inglés y poder ayudar a mis alumnos a aprender el idioma y poder tener un buen salario.]
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Mis fortalezas</h3>
                <p className="text-sm leading-8 opacity-80 sm:text-base">
                  [Mis fortalezas son que soy una persona muy observadora, me gusta mucho aprender cosas nuevas y me gusta mucho ayudar a los demás. Soy una persona muy responsable y comprometida con mis objetivos. 
                  Y también soy una persona muy creativa y me gusta mucho la música. Y por último soy una persona muy competitiva.]
                </p>
              </div>
            </div>

            <a href="#experience" className={`${buttonStyle} mt-8`}>
              Conocer más
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[7%]"
      >
        <h2 className={sectionTitle}>
          Mi <span className={accent}>experiencia</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 opacity-75">
          Experiencias académicas, actividades, prácticas y participación
          en proyectos.
        </p>

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group rounded-3xl border-b-4 border-[#f48b5e] bg-[#fff9e9] p-8 shadow-lg transition duration-300 hover:-translate-y-3 dark:bg-[#111d30]"
            >
              <span className="text-4xl font-extrabold text-[#f48b5e]">
                {experience.number}
              </span>
              <h3 className="mb-4 mt-6 text-xl font-bold">
                {experience.title}
              </h3>
              <p className="mb-8 text-sm leading-8 opacity-75">
                {experience.description}
              </p>
              <span className="text-sm font-semibold text-[#f48b5e]">
                {experience.date}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-20 bg-[#fff9e9] px-6 py-24 dark:bg-[#111d30] sm:px-10 lg:px-[7%]"
      >
        <h2 className={sectionTitle}>
          Mis <span className={accent}>proyectos</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 opacity-75">
          Proyectos desarrollados durante mi formación académica.
        </p>

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative h-80 overflow-hidden rounded-3xl bg-[#faf0ca] shadow-xl dark:bg-[#0b1220]"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Imagen del proyecto ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-[#f48b5e]/60">
                  <span className="text-3xl font-extrabold text-[#f48b5e]">
                    PROYECTO {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm opacity-60">
                    Imagen o captura del proyecto
                  </span>
                </div>
              )}

              <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-gradient-to-b from-[#0d3b66]/95 to-[#f48b5e]/95 p-7 text-center text-white transition duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0">
                <h3 className="mb-4 text-2xl font-extrabold">
                  {project.name}
                </h3>
                <p className="text-sm leading-7">
                  {project.description}
                </p>
                <a
                  href={`#project-${index}`}
                  className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0d3b66]"
                >
                  Ver detalles ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* DETALLES DE CADA PROYECTO */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8">
          {projects.map((project, index) => (
            <article
              id={`project-${index}`}
              key={`detail-${index}`}
              className="scroll-mt-28 rounded-3xl bg-[#faf0ca] p-7 shadow-lg dark:bg-[#0b1220] sm:p-10"
            >
              <h3 className="mb-8 text-2xl font-extrabold text-[#f48b5e]">
                {project.name}
              </h3>

              <div className="grid gap-7 sm:grid-cols-2">
                {[
                  ["Descripción", project.description],
                  ["Problema que resuelve", project.problem],
                  ["Objetivo", project.objective],
                  ["Tecnologías utilizadas", project.technologies],
                  ["Solución implementada", project.solution],
                  ["Resultados obtenidos", project.results],
                ].map(([label, value]) => (
                  <div key={label}>
                    <h4 className="mb-2 text-base font-bold">{label}</h4>
                    <p className="text-sm leading-7 opacity-75">{value}</p>
                  </div>
                ))}
              </div>

              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonStyle} mt-8`}
                >
                  Ver repositorio ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[7%]"
      >
        <h2 className={sectionTitle}>
          Mis <span className={accent}>habilidades</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 opacity-75">
          Conocimientos técnicos y habilidades personales.
        </p>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article
              key={category}
              className="rounded-2xl border-l-4 border-[#f48b5e] bg-[#fff9e9] p-7 shadow-lg transition hover:-translate-y-2 dark:bg-[#111d30]"
            >
              <span className="text-3xl font-extrabold text-[#f48b5e]">
                0{index + 1}
              </span>
              <h3 className="mb-4 mt-5 text-lg font-bold">{category}</h3>
              <p className="text-sm leading-7 opacity-75">
                [Añade aquí las habilidades que realmente conoces.]
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="scroll-mt-20 bg-[#fff9e9] px-6 py-24 dark:bg-[#111d30] sm:px-10 lg:px-[7%]"
      >
        <h2 className={sectionTitle}>
          Formación <span className={accent}>académica</span>
        </h2>

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl bg-[#faf0ca] p-8 shadow-lg transition hover:-translate-y-3 dark:bg-[#0b1220]"
            >
              <span className="text-4xl font-extrabold text-[#f48b5e]">
                {item.number}
              </span>
              <h3 className="mb-5 mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mb-2 text-sm font-semibold">{item.institution}</p>
              <p className="text-sm leading-7 opacity-75">{item.detail}</p>
              <p className="mt-7 text-sm font-semibold text-[#f48b5e]">
                {item.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[7%]"
      >
        <h2 className={sectionTitle}>
          Contácta<span className={accent}>me</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-8 opacity-75">
          Puedes comunicarte conmigo a través de los siguientes medios.
        </p>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="grid gap-5">
            {[
              {
                icon: "✉",
                title: "Correo electrónico",
                detail: "[Tu dirección de correo]",
                link: "",
              },
              {
                icon: "⌘",
                title: "GitHub",
                detail: "[Tu perfil de GitHub]",
                link: "",
              },
              {
                icon: "in",
                title: "LinkedIn",
                detail: "[Tu perfil profesional, si tienes]",
                link: "",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-[#fff9e9] p-7 shadow-lg dark:bg-[#111d30]"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f48b5e] text-xl font-bold text-white">
                  {item.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="mb-3 text-sm opacity-75">{item.detail}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-[#f48b5e]"
                  >
                    Visitar ↗
                  </a>
                )}
              </article>
            ))}
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl bg-[#fff9e9] p-7 shadow-lg dark:bg-[#111d30] sm:p-9"
          >
            <h3 className="mb-7 text-2xl font-bold">
              Envíame un mensaje
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre completo"
                required
                className="w-full rounded-xl border border-[#0d3b66]/10 bg-[#faf0ca] p-4 text-sm text-[#0d3b66] outline-none transition focus:border-[#f48b5e] dark:border-white/10 dark:bg-[#0b1220] dark:text-white"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-full rounded-xl border border-[#0d3b66]/10 bg-[#faf0ca] p-4 text-sm text-[#0d3b66] outline-none transition focus:border-[#f48b5e] dark:border-white/10 dark:bg-[#0b1220] dark:text-white"
              />
            </div>

            <input
              type="text"
              placeholder="Asunto"
              required
              className="mt-4 w-full rounded-xl border border-[#0d3b66]/10 bg-[#faf0ca] p-4 text-sm text-[#0d3b66] outline-none transition focus:border-[#f48b5e] dark:border-white/10 dark:bg-[#0b1220] dark:text-white"
            />

            <textarea
              rows={6}
              placeholder="Escribe tu mensaje..."
              required
              className="mt-4 w-full resize-y rounded-xl border border-[#0d3b66]/10 bg-[#faf0ca] p-4 text-sm text-[#0d3b66] outline-none transition focus:border-[#f48b5e] dark:border-white/10 dark:bg-[#0b1220] dark:text-white"
            />

            <button type="submit" className={`${buttonStyle} mt-5`}>
              Enviar mensaje
            </button>

            <p className="mt-4 text-xs leading-6 opacity-60">
              Formulario visual. Necesita una integración para enviar
              mensajes.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-wrap items-center justify-between gap-5 bg-[#fff9e9] px-6 py-8 dark:bg-[#111d30] sm:px-10 lg:px-[7%]">
        <p className="text-sm opacity-75">
          Portafolio profesional | Todos los derechos reservados.
        </p>

        <a
          href="#home"
          aria-label="Volver al inicio"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f48b5e] text-2xl font-bold text-white transition hover:-translate-y-1"
        >
          ↑
        </a>
      </footer>
    </main>
  );
}
