export function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-hairline bg-surface px-4 py-3 text-sm leading-6 text-text-muted">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">Source note </span>
      {children}
    </p>
  );
}
