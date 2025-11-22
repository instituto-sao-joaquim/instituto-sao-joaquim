interface LiDotProps {
  color?: string;
  children: React.ReactNode;
}

export default function LiDot({ color = "var(--color-dark-green)", children }: LiDotProps) {
  return (
    <li className="li-dot" style={{ "--dot-color": color } as React.CSSProperties}>
      {children}
    </li>
  );
}
