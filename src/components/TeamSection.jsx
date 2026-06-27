import { motion } from "framer-motion";

export default function TeamSection() {
  const founders = [
    {
      name: "Tasswar Hasib",
      role: "Founder & CEO",
      desc: "A visionary leader with a solid foundation in Computer Science and an unyielding passion for transforming concepts into powerful digital solutions that redefine industries.",
      stack: ["Strategic Leadership", "Innovation", "Computer Science"],
      image: "/team/founder.jpg",
    },
    {
      name: "Ayaz Khan",
      role: "Co-Founder & CTO",
      desc: "Skilled full-stack engineer driving innovation by architecting secure, high-performance web applications and integrating advanced technologies across diverse industries.",
      stack: ["AWS", "MERN Stack", "Scalable Architecture"],
      image: "/team/co-founder.jpeg",
    },
  ];

  const teamMembers = [
    {
      name: "Ayaz Khan",
      role: "Developer Team Lead",
      stack: ["AWS", "MERN Stack", "Scalable Architecture"],
      image: "/team/co-founder.jpeg",
    },
    {
      name: "Ashina Afsha",
      role: "Creative Head",
      stack: ["Creative Direction", "UI/UX Strategy", "Brand Identity"],
      image: "/team/ashina.webp",
    },
    {
      name: "Pintu Kumar",
      role: "Social Media Head",
      stack: ["Social Strategy", "Brand Growth", "Content Engagement"],
      image: "/team/pintu.webp",
    },
    {
      name: "Kamlesh Yadav",
      role: "Ads & SEO Expert",
      stack: ["SEO Optimization", "Google Ads", "Growth Analytics"],
      image: "/team/kamlesh.webp",
    },
    {
      name: "Md. Saif",
      role: "Website Developer",
      stack: ["Frontend Development", "Web Performance", "JavaScript"],
      image: "/team/saif.webp",
    },
    {
      name: "Anshuman Singh",
      role: "Website Developer",
      stack: ["React.js", "Tailwind CSS", "Responsive Design"],
      image: "/team/anshuman.webp",
    },
    {
      name: "Purushottam Thakur",
      role: "Website Developer",
      stack: ["Web Architectures", "Modern UI", "State Management"],
      image: "/team/purushottam.webp",
    },
    {
      name: "Preet Tyagi",
      role: "Website Developer",
      stack: ["HTML5/CSS3", "JavaScript", "Component Design"],
      image: "/team/preet.webp",
    },
    {
      name: "Mohammad Aarish",
      role: "Website Developer",
      stack: ["Next.js", "Web Security", "API Integration"],
      image: "/team/aarish.webp",
    },
  ];

  return (
    <>
      {/* LEADERSHIP SECTION */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Soft Ambient Radial Backing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-24 lg:space-y-36">
            {/* FOUNDER 1: Tasswar Hasib */}
            {founders[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                <div className="lg:col-span-5 relative group mx-auto lg:mx-0">
                  <div className="absolute inset-0 rounded-full translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ">
                    <img
                      src={founders[0].image}
                      alt={founders[0].name}
                      className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.01] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    <span>Executive Leadership</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                      {founders[0].name}
                    </h2>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {founders[0].role}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    {founders[0].desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {founders[0].stack.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* FOUNDER 2: Ayaz Khan */}
            {founders[1] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    <span>Technical Direction</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                      {founders[1].name}
                    </h2>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {founders[1].role}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    {founders[1].desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {founders[1].stack.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 relative group mx-auto lg:mx-0">
                  <div className="absolute inset-0  rounded-full -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
                    <img
                      src={founders[1].image}
                      alt={founders[1].name}
                      className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.01] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CORE TEAM GRID SECTION */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* TEAM CORE HEADER */}
          <div className="max-w-3xl mb-16 lg:mb-20 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
              Our Team
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              The People Behind Your Growth
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              A specialized team focused completely on digital strategies,
              system infrastructure, and high-performance engineering.
            </p>
          </div>

          {/* 4-COLUMN TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.03)] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Subtle Top Node Header Indicator */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5"></div>

                  {/* ENLARGED TEAM MEMBER IMAGE CONTAINER */}
                  <div className="mb-5 flex justify-start">
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-slate-100 bg-slate-50 shadow-sm shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`;
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-blue-700 mt-1 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* SKILL STACK PILLS */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {member.stack.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
