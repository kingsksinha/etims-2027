interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {tag && (
        <div className={`mb-3 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="font-heading text-xs font-bold tracking-widest text-cyan uppercase">
            {tag}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-light-text sm:text-4xl lg:text-5xl leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-secondary-text ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
