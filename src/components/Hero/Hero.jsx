import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <span className={styles.badge}>World's #1 Naming Platform</span>
        <h1 className={styles.mainTitle}>How Does Atom Work?</h1>
        <p className={styles.subText}>
          Atom helps you come up with a great name for your business by combining 
          the power of crowdsourcing with sophisticated technology and Agency-level validation services.
        </p>
      </div>
      
      <div className={styles.videoContainer}>
        <div className={styles.videoCard}>
          <div className={styles.playButton}>
            <div className={styles.playIcon}></div>
          </div>
          <div className={styles.videoUi}>
            <div className={styles.progressBar}></div>
            <div className={styles.time}>02:05</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;