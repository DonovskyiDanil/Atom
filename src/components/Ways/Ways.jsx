import React from 'react';
import styles from './Ways.module.css';

const Ways = () => {
  return (
    <section className={styles.waysSection}>
      <div className={styles.container}>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>Our Services</span>
        </div>
        <h2 className={styles.title}>3 Ways To Use Atom</h2>
        <p className={styles.subtitle}>
          Atom offers 3 ways to get you a perfect name for your business.
        </p>

        <div className={styles.grid}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>🏆</div>
            <h3>Launch a Contest</h3>
            <p>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
            <div className={styles.linkWrapper}>
              <a href="#" className={styles.actionLink}>
                Launch a Contest <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>💎</div>
            <h3>Explore Names For Sale</h3>
            <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
            <div className={styles.linkWrapper}>
              <a href="#" className={styles.actionLink}>
                Explore Names For Sale <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>💼</div>
            <h3>Agency-level Managed Contests</h3>
            <p>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
            <div className={styles.linkWrapper}>
              <a href="#" className={styles.actionLink}>
                Learn More <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ways;