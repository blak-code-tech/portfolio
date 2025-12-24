const experiences = [
    {
        period: "Aug 2025 — Dec 2025",
        role: "Lead Full-Stack Engineer",
        company: "PrimeStrategy Ghana Ltd",
        description:
            "Led a 4-person engineering team to build 'Styleo', a multi-platform beauty booking app. Designed system architecture (Next.js, Convex, React Native) and launched MVP for Web, Android, and iOS.",
        technologies: ["Next.js", "TypeScript", "Convex", "React Native", "Docker"],
        current: false,
    },
    {
        period: "Jan 2025 — Jun 2025",
        role: "Frontend Engineer (Contract)",
        company: "DDamoah Studios / 300 Million Legacy LLC",
        description:
            "Built an award-winning (2024 W³ Silver) Apple TV UI clone and 3D interactive showcase using React and Three.js. Created the 'react-apple-tv-card' open-source library.",
        technologies: ["React", "Three.js", "GLB", "Open Source"],
        current: false,
    },
    {
        period: "Dec 2023 — Dec 2025",
        role: "Software Developer",
        company: "Moonsquare Ltd",
        description:
            "Developed responsive web and mobile applications using Next.js and React Native. Maintained high code quality and collaborated with cross-functional teams.",
        technologies: ["Next.js", "React", "React Native"],
        current: false,
    },
    {
        period: "Dec 2023 — Dec 2024",
        role: "Frontend Developer",
        company: "Tagg",
        description:
            "Built web and mobile apps for Vicdade. Integrated Ably for real-time interactions and optimized performance across platforms.",
        technologies: ["Next.js", "React Native", "Ably"],
        current: false,
    },
    {
        period: "Jun 2024 — Dec 2024",
        role: "Frontend Developer",
        company: "Accra Lions FC",
        description:
            "Developed the official club website using Next.js and Tailwind CSS. Implemented smooth animations with Framer Motion and optimized data fetching with TanStack Query.",
        technologies: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
        current: false,
    },
    {
        period: "Mar 2021 — Feb 2024",
        role: "Full-Stack Developer",
        company: "Accolm",
        description:
            "Enhanced Business Activity Monitor (BAM) platform with Vue.js. Built Java/Spring backend features and optimized queries across SQL Server, Oracle, and PostgreSQL.",
        technologies: ["Vue.js", "Java", "Spring Boot", "MySQL", "SQL Server", "Oracle", "PostgreSQL"],
        current: false,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Career Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            speaks volumes.
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground
           animate-fade-in animation-delay-200"
                    >
                        A timeline of my professional growth, from curious beginner to
                        senior engineer leading teams and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};