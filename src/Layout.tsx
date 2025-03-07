// RootLayout.tsx
import {
  IconBellRinging,
  IconReceipt2,
  IconFingerprint,
  IconKey,
} from '@tabler/icons-react';
import classes from './Layout.module.css';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { link: '/projects', label: 'Projects', icon: IconBellRinging },
  { link: '/contact', label: 'Contact', icon: IconReceipt2 },
  { link: '/experience', label: 'Experience', icon: IconFingerprint },
  { link: '/skills', label: 'Skills', icon: IconKey },
];

export function RootLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const activePath = location.pathname;

  const links = tabs.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={(activePath === item.link).toString()}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <nav className={classes.navbar}>

        <div className={classes.navbarInner}>
          <div className={classes.navbarMain}>{links}</div>
        </div>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
}