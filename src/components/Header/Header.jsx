import React, { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/logo.png';
import DomainsMenu from '../MegaMenu/DomainsMenu';
import AiNamingMenu from '../MegaMenu/AiNamingMenu';
import ToolsMenu from '../MegaMenu/ToolsMenu';
import ServicesMenu from '../MegaMenu/ServicesMenu';
import WhyAtomMenu from '../MegaMenu/WhyAtomMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const navLinks = [
    { id: 'domains', label: 'Domains', component: <DomainsMenu /> },
    { id: 'ai', label: 'AI Naming', component: <AiNamingMenu /> },
    { id: 'tools', label: 'Tools', component: <ToolsMenu /> },
    { id: 'services', label: 'Services', component: <ServicesMenu /> },
    { id: 'why', label: 'Why Atom', component: <WhyAtomMenu /> },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoGroup}>
          <img src={logoImg} alt="Atom.com" className={styles.logo} />
        </a>

        <nav className={styles.nav}>
          {navLinks.map(link => (
            <div
              key={link.id}
              className={`${styles.navItem} ${activeMenu === link.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveMenu(link.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className={styles.label}>{link.label}</span>
              {activeMenu === link.id && (
                <div className={styles.menuDropdown}>{link.component}</div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <span>🔍</span><span>👤</span><span>📞</span><span>❤️</span>
        </div>
      </div>
    </header>
  );
};

export default Header;