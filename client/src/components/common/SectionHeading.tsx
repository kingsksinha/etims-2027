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
        <div className={`mb-3.5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BF982E]/40 bg-[#FAF8F5] px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#7B1123] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BF982E]" />
            <span className="uppercase">{tag}</span>
          </div>
        </div>
      )}
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1C1917] sm:text-4xl lg:text-5xl leading-[1.18]">
        <span className="inline-block w-1.5 h-6 sm:h-8 bg-[#BF982E] rounded-full mr-2.5 sm:mr-3 align-baseline" />
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-[#57534E] font-subheading ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
