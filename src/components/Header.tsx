import type { PropsWithChildren } from 'react';

export default function Header({ children }: PropsWithChildren) {
  return (
    <h1 className="text-[clamp(1.6rem,5vw,2.6rem)] font-bold text-primary [text-shadow:0_0_3px_lime]">
      {children}
    </h1>
  );
}
