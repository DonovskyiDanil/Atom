import React from 'react';
import styles from './MegaMenu.module.css';

const MegaMenu = ({ items }) => {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.content}>
              <h4>{item.title} <span className={styles.arrow}>›</span></h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;