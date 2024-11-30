import { HomeIcon, MonitorIcon, SettingsIcon } from 'lucide-react';

import { SidebarItem } from './SidebarItem';

const sidebarItems = [
  { icon: <HomeIcon />, href: '/' },
  { icon: <MonitorIcon />, href: '/monitors' },
  { icon: <SettingsIcon />, href: '/settings' },
];

export function Sidebar() {
  return (
    <nav className="mx-7 flex h-24 flex-shrink-0 items-center justify-center gap-x-24 border-b border-b-primary sm:gap-x-32 md:mx-14">
      {sidebarItems.map((item, itemIndex) => (
        <SidebarItem {...item} key={itemIndex} />
      ))}
    </nav>
  );
}
