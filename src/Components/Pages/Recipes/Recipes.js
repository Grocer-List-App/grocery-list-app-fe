import React from 'react';
import styles from './Recipes.module.css';
import SearchBar from '../../Common/SearchBar';
import Data from '../../../Data.json';

export default function Recipes() {

  return (
    <div className={styles.recipes_container}>
        <div className={styles.user_banner}>Bradly's Recipes</div>
        <div className={styles.filter_bar}>
            <SearchBar className={styles.search_bar} placeholder='Search for recipes...' data={Data} />
        </div>
    </div>
  );
}

