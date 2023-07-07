import React from "react";

import styles from '../../styles/CryptoCard.module.css';

const CryptoCard = ({ image, name, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.card_info}>
                <h2>{name}</h2>
                <h3>${price.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default CryptoCard;