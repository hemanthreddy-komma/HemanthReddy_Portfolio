import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
  
  ];

  const backendSkills = ["SQL","Node.js", "Python", "Java","AWS", "MongoDB","Express"];
  const DataScience = [
    "Python",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Sci-Kit Learn",
    "Machine Learning(Basics)"
  
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {DataScience.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science and Engineering(Data Science) </strong> Vignan's Institute of Information Technology
                  (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing,DBMS,OOPS...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    AWS Cloud Virtual Internship {" "}
                  </h4>
                  <p>
                  ->Undergone AICTE approved AWS Cloud Virtual Internship at EduSkills</p>
                  <p>->Acquired hands-on knowledge in cloud architecture, deployment, and management of scalable applications on the AWS
platform.</p><p>
->Contributed to the implementation of cloud-based solutions, optimizing performance and resource allocation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Data Science Virtual Internship at TechnoHacks Solutions {" "}
                  </h4>
                  <p>
                  ->Gained hands-on experience by working on multiple data science projects, enhancing skills in data analysis and data
                  visualization.
                  </p>
                  <p>
                    ->Collected, cleaned, and analyzed large datasets to extract actionable insights and support decision-making processes. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
