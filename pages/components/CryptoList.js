import React from "react";

import CryptoCard from "./CryptoCard";
import styles from "../../styles/CryptoList.module.css";

const CryptoList = ({ coinsData }) => {
    return (
        <div className={styles.crypto_list}>
            {coinsData.map((coin, index) => {
                return (
                    <CryptoCard
                        key={index}
                        image={coin.image}
                        name={coin.name}
                        price={coin.current_price}
                    />
                );
            })}
        </div>
    );
};

export default CryptoList;