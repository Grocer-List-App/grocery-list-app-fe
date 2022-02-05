import React from 'react';
import styles from './UserDashboard.module.css'

export default function NavSection() {
  return (
    <div className={styles.section_wrapper, styles.dashboard_links_wrapper}>
      <div className={styles.dashboard_link}>
        <div className={styles.dashboard_image_container}>
          <img className={styles.dashboard_link_image} alt='link cover'/>
        </div>
        <p>Example</p>
      </div>
      <div className={styles.dashboard_link}>
        <div className={styles.dashboard_image_container}>
          <img className={styles.dashboard_link_image} alt='link cover'/>
        </div>
        <p>Example</p>
      </div>
      <div className={styles.dashboard_link}>
        <div className={styles.dashboard_image_container}>
          <img className={styles.dashboard_link_image} alt='link cover'/>
        </div>
        <p>Example</p>
      </div>
      <div className={styles.dashboard_link}>
        <div className={styles.dashboard_image_container}>
          <img className={styles.dashboard_link_image} alt='link cover'/>
        </div>
        <p>Example</p>
      </div>
    </div>
  );
}
