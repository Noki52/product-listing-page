import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.find((product) => product.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className={styles.pdp_wrapper}>
            <h1 className={styles.page_title}>Product Detailing Page</h1>
            <div className={styles.container}>
                <button onClick={() => navigate(-1)} className={styles.button}>
                    Back to Products
                </button>
                <div>
                    <img src={product.image} alt={product.name} className={styles.image}/>
                    <div>
                        <h2 className={styles.title}>{product.name}</h2>
                        <p className={styles.description}>
                            <strong>Description:</strong> This is a detailed description of{" "}
                            {product.name}.
                        </p>
                        <p className={styles.description_price}>Price: ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
