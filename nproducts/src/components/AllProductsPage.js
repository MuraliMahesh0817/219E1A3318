import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    const data = await fetchProducts(filters);
    setProducts(data);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      {currentProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default AllProductsPage;