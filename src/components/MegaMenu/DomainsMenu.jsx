import React from 'react';
import styles from './DomainsMenu.module.css';
import { domainsMenu } from '../data/menus/domains.menu';

const DomainsMenu = () => {
  const items = Array.isArray(domainsMenu) ? domainsMenu : (domainsMenu?.items || []);

  return (
    <div className={styles.wrapper}>
      {/* Левая колонка: Карточки */}
      <div className={styles.cardsCol}>
        {items.map((item, idx) => (
          <div key={item.id || idx} className={styles.item}>
            <div className={styles.iconContainer}>
              <img src={item.icon} alt="" />
            </div>
            <div className={styles.info}>
              <h4>{item.title} <span className={styles.chevron}>›</span></h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Средняя колонка: Списки ссылок */}
      <div className={styles.linksCol}>
        <h5 className={styles.columnTitle}>Top Domain Collections</h5>
        <div className={styles.linkGroup}>
          <div className={styles.linkItem}>.ai Domains <span className={styles.badge}>Popular</span></div>
          <div className={styles.linkItem}>Short Domains</div>
          <div className={styles.linkItem}>One-Word Domains</div>
          <div className={styles.linkItem}>3 Letter Domains</div>
          <div className={styles.linkItem}>4 Letter Domains</div>
          <div className={styles.linkItem}>Country-Specific Domains</div>
        </div>

        <h5 className={styles.columnTitle} style={{marginTop: '25px'}}>Domain Services</h5>
        <div className={styles.linkGroup}>
          <div className={styles.linkItem}>Domain Transactions <span className={styles.badgeBlue}>AtomPay</span></div>
          <div className={styles.linkItem}>Domain Broker</div>
          <div className={styles.linkItem}>Domain Auction</div>
        </div>
      </div>

      {/* Правая колонка: Промо-блок */}
      <div className={styles.promoCol}>
        <div className={styles.promoImage}>
          <img src="/path-to-laptop-image.jpg" alt="Get Started" />
        </div>
        <div className={styles.promoContent}>
          <h4><span className={styles.searchIcon}>🔍</span> Get Started ›</h4>
          <p>Find your perfect domain today and buy instantly in the Atom.com marketplace.</p>
        </div>
      </div>
    </div>
  );
};

export default DomainsMenu;