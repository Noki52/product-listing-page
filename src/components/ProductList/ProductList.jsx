import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        setProducts(productsData);
        setFilteredProducts(productsData);

        // Визначення унікальних категорій
        const uniqueCategories = [
            ...new Set(productsData.map((product) => product.category))
        ];
        setCategories(uniqueCategories);
    }, []);

    const handleFilter = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        if (selectedCategory) {
            setFilteredProducts(
                products.filter((product) => product.category === selectedCategory)
            );
        } else {
            setFilteredProducts(products);
        }
    };

    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            return order === "lowToHigh" ? a.price - b.price : b.price - a.price;
        });
        setFilteredProducts(sortedProducts);
    };

    return (
        <div>
            <h1 className={styles.page_title}>Product List Page</h1>
            <div className={styles.container}>
                <div>
                    <label>Filter by Category:</label>
                    <select
                        value={category}
                        onChange={handleFilter}
                        className={styles.select}
                    >
                        <option value="">All</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Sort by Price:</label>
                    <select value={sortOrder} onChange={handleSort} className={styles.select}>
                        <option value="">None</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>
            <div className={styles.productList}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
