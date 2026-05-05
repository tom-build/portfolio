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
        border border-black/10
        rounded-2xl
        transition-all duration-300
        text-portfolio-textLight

        grid grid-cols-1 md:grid-cols-1
      "
    >
      <div className="w-full h-56 md:h-auto">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full
            object-cover
          "
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-4">

        <h3 className="text-lg md:text-xl font-semibold">
          {title}
        </h3>

        <p className="text-sm md:text-base text-portfolio-grayish leading-relaxed">
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
              text-sm md:text-base
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
                text-sm md:text-base
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