import React, { useState } from 'react';
import styles from './Recipes.module.css';
import SearchBar from '../../Common/SearchBar';
import Data from '../../../Data.json';
import AddIcon from '@mui/icons-material/Add';

export default function Recipes() {
  const [ filteredData, setFilteredData ] = useState(Data);
  const [ state, setState ] = useState({enteredWord: ''});

  const handleSearch = (e) => {
    const searchWord = e.target.value.toLowerCase();
    const newFilter = Data.filter(item => {
      return item.name.toLowerCase().includes(searchWord);
    });
    searchWord.length > 0 ? setFilteredData(newFilter) : setFilteredData(Data);
    setState({...state, [e.target.name]: e.target.value});
  }

  const clearInput = () => {
    setFilteredData(Data);
    setState({enteredWord: ''});
  }

  return (
    <div className={styles.recipes_wrapper}>
      <div className={styles.user_banner}>Bradly's Recipes</div>
      <div className={styles.filter_bar}>
        <SearchBar id={styles.search_bar}
          placeholder='Search for recipes...'
          data={filteredData}
          handleSearch={handleSearch}
          clearInput={clearInput}
          state={state}
        />
      </div>
      <div className={styles.recipes_container}>
        {(state.enteredWord === '' || filteredData.length === 0) ?
        <div className={styles.recipe_card}>
          <AddIcon className={styles.add_icon} />
        </div> : null}
        {filteredData.map((item, index) => {
          return (
            <div key={index} className={styles.recipe_card}>
              <div className={styles.recipe_image}></div>
              <div className={styles.recipe_text}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

