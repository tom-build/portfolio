type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string | null;
};

export function ProjectCard({
  title,
  description,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        backdrop-blur-md
        overflow-hidden
        grid grid-cols-1 gap-8 sm:grid-cols-2
        border border-white/10
        transition-all duration-300
        text-portfolio-textLight
      "
    >
      <div className="h-full w-full">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
          "
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-lg text-portfolio-grayish leading-relaxed">
          {description}
        </p>

        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={github}
            target="_blank"
            className="
              px-4 py-2 rounded-lg
              bg-portfolio-accent
              text-white
              font-medium
              hover:opacity-90
              transition
            "
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              className="
                px-4 py-2 rounded-lg
                bg-portfolio-accent
                text-white
                font-medium
                hover:opacity-90
                transition
              "
            >
              Ver site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}