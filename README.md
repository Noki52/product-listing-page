# Product Listing Page

## Overview
This project is a React.js application that displays a list of products, allowing users to filter and sort the products, as well as view detailed information about each product. The application uses modular CSS for styling and is designed to be fully responsive.

## Features
- **Product Listing**: Displays a grid of products with their name, price, and image.
- **Filter by Category**: Users can filter products based on their categories.
- **Sort by Price**: Products can be sorted by price, either from low to high or high to low.
- **Product Details**: Clicking on a product shows a detailed view with an enlarged image, description, and price.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Project Structure
```
project-root/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductList/
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductList.module.css
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductCard.module.css
│   │   ├── ProductDetails/
│   │       ├── ProductDetails.jsx
│   │       ├── ProductDetails.module.css
│   ├── data/
│   │   ├── products.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.js
├── package.json
├── README.md
```

## Installation

### Prerequisites
- Node.js installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Noki52/product-listing-page.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **View Products**:
    - The main page lists all products.
2. **Filter Products**:
    - Use the dropdown to select a category and filter products.
3. **Sort Products**:
    - Use the sort dropdown to organize products by price (low to high or high to low).
4. **View Details**:
    - Click on any product to see its detailed view. Use the "Back" button to return to the main list.

## Data Source
The product data is stored in `src/data/products.json`. You can edit this file to add or update products. Each product should have the following structure:
```json
{
  "id": 1,
  "name": "Product Name",
  "image": "/path/to/image.jpg",
  "price": 100,
  "category": "Category Name"
}
```

## Technologies Used
- **Frontend**: React.js
- **Styling**: CSS Modules
- **Data**: Static JSON file
