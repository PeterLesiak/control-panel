'use client';

import type { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface SidebarItemProps {
  icon: ReactElement;
  href: string;
}

export function SidebarItem({ icon, href }: SidebarItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition-colors duration-500 hover:text-primary ${pathname == href ? 'text-primary' : ''}`}
    >
      {icon}
    </Link>
  );
}
