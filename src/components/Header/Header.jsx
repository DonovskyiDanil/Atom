import React, { useState } from 'react';
import styles from './Header.module.css';
import MegaMenu from '../MegaMenu/MegaMenu';
import { aiNamingMenu } from '../data/menus/aiNaming.menu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <div className={styles.logoIcon}>✦</div>
          <span className={styles.logoText}>atom</span>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.navItem}>Domains</div>
          <div 
            className={styles.navItem} 
            onMouseEnter={() => setActiveMenu('ai')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            AI Naming
            {activeMenu === 'ai' && <MegaMenu items={aiNamingMenu} />}
          </div>
          <div className={styles.navItem}>Tools</div>
          <div className={styles.navItem}>Services</div>
          <div className={styles.navItem}>Why Atom</div>
        </nav>

        <div className={styles.actions}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.icon}>👤</span>
          <span className={styles.icon}>📞</span>
          <span className={styles.icon}>❤️</span>
        </div>
      </div>
    </header>
  );
};

export default Header;