"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      tags: ["Java", "Spring Boot", "MySQL", "GCP", "JSP"],
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
    backend: ["Java", "Spring Framework", "Spring Boot", "Spring MVC", "Node.js"],
    database: ["MySQL", "PostgreSQL"],
    cloud: ["GCP", "AWS"],
    tools: ["Git", "Linux", "Ubuntu"]
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#08090a]/80 backdrop-blur-xl border-b border-[#1f2225]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">강명우</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#about" className="text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors">About</a>
              <a href="#experience" className="text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors">Experience</a>
              <a href="#projects" className="text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors">Projects</a>
              <a href="#skills" className="text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors">Skills</a>
              <a href="#contact" className="text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#e6e8eb] p-2"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0f11] border-t border-[#1f2225]">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors py-2"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors py-2"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#9ba1a8] hover:text-[#e6e8eb] transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section-padding min-h-screen flex flex-col justify-center items-center pt-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 text-sm text-[#9ba1a8] animate-fade-in">
            Full-Stack Developer
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Build your product</span>
            <br />
            <span className="gradient-text">with expertise</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#9ba1a8] mb-12 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Java와 JavaScript를 다루는 5년 7개월 경력의 개발자입니다.
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>B2B 플랫폼부터 오픈마켓 자동화까지 다양한 프로젝트를 경험했습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="px-6 py-3 bg-[#e6e8eb] text-[#08090a] rounded-lg hover:bg-[#d1d4d8] transition-all font-medium text-center"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#0e0f11] card-border text-[#e6e8eb] rounded-lg hover:bg-[#1a1b1f] transition-all font-medium text-center"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[#9ba1a8] mb-4 uppercase tracking-wider">About</h2>
          <div className="space-y-6 text-lg text-[#e6e8eb] leading-relaxed">
            <p>
              스타트업 회사에서 Spring Framework를 사용한 Java 프로젝트를 GCP를 통해 웹 서비스를 한 경험이 있고,
              현재는 비즈니스 상담 플랫폼을 운영하여 B2B 서비스를 개발 및 관리하고 있습니다.
            </p>
            <p className="text-[#9ba1a8]">
              정보처리기사 자격증을 보유하고 있으며, 목포대학교 멀티미디어공학과를 졸업했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[#9ba1a8] mb-8 uppercase tracking-wider">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card-border rounded-lg p-6 bg-[#0e0f11] hover:bg-[#12131 5] transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#e6e8eb]">{exp.company}</h3>
                  <span className="text-sm text-[#6c7278]">{exp.duration}</span>
                </div>
                <p className="text-[#9ba1a8] mb-1">{exp.position}</p>
                <p className="text-sm text-[#6c7278]">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm text-[#9ba1a8] mb-8 uppercase tracking-wider">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card-border rounded-lg p-6 bg-[#0e0f11] hover:bg-[#121315] transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[#e6e8eb] group-hover:text-[#9b87f5] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#6c7278]">{project.period}</span>
                </div>
                <p className="text-sm text-[#9ba1a8] mb-2">{project.company}</p>
                <p className="text-[#9ba1a8] mb-4 text-sm leading-relaxed">{project.description}</p>
                <p className="text-sm text-[#6c7278] mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#1a1b1f] card-border text-[#9ba1a8] rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[#9ba1a8] mb-8 uppercase tracking-wider">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-border rounded-lg p-6 bg-[#0e0f11]">
              <h3 className="text-lg font-semibold mb-4 text-[#e6e8eb]">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#1a1b1f] card-border text-[#e6e8eb] rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-border rounded-lg p-6 bg-[#0e0f11]">
              <h3 className="text-lg font-semibold mb-4 text-[#e6e8eb]">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#1a1b1f] card-border text-[#e6e8eb] rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-border rounded-lg p-6 bg-[#0e0f11]">
              <h3 className="text-lg font-semibold mb-4 text-[#e6e8eb]">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#1a1b1f] card-border text-[#e6e8eb] rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-border rounded-lg p-6 bg-[#0e0f11]">
              <h3 className="text-lg font-semibold mb-4 text-[#e6e8eb]">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.cloud, ...skills.tools].map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#1a1b1f] card-border text-[#e6e8eb] rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm text-[#9ba1a8] mb-8 uppercase tracking-wider">Contact</h2>
          <h3 className="text-4xl font-bold mb-6 gradient-text-purple">프로젝트 협업하실래요?</h3>
          <p className="text-lg text-[#9ba1a8] mb-12">
            새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:kmo1245@naver.com"
              className="px-6 py-3 card-border bg-[#0e0f11] text-[#e6e8eb] rounded-lg hover:bg-[#1a1b1f] transition-all font-medium"
            >
              이메일 보내기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1f2225]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#6c7278] text-center sm:text-left">&copy; 2024 강명우. All rights reserved.</p>
            <p className="text-xs text-[#6c7278] text-center sm:text-right">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
