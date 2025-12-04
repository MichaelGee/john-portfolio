interface BadgeProps {
  text: string;
  showLines?: boolean;
  icon?: string;
}

const Badge = ({ text, showLines = false, icon }: BadgeProps) => {
  const BadgeElement = (
    <div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#272D3D] relative"
      style={{
        backdropFilter: 'blur(10px)',
        border: '1px solid transparent',
        backgroundImage:
          'linear-gradient(#272D3D, #272D3D), linear-gradient(to bottom, #7A9DF7, #24272E, #24272E)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {icon && <img src={icon} alt="Badge Icon" className="size-5" />}

      <span
        className="text-[0.77rem] md:text-[0.875rem] font-medium text-white uppercase tracking-wider"
        style={{ fontFamily: 'var(--font-family-satoshi)' }}
      >
        {text}
      </span>
    </div>
  );

  if (!showLines) {
    return BadgeElement;
  }

  return (
    <div className="flex items-center justify-center gap-8">
      {/* Left Line */}
      <div
        className="h-[1px] w-24"
        style={{
          background: 'linear-gradient(to right, #7A9DF7, #101520)',
          transform: 'rotate(-180deg)',
        }}
      />

      {BadgeElement}

      {/* Right Line */}
      <div
        className="h-[1px] w-24"
        style={{
          background: 'linear-gradient(to right, #7A9DF7, #101520)',
        }}
      />
    </div>
  );
};

export default Badge;
