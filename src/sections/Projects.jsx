import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
    {
        title: "FlowSynk",
        description:
            "An AI-powered social media automation platform. Automates responses, generates content, and simplifies workflows using OpenAI & Gemini.",
        image: "/projects/flowsynk.png",
        tags: ["Next.js", "Nest.js", "Convex", "OpenAI", "TypeScript"],
        link: "https://www.flowsynk.com/",
    },
    {
        title: "react-apple-tv-card",
        description:
            "A React 3D card library with 3D rotation, parallax, and smooth animations. Built with Framer Motion and fully TypeScript compatible.",
        image: "/projects/apple-tv-card.png",
        tags: ["NPM Package", "React", "TypeScript", "Framer Motion"],
        link: "https://github.com/blak-code-tech/react-apple-tv-card",
        github: "https://github.com/blak-code-tech/react-apple-tv-card",
    },
    {
        title: "Styleo",
        description:
            "A comprehensive beauty & salon booking platform (Web, Android, iOS) with vendor management, KYC, and real-time bookings.",
        image: "/projects/styleo.png",
        tags: ["Next.js", "Convex", "React Native", "TypeScript"],
        link: "https://styleoapp.com/",
    },
    {
        title: "Accra Lions FC",
        description:
            "Official website for the football club. Features optimized data fetching, smooth Framer Motion animations, and a mobile-first responsive design.",
        image: "/projects/alfc.png",
        tags: ["Next.js", "Tailwind", "Zustand", "Framer Motion"],
        link: "https://accralions.com/",
    },
    {
        title: "Vicdade",
        description:
            "Real-time web and mobile applications featuring live interactions and optimized performance. Built for Tagg using Next.js and React Native.",
        image: "/projects/vidcade.png",
        tags: ["Next.js", "React Native", "Ably", "Real-time"],
        link: "https://www.sophiemchen.com/vidcade",
    },
    {
        title: "Adventist Hymnal App",
        description:
            "A cross-platform mobile app with 40,000+ installs. Features hymns in 8+ languages, search, favorites, and tablet optimization.",
        image: "/projects/adventist-hymnal.png",
        tags: ["Mobile", "Java", "Android", "Cross-platform"],
        link: "https://hymnal.otoverse.org",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 
                    bg-gradient-to-t from-card via-card/50
                    to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    {project.github && <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a
                        href="https://github.com/blak-code-tech?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};