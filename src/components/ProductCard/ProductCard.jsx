import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.price}>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
                <button className={styles.button}>View Details</button>
            </Link>
        </div>
    );
};

export default ProductCard;
