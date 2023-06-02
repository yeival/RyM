
import React from 'react';
// import styles from './prueba.module.css'
import styles from './card.module.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      

      <div className={styles.card}>
         <Link to={"/detail/${id}"}>Detail</Link>,
         <div className={styles.front}>
            <h1 className={styles.h1} >{name}</h1>
            <img className={styles.img} src={image} alt='' />
         </div>
         <div className={styles.back}>
            <h2 className={styles.ca}>Estatus: {status} </h2>
            <h2 className={styles.ca}>Especie: {species}</h2>
            <h2 className={styles.ca}>Gender: {gender}</h2>
            <h2 className={styles.ca}>Origin: {origin}</h2>
         </div>

         <button className={styles.a} onClick={() => { onClose(id) }}>X</button>
      </div>

   );
}






// import styles from './prueba.module.css'

// export default function Card(props) {
//    const {name, status, species, gender, origin, image, onClose}=props;
//       return (
//       <div className={styles.card}>
//          <div className={`${styles.face} ${styles.front}`}>
//          <img className={styles.img} src={image} alt='' />
//             <h2 className={styles.name} >{name}</h2>
//          </div>
//          <div className={styles.back}>
//             <h3 className={`${styles.face} ${styles.back}`} >{name}</h3>
//             <h2>{status}</h2>
//             <h2>{species}</h2>
//             <h2>{gender}</h2>
//             <h2>{origin}</h2>
//          </div>
//          <button onClick={onClose}>X</button>
//       </div>
//    );
// }









