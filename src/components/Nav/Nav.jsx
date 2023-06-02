import React from 'react';
import styles from "./Nav.module.css";
import SearchBar  from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const {onSearch}=props
  return (
    <div className={styles.container}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav