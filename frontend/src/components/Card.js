import React from "react";
import styles from "./Card.module.scss";


// eslint-disable-next-line react/prop-types
function Card({ title, imageurl, body }) {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={imageurl} alt="" />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardBody}>
            <p>{body}</p>
          </div>
        </div>
        <div className={styles.btn}>
          <buton className = {styles.btn}>
            <a>View More</a>
          </buton>
        </div>
      </div>
    </div>
  );
}
<h1 id={styles.h1}>All APIs</h1>;
export default Card;
