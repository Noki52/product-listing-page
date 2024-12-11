import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="main_content">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
