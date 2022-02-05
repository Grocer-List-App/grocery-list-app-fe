import React from 'react';
import UserSection from './UserSection';
import NavSection from './NavSection';
import styles from './UserDashboard.module.css';

export default function UserDashboard() {
  return (
    <div className={styles.dashboard_container}>
      <UserSection />
      <NavSection />
    </div>
  );
}
