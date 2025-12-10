export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero 섹션 */}
      <section id="hero" className="section-padding min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            안녕하세요! 👋
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              개발자 포트폴리오
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            웹 개발을 사랑하는 개발자입니다
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">소개</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            안녕하세요! 저는 새로운 기술을 배우고 문제를 해결하는 것을 즐기는 개발자입니다.
            <br />
            사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
          </p>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">프로젝트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">프로젝트 {i}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    프로젝트에 대한 간단한 설명입니다. 사용된 기술과 주요 기능을 소개합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section id="skills" className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">기술 스택</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">프론트엔드</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">백엔드 & 도구</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Git', 'GitHub', 'VS Code'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">연락하기</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              📧 이메일
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              🐙 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2024 포트폴리오. All rights reserved.</p>
      </footer>
    </main>
  );
}
