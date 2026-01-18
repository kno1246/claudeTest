"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // 기본값: 다크모드
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const projects = [
    {
      title: "비즈니스 매칭 플랫폼",
      period: "2023.06 - 2025.11",
      company: "(주)이즈피엠피",
      description: "온/오프라인 행사에서 비즈니스 미팅 추천 및 일정 관리를 위한 플랫폼",
      tags: ["Java", "JavaScript", "Spring MVC", "MySQL", "JSP"],
      role: "사내 API 연동을 통한 비즈니스 서비스 개발, API 및 DB 설계 보조"
    },
    {
      title: "오투미트 (O2MEET)",
      period: "2025.03 - 2025.11",
      company: "(주)이즈피엠피",
      description: "행사(이벤트, 엑스포)를 위한 온라인 플랫폼 서비스",
      tags: ["Java", "JavaScript", "Spring MVC", "MySQL"],
      role: "비즈니스 매칭 플랫폼 연계 서비스 개발 및 유지보수"
    },
    {
      title: "리드엑스",
      period: "2025.05 - 2025.06",
      company: "(주)이즈피엠피",
      description: "모바일 전용 비즈니스 미팅 일정 관리 플랫폼",
      tags: ["TypeScript", "Next.js", "Nest.js", "React", "PostgreSQL", "AWS"],
      role: "외부 업체로부터 프로젝트 인계 및 개발 환경 세팅, 배포 환경 구축"
    },
    {
      title: "오픈마켓 자동 상품 등록/관리 플랫폼",
      period: "2020.04 - 2021.02",
      company: "(주)도우테크",
      description: "다양한 오픈마켓의 API를 통한 자동 상품 등록 및 관리 시스템",
      tags: ["Java", "MySQL", "GCP", "JSP"],
      role: "쿠팡, 롯데온, 위메프, 11번가 API 연동, 배송 정보 관리 시스템 개발"
    },
    {
      title: "디키디키 키오스크",
      period: "2024.11 - 2024.12",
      company: "(주)이즈피엠피",
      description: "어린이 놀이터 사업장을 위한 키오스크 프로그램",
      tags: ["Java", "JavaScript", "Spring MVC"],
      role: "키오스크 Front-end 개발, 다국어화 및 결제 시스템 구현"
    },
    {
      title: "인제 스마트관광 서비스",
      period: "2025.07 - 2025.11",
      company: "(주)이즈피엠피",
      description: "강원 인제군 관광 플랫폼 관리자 센터",
      tags: ["Java", "JavaScript", "Spring MVC", "MySQL"],
      role: "관리자 센터 개발"
    }
  ];

  const experiences = [
    {
      company: "(주)이즈피엠피",
      period: "2023.03 - 2025.11",
      position: "Frontend 선임 연구원",
      duration: "2년 9개월"
    },
    {
      company: "(주)비젠소프트",
      period: "2022.07 - 2023.01",
      position: "Full Stack 사원",
      duration: "7개월"
    },
    {
      company: "(주)도우테크",
      period: "2020.03 - 2022.05",
      position: "Full Stack 주임",
      duration: "2년 3개월"
    }
  ];

  const skills = {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "JSP"],
    backend: ["Java", "Spring Framework", "Spring MVC", "Node.js"],
    database: ["MySQL", "PostgreSQL"],
    cloud: ["GCP", "AWS"],
    tools: ["Git", "Linux", "Ubuntu"]
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border-color)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-[var(--foreground)]">강명우</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">About</a>
              <a href="#experience" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Experience</a>
              <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Projects</a>
              <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Skills</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Contact</a>

              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[var(--foreground)] p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--card-bg)] border-t border-[var(--border-color)]">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section-padding section-bg-primary min-h-screen flex flex-col justify-center items-center pt-32">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            className="mb-6 text-sm text-[var(--accent)] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            더 나은 서비스를 위하여 끊임없이 고민하는 개발자
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <span className="gradient-text">Welcome my portfolio</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            5년 7개월 경력의 Frontend 개발자입니다.
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>B2B부터 B2C까지 폭넓은 서비스를 나은 방향으로 <br></br>발전시켜 드립니다.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-lg hover:bg-[var(--accent-hover)] transition-all font-medium text-center"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--card-bg)] border border-[var(--accent)]/30 text-[var(--foreground)] rounded-lg hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all font-medium text-center"
            >
              연락하기
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding section-bg-secondary">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-sm text-[var(--text-secondary)] mb-4 uppercase tracking-wider"
            variants={fadeInUp}
          >
            About
          </motion.h2>
          <div className="space-y-6 text-lg text-[var(--foreground)] leading-relaxed">
            <motion.p variants={fadeInUp}>
              Spring Framework, React, Next.js 등 다양한 웹개발 스킬을 기반으로
              <span className="text-[var(--accent)] font-medium"> B2B부터 B2C까지 폭넓은 비즈니스 문제를 해결</span>하는 것이 저의 특기입니다.
            </motion.p>
            <motion.p className="text-[var(--text-secondary)]" variants={fadeInUp}>
              기업용 플랫폼부터 소비자 대상 서비스까지, 다양한 프로젝트 경험을 통해
              비즈니스의 본질을 이해하고 최적의 기술 솔루션을 제안합니다.
              뛰어난 문제 해결 능력과 협업 능력으로 팀에 기여할 수 있습니다.
            </motion.p>
            <motion.p className="text-[var(--text-secondary)] border-l-2 border-[var(--accent)]/50 pl-4" variants={fadeInUp}>
              문서화와 커뮤니케이션을 중시하며, 팀과 함께 성장하는 개발을 지향합니다.
            </motion.p>
          </div>

          {/* Education & Certification */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 mt-10"
            variants={fadeInUp}
          >
            {/* Education Card */}
            <div className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">목포대학교</h3>
                <span className="text-xs text-[var(--text-tertiary)]">Education</span>
              </div>
              <p className="text-[var(--text-secondary)] mb-1">멀티미디어 공학과</p>
              <p className="text-sm text-[var(--text-tertiary)]">학사</p>
            </div>

            {/* Certification Card */}
            <div className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">정보처리기사</h3>
                <span className="text-xs text-[var(--text-tertiary)]">Certification</span>
              </div>
              <p className="text-[var(--text-secondary)] mb-1">한국산업인력공단</p>
              <p className="text-sm text-[var(--text-tertiary)]">국가기술자격</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding section-bg-primary">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-sm text-[var(--text-secondary)] mb-8 uppercase tracking-wider"
            variants={fadeInUp}
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/30 transition-all"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{exp.company}</h3>
                  <span className="text-sm text-[var(--text-tertiary)]">{exp.duration}</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-1">{exp.position}</p>
                <p className="text-sm text-[var(--text-tertiary)]">{exp.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding section-bg-secondary">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-sm text-[var(--text-secondary)] mb-8 uppercase tracking-wider"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/30 transition-all group"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[var(--text-tertiary)]">{project.period}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{project.company}</p>
                <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">{project.description}</p>
                <p className="text-sm text-[var(--text-tertiary)] mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[var(--tag-bg)] card-border text-[var(--text-secondary)] rounded text-xs hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding section-bg-primary">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-sm text-[var(--text-secondary)] mb-8 uppercase tracking-wider"
            variants={fadeInUp}
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:border-[var(--accent)]/30 transition-all"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[var(--tag-bg)] card-border text-[var(--foreground)] rounded text-sm hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:border-[var(--accent)]/30 transition-all"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[var(--tag-bg)] card-border text-[var(--foreground)] rounded text-sm hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:border-[var(--accent)]/30 transition-all"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[var(--tag-bg)] card-border text-[var(--foreground)] rounded text-sm hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="card-border rounded-lg p-6 bg-[var(--card-bg)] hover:border-[var(--accent)]/30 transition-all"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.cloud, ...skills.tools].map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[var(--tag-bg)] card-border text-[var(--foreground)] rounded text-sm hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding section-bg-secondary">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-sm text-[var(--text-secondary)] mb-8 uppercase tracking-wider"
            variants={fadeInUp}
          >
            Contact
          </motion.h2>
          <motion.h3
            className="text-4xl font-bold mb-6 gradient-text-cyan"
            variants={fadeInUp}
          >
            저와 함께 하시겠습니까?
          </motion.h3>
          <motion.p
            className="text-lg text-[var(--text-secondary)] mb-12"
            variants={fadeInUp}
          >
            새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={fadeInUp}
          >
            <a
              href="mailto:kmo1245@naver.com"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-lg hover:bg-[var(--accent-hover)] transition-all font-medium"
            >
              이메일 보내기
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border-color)] section-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-tertiary)] text-center sm:text-left">&copy; 2025 강명우. All rights reserved.</p>
            <p className="text-xs text-[var(--text-tertiary)] text-center sm:text-right">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
