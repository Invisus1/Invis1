export function Waveform({ bars = 28 }: { bars?: number }) {
  const delays = Array.from({ length: bars }, (_, i) => (i * 73) % 1300);
  return (
    <div className="waveform" aria-hidden="true">
      {delays.map((d, i) => (
        <span key={i} className="bar" style={{ animationDelay: `${d}ms` }} />
      ))}
    </div>
  );
}
