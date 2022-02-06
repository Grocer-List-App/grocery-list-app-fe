import React from 'react';
import styles from './UserDashboard.module.css'

export default function NavSection() {
  return (
    <div className={styles.dashboard_links_wrapper} >
      <div className={styles.dashboard_link}>
        <img src='https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' className={styles.dashboard_link_image} alt='recipes'/>
        <p>Recipes</p>
      </div>
      <div className={styles.dashboard_link}>
        <img src='https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80' className={styles.dashboard_link_image} alt='schedule'/>
        <p>Schedule</p>
      </div>
      <div className={styles.dashboard_link}>
        <img src='https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80' className={styles.dashboard_link_image} alt='news feed'/>
        <p>News Feed</p>
      </div>
      <div className={styles.dashboard_link}>
        <img src='https://media.istockphoto.com/photos/robotic-process-automation-technology-to-automate-business-tasks-with-picture-id1358835459?b=1&k=20&m=1358835459&s=170667a&w=0&h=dkVjQzsFbT-4Q__-5HX89obPVwGfxBVPUOY7GAoUY1c=' className={styles.dashboard_link_image} alt='account'/>
        <p>account</p>
      </div>
    </div>
  );
}
