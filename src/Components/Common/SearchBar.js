import React, { useState } from 'react';
import styles from './Common.module.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({placeholder, data}) {
  const [ filteredData, setFilteredData ] = useState([]);

  const handleSearch = (e) => {
    const searchWord = e.target.value.toLowerCase();
    const newFilter = data.filter(value => {
      return value.name.toLowerCase().includes(searchWord);
    });
    setFilteredData(newFilter);
  }

  return (
    <div className={styles.search}>
      <div className={styles.search_inputs}>
        <input type="text" placeholder={placeholder} onChange={handleSearch}/>
        <div className={styles.search_icon}><SearchIcon /></div>
      </div>
      <div className={styles.search_result}>
        {filteredData.map((item, index) => {
          return (
            <h1>{item.name}</h1>
        )})}
        </div>
    </div>
);
}
