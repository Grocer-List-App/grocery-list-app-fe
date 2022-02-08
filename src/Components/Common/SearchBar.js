import React from 'react';
import styles from './Common.module.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({ placeholder, handleSearch, clearInput, state }) {

  return (
    <div className={styles.search}>
      <div className={styles.search_inputs}>
        <input type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          name='enteredWord'
          value={state.enteredWord}
        />
        <div className={styles.search_icon}>
          {state.enteredWord === '' ? <SearchIcon /> : <CloseIcon id={styles.close_button} onClick={clearInput}/>}
        </div>
      </div>
    </div>
);
}
