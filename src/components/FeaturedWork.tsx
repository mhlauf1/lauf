// Define the structure for a project
interface Project {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

// Consolidate project data into a single array for easier management
const projectsData: Project[] = [
  {
    href: "https://www.stocadvisory.com/",
    imageSrc: "/stoc-main.png",
    alt: "Stoc Advisory",
    title: "Stoc Advisory",
    description:
      "STOC Advisory partners with middle-market businesses and private equity sponsors to accelerate growth, mitigate risk, and deliver lasting impact.",
  },
  {
    href: "https://www.cadenceprivatecapital.com/",
    imageSrc: "/cpc-new.png",
    alt: "Cadence Private Capital",
    title: "Cadence Private Capital",
    description:
      "Based in Minneapolis, Minnesota, Cadence Private Capital invests in lower middle market companies to drive maximum value for our business partners and investors.",
  },
  {
    href: "https://www.bradydigitalconsulting.com/",
    imageSrc: "/brady-main-2.png",
    alt: "Brady Digital Consulting",
    title: "Brady Digital Consulting",
    description:
      "An ecommerce consulting firm specializing in digital strategy, brand management, and PPC advertising within the digital marketplace.",
  },
  {
    href: "https://www.embarkpetservices.com/",
    imageSrc: "/embark-new.png",
    alt: "Embark Pet Services",
    title: "Embark Pet Services",
    description:
      "Embark Pet Services unites four trusted local pet care brands delivering professional boarding, grooming, daycare, and veterinary services across the Midwest. Quality care you can trust, backed by network excellence.",
  },
];

const FeaturedWork: React.FC = () => {
  return (
    <section className="md:px-[6%]  mx-4 flex flex-col py-20 md:py-28">
      <div className="flex flex-col">
        <span className="uppercase font-mono tracking-widest text-xs">
          Selected Work
        </span>
        <h2
          style={{ lineHeight: 1.2 }}
          className="text-4xl sm:text-5xl md:text-6xl tracking-tight capitalize mt-4 md:max-w-[27ch]"
        >
          Helping investment firms look sharper, move faster, and win more
          deals.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-8 md:mt-12">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item flex flex-col">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="project-image relative w-full md:h-[60vh] overflow-hidden">
                <img
                  src={project.imageSrc}
                  className="w-full h-full object-cover"
                  alt={project.alt}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold uppercase tracking-widest">
                    View Website
                  </p>
                </div>
              </div>
            </a>
            {/* This new container holds the text and acts as the animation trigger */}
            <div className="project-text-content mt-5">
              <div className="overflow-hidden">
                <h3 className="project-title font-medium tracking-tight  text-xl md:text-3xl ">
                  {project.title}
                </h3>
              </div>
              <div className="overflow-hidden">
                <p className="project-subtext text-neutral-600 text-md mt-2 text-lg md:text-xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
