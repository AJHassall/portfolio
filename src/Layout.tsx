// RootLayout.tsx
import { IconFileCv, IconHome } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { ActionToggle } from './components/ColorSchemeToggle/Toggle';
import classes from './Layout.module.css';

const tabs = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/resume', label: 'Résumé', icon: IconFileCv },
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
      <span className={classes.IconLabel}>{item.label}</span>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <nav className={classes.navbar}>
        <div className={classes.navbarInner}>
          <div className={classes.navbarMain}>
            {links}

            <div className={classes.link} >
              <ActionToggle className={classes.linkIcon} />
              <span className={classes.IconLabel}>Toggle theme </span>
            </div>
          </div>
          S
        </div>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
}
