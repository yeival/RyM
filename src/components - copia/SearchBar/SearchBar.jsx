
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch}=props
   return (
      <div>
         <input type='search' />
         <button className={styles.button} onClick={onSearch}>Agregar</button>
      </div>
   );
}
