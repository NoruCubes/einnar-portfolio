export default function TechnicalGrid({ opacity = 0.025, size = 80 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, #161616 1px, transparent 1px),
            linear-gradient(to bottom, #161616 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    </div>
  );
}