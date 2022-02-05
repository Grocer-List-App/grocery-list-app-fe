import React from 'react';
import styles from './UserDashboard.module.css';

export default function UserSection() {
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.user_card}>
        <div className={styles.image_container}>
          <img className={styles.profile_image} src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="profile" />
        </div>
        <div className={styles.text_container}>
          <h1>USER DASHBOARD</h1>
          <p>Hello <span style={{color: 'green', fontWeight: '600'}}>Bradly!</span></p>
          <p>Welcome to your dashboard!</p>
        </div>    
      </div>
    </div>
  );
}
